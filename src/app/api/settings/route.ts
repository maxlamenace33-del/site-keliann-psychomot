import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAdminSession } from "@/lib/auth";
import { getSiteSettings } from "@/lib/settings";
import { siteSettingsSchema } from "@/types/settings";

export async function GET() {
  const settings = await getSiteSettings();
  return NextResponse.json(settings);
}

export async function PUT(request: NextRequest) {
  const isAuthenticated = await getAdminSession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = siteSettingsSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation échouée", details: parsed.error.format() },
        { status: 400 }
      );
    }

    // Si KV est configuré, on persiste sur Upstash Redis / Vercel KV
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      await fetch(`${process.env.KV_REST_API_URL}/set/site_settings`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(JSON.stringify(parsed.data)),
      });
    }

    // Révalidation immédiate du cache de la page d'accueil
    revalidatePath("/");

    return NextResponse.json({ success: true, updated: parsed.data });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur serveur lors de la mise à jour des paramètres" },
      { status: 500 }
    );
  }
}
