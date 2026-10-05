import { MapPin, Clock, Euro, Sparkles, Activity, ExternalLink } from "lucide-react";
import { SiteSettings } from "@/types/settings";

interface CabinetSectionProps {
  settings: SiteSettings;
}

export function CabinetSection({ settings }: CabinetSectionProps) {
  return (
    <section id="infos-pratiques" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="bg-white rounded-3xl border border-[#E8E4DC] p-8 sm:p-12 shadow-sm space-y-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 uppercase tracking-wider bg-sage-50 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Modalités pratiques</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#232B28]">
            Le Cabinet & Informations Utiles
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne Gauche : Horaires, Tarifs, Mutuelle */}
          <div className="space-y-8">
            {/* Horaires */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-semibold text-base text-[#232B28]">
                <Clock className="w-5 h-5 text-sage-600" />
                <span>Horaires d&apos;ouverture</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#58625E]">
                {settings.openingHours.map((h, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-[#E8E4DC]/60 pr-2">
                    <span className="font-medium text-[#232B28]">{h.day}</span>
                    <span>{h.slots}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tarifs */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-semibold text-base text-[#232B28]">
                <Euro className="w-5 h-5 text-sage-600" />
                <span>Tarifs indicatifs</span>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E8E4DC] flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm text-[#232B28]">{settings.pricing.bilan.label}</p>
                    <p className="text-xs text-[#58625E]">{settings.pricing.bilan.description}</p>
                  </div>
                  <span className="text-lg font-bold text-sage-700 ml-4 shrink-0">
                    {settings.pricing.bilan.amount} €
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E8E4DC] flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm text-[#232B28]">{settings.pricing.seance.label}</p>
                    <p className="text-xs text-[#58625E]">Durée : {settings.pricing.seance.duration}</p>
                  </div>
                  <span className="text-lg font-bold text-sage-700 ml-4 shrink-0">
                    {settings.pricing.seance.amount} €
                  </span>
                </div>
              </div>
            </div>

            {/* Remboursement */}
            <div className="p-4 rounded-xl bg-sage-50 text-xs sm:text-sm text-sage-900 border border-sage-200 space-y-1">
              <p className="font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sage-700" />
                <span>Prise en charge & Mutuelles</span>
              </p>
              <p className="leading-relaxed text-sage-800">
                {settings.pricing.reimbursementNote}
              </p>
            </div>
          </div>

          {/* Colonne Droite : Galerie Photos Cabinet */}
          <div className="space-y-4 flex flex-col justify-between">
            {/* Photo Principale */}
            <div className="aspect-[16/10] bg-gradient-to-br from-sage-100 to-teal-soft/30 rounded-2xl border border-[#E8E4DC] flex items-center justify-center p-6 text-center text-sage-700">
              <div className="space-y-2">
                <Activity className="w-12 h-12 mx-auto stroke-1 opacity-70" />
                <p className="text-sm font-semibold">Salle de consultation & Matériel moteur</p>
                <p className="text-xs text-[#58625E]">Un espace spacieux, lumineux et sécurisant</p>
              </div>
            </div>

            {/* 2 Vignettes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F7F5F0] to-sage-50 rounded-xl border border-[#E8E4DC] flex items-center justify-center p-3 text-center">
                <p className="text-xs text-[#58625E] font-medium">Devanture & Accès PMR</p>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F7F5F0] to-teal-soft/20 rounded-xl border border-[#E8E4DC] flex items-center justify-center p-3 text-center">
                <p className="text-xs text-[#58625E] font-medium">Salle d&apos;attente paisible</p>
              </div>
            </div>

            {/* Bouton Google Maps */}
            <a
              href={settings.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#E8E4DC] bg-[#FDFBF7] hover:bg-[#F7F5F0] text-sm font-medium text-[#232B28] transition-colors"
            >
              <MapPin className="w-4 h-4 text-sage-600" />
              <span>Ouvrir l&apos;itinéraire sur Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
