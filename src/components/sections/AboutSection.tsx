import { Users, FileText, Activity } from "lucide-react";
import { SiteSettings } from "@/types/settings";

interface AboutSectionProps {
  settings: SiteSettings;
}

export function AboutSection({ settings }: AboutSectionProps) {
  return (
    <section id="qui-suis-je" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Colonne Gauche : Biographie & Déontologie */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 uppercase tracking-wider bg-sage-50 px-3 py-1 rounded-full">
            <Users className="w-3.5 h-3.5" />
            <span>Le Praticien</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#232B28]">
            Bonjour, je suis {settings.contact.fullName}
          </h2>

          <div className="space-y-4 text-base text-[#58625E] leading-relaxed">
            <p>
              Diplômé d&apos;État, j&apos;exerce avec la conviction profonde que le corps est
              le premier médiateur de nos apprentissages, de notre relation aux autres et de notre
              bien-être émotionnel.
            </p>
            <p>
              Mon approche s&apos;appuie sur le jeu, l&apos;expérimentation corporelle, les parcours moteurs,
              la relaxation et les médiations artistiques ou graphiques pour accompagner chaque patient à son
              rythme, sans mise en échec.
            </p>
          </div>

          {/* Encadré Déontologique / Ordonnance */}
          <div className="p-5 rounded-2xl bg-sage-50 border-l-4 border-sage-600 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-sm text-sage-900">
              <FileText className="w-4 h-4 text-sage-700" />
              <span>Cadre légal & Prescription médicale</span>
            </div>
            <p className="text-xs sm:text-sm text-sage-800 leading-relaxed">
              {settings.prescriptionNote}
            </p>
          </div>
        </div>

        {/* Colonne Droite : Visuel Praticien */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full aspect-[4/5] bg-gradient-to-tr from-sage-100 to-teal-soft/40 rounded-3xl border border-[#E8E4DC] p-4 flex flex-col justify-end relative shadow-sm overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-sage-600/40">
              <Activity className="w-24 h-24 stroke-1" />
            </div>
            <div className="relative z-10 bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-white/80 shadow-sm">
              <p className="font-bold text-[#232B28]">{settings.contact.fullName}</p>
              <p className="text-xs text-sage-700 font-medium">Psychomotricien D.E.</p>
              <div className="mt-2 pt-2 border-t border-[#E8E4DC] flex items-center justify-between text-[11px] text-[#58625E]">
                <span>Cabinet libéral</span>
                <span>Conventionné</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
