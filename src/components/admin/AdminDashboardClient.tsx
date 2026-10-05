"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Save,
  LogOut,
  ExternalLink,
  Bell,
  Phone,
  Euro,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { SiteSettings } from "@/types/settings";

interface AdminDashboardClientProps {
  initialSettings: SiteSettings;
}

export function AdminDashboardClient({ initialSettings }: AdminDashboardClientProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<SiteSettings>(initialSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setFeedback({
          type: "error",
          message: data.error || "Une erreur est survenue lors de l'enregistrement.",
        });
        setIsSaving(false);
        return;
      }

      setFeedback({
        type: "success",
        message: "Les paramètres du site ont été mis à jour avec succès !",
      });
      setIsSaving(false);
      router.refresh();
    } catch {
      setFeedback({
        type: "error",
        message: "Erreur réseau. Impossible d'enregistrer les paramètres.",
      });
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#232B28] pb-24">
      {/* Header Admin */}
      <header className="sticky top-0 z-30 bg-white border-b border-[#E8E4DC] px-4 sm:px-8 py-4 shadow-2xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-sage-600 animate-pulse" />
            <div>
              <h1 className="text-base font-bold text-[#232B28]">Espace Praticien</h1>
              <p className="text-xs text-[#58625E]">Paramètres du cabinet • {formData.contact.fullName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#E8E4DC] text-xs font-medium text-[#232B28] hover:bg-[#F7F5F0] transition-colors"
            >
              <span>Voir le site</span>
              <ExternalLink className="w-3.5 h-3.5 text-sage-600" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-red-200 text-xs font-medium text-red-700 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Notification feedback */}
          {feedback && (
            <div
              className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-medium border ${
                feedback.type === "success"
                  ? "bg-sage-50 text-sage-900 border-sage-200"
                  : "bg-red-50 text-red-900 border-red-200"
              }`}
            >
              {feedback.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-sage-700 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-700 shrink-0" />
              )}
              <span>{feedback.message}</span>
            </div>
          )}

          {/* 1. Bannière d'alerte */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E4DC] shadow-2xs space-y-5">
            <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-sage-50 text-sage-700">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#232B28]">Bannière d&apos;alerte / Congés</h2>
                  <p className="text-xs text-[#58625E]">Affichez un bandeau informatif en haut du site</p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.alertBanner.enabled}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      alertBanner: { ...formData.alertBanner, enabled: e.target.checked },
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#E8E4DC] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sage-600"></div>
                <span className="ml-3 text-xs font-semibold text-[#232B28]">
                  {formData.alertBanner.enabled ? "Active" : "Désactivée"}
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-[#232B28]">Message à afficher</label>
                <input
                  type="text"
                  value={formData.alertBanner.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      alertBanner: { ...formData.alertBanner, message: e.target.value },
                    })
                  }
                  placeholder="Ex: Le cabinet sera fermé pour congés du 1er au 15 août inclus."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#232B28]">Type de message</label>
                <select
                  value={formData.alertBanner.variant}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      alertBanner: {
                        ...formData.alertBanner,
                        variant: e.target.value as "info" | "warning" | "holiday",
                      },
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                >
                  <option value="info">Information (Vert sauge)</option>
                  <option value="holiday">Congés annuels (Vert doux)</option>
                  <option value="warning">Important (Ambré)</option>
                </select>
              </div>
            </div>
          </section>

          {/* 2. Coordonnées directes */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E4DC] shadow-2xs space-y-5">
            <div className="flex items-center gap-2.5 border-b border-[#E8E4DC] pb-4">
              <div className="p-2 rounded-xl bg-sage-50 text-sage-700">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#232B28]">Coordonnées & Prise de rendez-vous</h2>
                <p className="text-xs text-[#58625E]">Téléphone, email, adresse et lien Doctolib</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#232B28]">Téléphone du cabinet</label>
                <input
                  type="text"
                  value={formData.contact.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, phone: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#232B28]">Adresse email</label>
                <input
                  type="email"
                  value={formData.contact.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, email: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-[#232B28]">Lien Doctolib (URL)</label>
                <input
                  type="url"
                  value={formData.contact.doctolibUrl}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, doctolibUrl: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-[#232B28]">Lien Google Maps (Itinéraire)</label>
                <input
                  type="url"
                  value={formData.contact.googleMapsUrl}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, googleMapsUrl: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#232B28]">Rue</label>
                <input
                  type="text"
                  value={formData.contact.address.street}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: {
                        ...formData.contact,
                        address: { ...formData.contact.address, street: e.target.value },
                      },
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#232B28]">Code Postal</label>
                  <input
                    type="text"
                    value={formData.contact.address.postalCode}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: {
                          ...formData.contact,
                          address: { ...formData.contact.address, postalCode: e.target.value },
                        },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#232B28]">Ville</label>
                  <input
                    type="text"
                    value={formData.contact.address.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: {
                          ...formData.contact,
                          address: { ...formData.contact.address, city: e.target.value },
                        },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 3. Tarifs indicatifs */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E4DC] shadow-2xs space-y-5">
            <div className="flex items-center gap-2.5 border-b border-[#E8E4DC] pb-4">
              <div className="p-2 rounded-xl bg-sage-50 text-sage-700">
                <Euro className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#232B28]">Tarifs & Remboursement</h2>
                <p className="text-xs text-[#58625E]">Montant du bilan et de la séance individuelle</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#232B28]">Montant du Bilan Psychomoteur (€)</label>
                <input
                  type="text"
                  value={formData.pricing.bilan.amount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pricing: {
                        ...formData.pricing,
                        bilan: { ...formData.pricing.bilan, amount: e.target.value },
                      },
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#232B28]">Montant de la Séance (€)</label>
                <input
                  type="text"
                  value={formData.pricing.seance.amount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pricing: {
                        ...formData.pricing,
                        seance: { ...formData.pricing.seance, amount: e.target.value },
                      },
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-[#232B28]">Note explicative sur le remboursement</label>
                <textarea
                  rows={3}
                  value={formData.pricing.reimbursementNote}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pricing: { ...formData.pricing, reimbursementNote: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
                />
              </div>
            </div>
          </section>

          {/* 4. Prescription médicale */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E4DC] shadow-2xs space-y-5">
            <div className="flex items-center gap-2.5 border-b border-[#E8E4DC] pb-4">
              <div className="p-2 rounded-xl bg-sage-50 text-sage-700">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#232B28]">Cadre réglementaire & Prescription</h2>
                <p className="text-xs text-[#58625E]">Rappel officiel figurant dans la section &quot;Qui suis-je ?&quot;</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#232B28]">Texte légal</label>
              <textarea
                rows={3}
                value={formData.prescriptionNote}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    prescriptionNote: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DC] text-sm bg-[#FDFBF7]"
              />
            </div>
          </section>

          {/* Bouton de sauvegarde fixe ou visible */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white bg-sage-600 hover:bg-sage-700 shadow-md hover:shadow transition-all disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Enregistrement en cours...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Enregistrer les modifications</span>
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
