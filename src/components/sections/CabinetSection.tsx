import { MapPin, Clock, Euro, Sparkles, ExternalLink, Activity, DoorOpen, Accessibility } from "lucide-react";
import { SiteSettings } from "@/types/settings";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface CabinetSectionProps {
  settings: SiteSettings;
}

function formatPrice(amount: number | string): string {
  if (typeof amount === "number") return `${amount} €`;
  const trimmed = amount.trim();
  if (/^\d+([.,]\d+)?$/.test(trimmed)) return `${trimmed} €`;
  return trimmed;
}

export function CabinetSection({ settings }: CabinetSectionProps) {
  const isMapsPending = !settings.contact.googleMapsUrl || settings.contact.googleMapsUrl === "#";

  return (
    <section id="infos-pratiques" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="bg-white rounded-3xl border border-[#E8E4DC] p-8 sm:p-12 shadow-sm space-y-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 uppercase tracking-wider bg-sage-50 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Accès & Informations pratiques</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#232B28]">
            Le Cabinet & Tarifs
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne Gauche : Adresse, Horaires, Tarifs, Mutuelle */}
          <div className="space-y-8">
            {/* Adresse */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-semibold text-base text-[#232B28]">
                  <MapPin className="w-5 h-5 text-sage-600" />
                  <span>Adresse & Accès</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-sage-800 bg-sage-50 border border-sage-200 px-2.5 py-0.5 rounded-full font-medium">
                  <Accessibility className="w-3.5 h-3.5 text-sage-700" />
                  <span>Accès PMR (RDC)</span>
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#E8E4DC] text-sm text-[#232B28] space-y-1">
                <p className="font-semibold text-base">{settings.contact.address.street}</p>
                <p className="text-[#58625E] font-medium">
                  {settings.contact.address.postalCode} {settings.contact.address.city}
                </p>
                {settings.contact.address.complement && (
                  <p className="text-xs text-sage-700 font-medium pt-1">
                    {settings.contact.address.complement}
                  </p>
                )}
              </div>
            </div>

            {/* Horaires */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-semibold text-base text-[#232B28]">
                  <Clock className="w-5 h-5 text-sage-600" />
                  <span>Horaires de consultation</span>
                </div>
                <span className="text-[11px] text-sage-700 bg-sage-50 px-2.5 py-0.5 rounded-full font-medium">
                  Sur rendez-vous
                </span>
              </div>
              <div className="divide-y divide-[#E8E4DC]/60 rounded-xl border border-[#E8E4DC] bg-[#FDFBF7] px-4 py-1 text-xs sm:text-sm text-[#58625E]">
                {settings.openingHours.map((h, i) => {
                  const isClosed = h.slots.toLowerCase().includes("fermé");
                  return (
                    <div key={i} className="flex flex-wrap justify-between items-center py-2 gap-2">
                      <span className={isClosed ? "text-[#58625E]/70" : "font-medium text-[#232B28]"}>
                        {h.day}
                      </span>
                      <span
                        className={
                          isClosed
                            ? "text-xs text-[#58625E]/60 italic"
                            : "font-mono text-xs sm:text-sm font-medium text-[#232B28]"
                        }
                      >
                        {h.slots}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tarifs */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-semibold text-base text-[#232B28]">
                <Euro className="w-5 h-5 text-sage-600" />
                <span>Honoraires & Tarifs</span>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E8E4DC] flex justify-between items-start gap-4">
                  <div>
                    <p className="font-semibold text-sm text-[#232B28]">{settings.pricing.seance.label}</p>
                    <p className="text-xs text-[#58625E] mt-1">Durée de la séance : {settings.pricing.seance.duration}</p>
                  </div>
                  <span className="text-base sm:text-lg font-bold text-sage-700 shrink-0 bg-white px-3.5 py-1.5 rounded-lg border border-[#E8E4DC]">
                    {formatPrice(settings.pricing.seance.amount)}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E8E4DC] flex justify-between items-start gap-4">
                  <div>
                    <p className="font-semibold text-sm text-[#232B28]">{settings.pricing.bilan.label}</p>
                    <p className="text-xs text-[#58625E] mt-1">{settings.pricing.bilan.description}</p>
                  </div>
                  <span className="text-base sm:text-lg font-bold text-sage-700 shrink-0 bg-white px-3.5 py-1.5 rounded-lg border border-[#E8E4DC]">
                    {formatPrice(settings.pricing.bilan.amount)}
                  </span>
                </div>
              </div>
            </div>

            {/* Note Mutuelle & Aides */}
            <div className="p-4 rounded-xl bg-sage-50 text-xs sm:text-sm text-sage-900 border border-sage-200 space-y-1">
              <p className="font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sage-700 shrink-0" />
                <span>Remboursements mutuelles & aides (MDPH, PCO)</span>
              </p>
              <p className="leading-relaxed text-sage-800">
                {settings.pricing.reimbursementNote}
              </p>
            </div>
          </div>

          {/* Colonne Droite : Galerie Photos Réelles du Cabinet */}
          <div className="space-y-4 flex flex-col justify-between">
            {/* Photo 1 du Cabinet */}
            <ImagePlaceholder
              aspectRatio="16/10"
              icon={Activity}
              imageSrc="/images/cabinet-2.jpg"
              label="Salle de consultation"
              subLabel="73 Av. Louis Barthou, Bordeaux • Espace lumineux en rez-de-chaussée (Accès PMR)"
              badge="Le Cabinet"
            />

            {/* Photo 2 du Cabinet */}
            <ImagePlaceholder
              aspectRatio="16/10"
              icon={DoorOpen}
              imageSrc="/images/cabinet-1.jpg"
              label="Espace d'accueil & d'entretien"
              subLabel="Un cadre calme, chaleureux et adapté à chaque âge"
              badge="Le Cabinet"
            />

            {/* Bouton Google Maps */}
            {isMapsPending ? (
              <div className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-dashed border-[#E8E4DC] bg-[#FDFBF7] text-xs font-medium text-[#58625E]">
                <MapPin className="w-4 h-4 text-sage-600" />
                <span>Fiche Google Maps (Lien direct en attente d&apos;attribution)</span>
              </div>
            ) : (
              <a
                href={settings.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#E8E4DC] bg-[#FDFBF7] hover:bg-[#F7F5F0] hover:border-sage-400 text-sm font-medium text-[#232B28] transition-colors"
              >
                <MapPin className="w-4 h-4 text-sage-600" />
                <span>Ouvrir l&apos;itinéraire sur Google Maps (73 Av. Louis Barthou)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
