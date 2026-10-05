import { NextRequest, NextResponse } from "next/server";
import { verifyMasterPassword, createAdminSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password || typeof password !== "string") {
      return NextResponse.json({ error: "Mot de passe requis" }, { status: 400 });
    }

    const isValid = verifyMasterPassword(password);
    if (!isValid) {
      return NextResponse.json({ error: "Mot de passe administrateur incorrect" }, { status: 401 });
    }

    await createAdminSession();
    return NextResponse.json({ success: true, message: "Connexion réussie" });
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur lors de l'authentification" }, { status: 500 });
  }
}
