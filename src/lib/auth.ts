import { cookies } from "next/headers";

export const SESSION_COOKIE_NAME = "psychomot_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 jours

// Récupération de la clé secrète avec fallback sécurisé pour le développement
function getSecretKey(): string {
  return process.env.AUTH_SECRET || "psychomot-secret-key-32-chars-minimum-fallback";
}

// Comparaison en temps constant pour éviter les timing attacks
export function verifyMasterPassword(providedPassword: string): boolean {
  const masterPassword = process.env.ADMIN_PASSWORD || "admin123";
  
  const providedBuffer = Buffer.from(providedPassword);
  const masterBuffer = Buffer.from(masterPassword);

  if (providedBuffer.length !== masterBuffer.length) {
    return false;
  }

  // Node.js crypto timingSafeEqual
  const crypto = require("crypto");
  return crypto.timingSafeEqual(providedBuffer, masterBuffer);
}

// Signature simple et sécurisée HMAC-SHA256
async function signToken(payload: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const signatureBase64 = Buffer.from(signature).toString("base64url");
  return `${Buffer.from(payload).toString("base64url")}.${signatureBase64}`;
}

async function verifyToken(token: string, secret: string): Promise<boolean> {
  const [payloadBase64, signatureBase64] = token.split(".");
  if (!payloadBase64 || !signatureBase64) return false;

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );

  const payload = Buffer.from(payloadBase64, "base64url").toString();
  const signature = Buffer.from(signatureBase64, "base64url");

  return await crypto.subtle.verify("HMAC", key, signature, encoder.encode(payload));
}

export async function createAdminSession(): Promise<string> {
  const payload = JSON.stringify({ role: "admin", exp: Date.now() + SESSION_MAX_AGE * 1000 });
  const token = await signToken(payload, getSecretKey());
  
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  return token;
}

export async function getAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return false;

  try {
    const isValid = await verifyToken(token, getSecretKey());
    if (!isValid) return false;

    const [payloadBase64] = token.split(".");
    const payload = JSON.parse(Buffer.from(payloadBase64, "base64url").toString());
    return payload.exp > Date.now();
  } catch {
    return false;
  }
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
