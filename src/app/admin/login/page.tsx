"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, ArrowLeft, Loader2, ShieldCheck, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Mot de passe incorrect");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Une erreur réseau est survenue. Veuillez réessayer.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col justify-center items-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        {/* Lien retour */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#58625E] hover:text-[#232B28] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au site public</span>
        </Link>

        {/* Carte de connexion */}
        <div className="bg-white border border-[#E8E4DC] rounded-3xl p-8 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-sage-50 text-sage-700 flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#232B28]">
              Espace Praticien
            </h1>
            <p className="text-xs text-[#58625E]">
              Gestion simplifiée des paramètres du cabinet • Keliann L&apos;Azou
            </p>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-[#232B28] uppercase tracking-wider"
              >
                Mot de passe maître
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
                className="w-full px-4 py-3 rounded-xl border border-[#E8E4DC] bg-[#FDFBF7] text-sm text-[#232B28] placeholder-[#58625E]/50 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-sage-600 hover:bg-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-500 shadow-sm transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Connexion en cours...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Accéder à l&apos;administration</span>
                </>
              )}
            </button>
          </form>

          <div className="pt-2 text-center">
            <p className="text-[11px] text-[#58625E]/70">
              Accès réservé au titulaire du cabinet. Authentification sécurisée par session locale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
