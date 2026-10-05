import defaultSettings from "@/data/default-settings.json";
import { SiteSettings, siteSettingsSchema } from "@/types/settings";

export function getStaticSiteSettings(): SiteSettings {
  const result = siteSettingsSchema.safeParse(defaultSettings);
  if (result.success) {
    return result.data;
  }
  return defaultSettings as SiteSettings;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  // Optionnel : Récupération dynamique depuis KV si disponible en production
  try {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const response = await fetch(`${process.env.KV_REST_API_URL}/get/site_settings`, {
        headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
        next: { tags: ["settings"], revalidate: 60 },
      });
      const data = await response.json();
      if (data?.result) {
        const parsed = siteSettingsSchema.safeParse(JSON.parse(data.result));
        if (parsed.success) return parsed.data;
      }
    }
  } catch (error) {
    console.warn("Utilisation des paramètres par défaut suite à l'erreur KV :", error);
  }

  return getStaticSiteSettings();
}
