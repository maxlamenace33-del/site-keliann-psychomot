import fs from "fs/promises";
import os from "os";
import path from "path";
import defaultSettings from "@/data/default-settings.json";
import { SiteSettings, siteSettingsSchema } from "@/types/settings";

const LIVE_SETTINGS_PATH = path.join(process.cwd(), "src/data/live-settings.json");
const TMP_SETTINGS_PATH = path.join(os.tmpdir(), "psychomot-live-settings.json");

declare global {
  var __psychomotLiveSettings: SiteSettings | undefined;
}

export function getStaticSiteSettings(): SiteSettings {
  const result = siteSettingsSchema.safeParse(defaultSettings);
  if (result.success) {
    return result.data;
  }
  return defaultSettings as SiteSettings;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  // 1. Si Vercel KV / Upstash Redis est configuré (Cloud / Production permanente)
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
    console.warn("Erreur KV, bascule sur le stockage local :", error);
  }

  // 2. Lecture du fichier live local s'il existe (Localhost / persistance disque)
  try {
    const fileContent = await fs.readFile(LIVE_SETTINGS_PATH, "utf-8");
    const parsed = siteSettingsSchema.safeParse(JSON.parse(fileContent));
    if (parsed.success) {
      return parsed.data;
    }
  } catch {
    // Si le fichier local n'existe pas encore
  }

  // 3. Fallback Serverless (/tmp ou mémoire globale pour démo Vercel sans KV)
  if (globalThis.__psychomotLiveSettings) {
    return globalThis.__psychomotLiveSettings;
  }
  try {
    const tmpContent = await fs.readFile(TMP_SETTINGS_PATH, "utf-8");
    const parsed = siteSettingsSchema.safeParse(JSON.parse(tmpContent));
    if (parsed.success) {
      globalThis.__psychomotLiveSettings = parsed.data;
      return parsed.data;
    }
  } catch {
    // Aucun fichier temporaire
  }

  // 4. Fallback sur les paramètres par défaut (default-settings.json)
  return getStaticSiteSettings();
}

export async function saveSiteSettings(newSettings: SiteSettings): Promise<void> {
  globalThis.__psychomotLiveSettings = newSettings;

  // 1. Sauvegarde Cloud (si Vercel KV / Upstash est configuré)
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
  } catch {
    // Sur Vercel, process.cwd() est en lecture seule : on écrit dans /tmp pour la démo
    try {
      await fs.writeFile(TMP_SETTINGS_PATH, JSON.stringify(newSettings, null, 2), "utf-8");
    } catch (tmpErr) {
      console.warn("Impossible d'écrire les paramètres temporaires :", tmpErr);
    }
  }
}
