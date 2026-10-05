import { Users, FileText, UserCheck } from "lucide-react";
import { SiteSettings } from "@/types/settings";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

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
            <span>Qui suis-je ?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#232B28]">
            Bonjour, je suis {settings.contact.fullName}
          </h2>

          <div className="space-y-4 text-base text-[#58625E] leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <span className="block mt-1 text-xs text-sage-700 font-medium italic">
                * [Paragraphe 1 : Parcours universitaire et école de formation en attente]
              </span>
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
              <span className="block mt-1 text-xs text-sage-700 font-medium italic">
                * [Paragraphe 2 : Philosophie de soin, médiations corporelles et approche en attente]
              </span>
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
          <ImagePlaceholder
            aspectRatio="4/5"
            icon={UserCheck}
            label={`Photo portrait de ${settings.contact.fullName}`}
            subLabel="Photo sobre et avenante (format vertical 4:5 • Recommandé : 1200 x 1500 px)"
            badge="Photo 1/4 (Attente transmission)"
            overlayContent={
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#E8E4DC] shadow-sm">
                <p className="font-bold text-sm text-[#232B28]">{settings.contact.fullName}</p>
                <p className="text-xs text-sage-700 font-medium">{settings.contact.title}</p>
                <div className="mt-2 pt-2 border-t border-[#E8E4DC] flex items-center justify-between text-[11px] text-[#58625E]">
                  <span>Cabinet libéral</span>
                  <span className="text-sage-700 font-medium">Diplômé d&apos;État</span>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
