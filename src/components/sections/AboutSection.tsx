import { Users, FileText, UserCheck } from "lucide-react";
import { SiteSettings } from "@/types/settings";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface AboutSectionProps {
  settings: SiteSettings;
}

export function AboutSection({ settings }: AboutSectionProps) {
  return (
    <section id="qui-suis-je" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Colonne Gauche : Biographie & Déontologie */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 uppercase tracking-wider bg-sage-50 px-3 py-1 rounded-full">
            <Users className="w-3.5 h-3.5" />
            <span>Qui suis-je ?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#232B28]">
            Bonjour et bienvenue !
          </h2>

          <div className="space-y-4 text-base text-[#58625E] leading-relaxed">
            <p className="font-medium text-[#232B28]">
              Je m&apos;appelle {settings.contact.fullName} et je suis psychomotricien diplômé d&apos;État,
              formé à l&apos;IFP de Bordeaux.
            </p>
            <p>
              J&apos;accompagne les personnes dans leur parcours en prenant en compte leurs besoins,
              leurs difficultés, mais aussi leurs forces et leurs capacités. Pour moi, chaque personne
              est différente, et c&apos;est important de pouvoir s&apos;adapter à elle plutôt que de chercher
              à faire rentrer tout le monde dans le même cadre.
            </p>
            <p>
              Ma vision de la psychomotricité, c&apos;est avant tout de prendre le temps de comprendre
              chaque personne, son fonctionnement et ce qu&apos;elle vit au quotidien. L&apos;idée est de
              construire un accompagnement qui lui corresponde, en s&apos;appuyant sur ses besoins,
              son rythme et ses possibilités.
            </p>
            <p>
              À travers la psychomotricité, le corps devient un moyen d&apos;explorer, d&apos;expérimenter
              et de progresser. L&apos;accompagnement peut permettre de développer ses compétences,
              de mieux se connaître et de gagner progressivement en confiance, à chaque étape de la vie.
            </p>
            <p>
              Je souhaite que chacun puisse trouver sa place dans les séances, se sentir à l&apos;aise
              et avancer à son rythme. La relation avec l&apos;entourage me paraît également importante,
              lorsque cela est pertinent, pour pouvoir échanger et construire ensemble un accompagnement adapté.
            </p>
            <p className="font-semibold text-sage-700 pt-1">
              Au plaisir de vous rencontrer !
            </p>
          </div>

          {/* Encadré Déontologique / Ordonnance */}
          <div className="p-5 rounded-2xl bg-sage-50 border-l-4 border-sage-600 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-sm text-sage-900">
              <FileText className="w-4 h-4 text-sage-700 shrink-0" />
              <span>Prescription médicale pour un bilan psychomoteur</span>
            </div>
            <p className="text-xs sm:text-sm text-sage-800 leading-relaxed italic">
              {settings.prescriptionNote}
            </p>
            <p className="text-[11px] text-sage-700/90">
              Conformément au Code de la Santé Publique, la prise en charge en psychomotricité s&apos;effectue sur prescription médicale délivrée par votre médecin.
            </p>
          </div>
        </div>

        {/* Colonne Droite : Visuel Praticien */}
        <div className="lg:col-span-5 flex flex-col items-center lg:sticky lg:top-28">
          <ImagePlaceholder
            aspectRatio="4/5"
            icon={UserCheck}
            label={`Portrait de ${settings.contact.fullName}`}
            subLabel="Photo portrait professionnelle en attente de transmission (Format 4:5)"
            badge="Photo portrait à venir"
            overlayContent={
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#E8E4DC] shadow-sm">
                <p className="font-bold text-sm text-[#232B28]">{settings.contact.fullName}</p>
                <p className="text-xs text-sage-700 font-medium">{settings.contact.title} • IFP de Bordeaux</p>
                <div className="mt-2 pt-2 border-t border-[#E8E4DC] flex items-center justify-between text-[11px] text-[#58625E]">
                  <span>Cabinet libéral • Bordeaux</span>
                  <span className="text-sage-700 font-medium">{settings.legal.rpps}</span>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
