import fs from "fs/promises";
import path from "path";
import defaultSettings from "@/data/default-settings.json";
import { SiteSettings, siteSettingsSchema } from "@/types/settings";

const LIVE_SETTINGS_PATH = path.join(process.cwd(), "src/data/live-settings.json");

export function getStaticSiteSettings(): SiteSettings {
  const result = siteSettingsSchema.safeParse(defaultSettings);
  if (result.success) {
    return result.data;
  }
  return defaultSettings as SiteSettings;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  // 1. Si Vercel KV / Upstash Redis est configuré (Cloud / Production)
  try {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const response = await fetch(`${process.env.KV_REST_API_URL}/get/site_settings`, {
        headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
        cache: "no-store",
      });
      const data = await response.json();
      if (data?.result) {
        const parsed = siteSettingsSchema.safeParse(JSON.parse(data.result));
        if (parsed.success) return parsed.data;
      }
    }
  } catch (error) {
    console.warn("Erreur KV, bascule sur le fichier local :", error);
  }

  // 2. Lecture du fichier live local s'il existe (Localhost / persistance disque)
  try {
    const fileContent = await fs.readFile(LIVE_SETTINGS_PATH, "utf-8");
    const parsed = siteSettingsSchema.safeParse(JSON.parse(fileContent));
    if (parsed.success) {
      return parsed.data;
    }
  } catch {
    // Si le fichier n'existe pas encore ou erreur de lecture, fallback par défaut
  }

  // 3. Fallback sur les paramètres par défaut
  return getStaticSiteSettings();
}

export async function saveSiteSettings(newSettings: SiteSettings): Promise<void> {
  // 1. Sauvegarde Cloud (si Vercel KV est configuré)
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      await fetch(`${process.env.KV_REST_API_URL}/set/site_settings`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(JSON.stringify(newSettings)),
      });
    } catch (err) {
      console.error("Erreur lors de l'enregistrement sur KV :", err);
    }
  }

  // 2. Sauvegarde persistante locale sur le disque (Localhost)
  try {
    await fs.writeFile(LIVE_SETTINGS_PATH, JSON.stringify(newSettings, null, 2), "utf-8");
  } catch (err) {
    console.warn("Impossible d'écrire live-settings.json sur le disque :", err);
  }
}
