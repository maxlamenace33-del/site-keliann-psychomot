import Link from "next/link";
import { Calendar, MapPin, ShieldCheck, ExternalLink } from "lucide-react";
import { SiteSettings } from "@/types/settings";

interface HeroSectionProps {
  settings: SiteSettings;
}

export function HeroSection({ settings }: HeroSectionProps) {
  return (
    <section
      id="accueil"
      className="relative pt-12 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
    >
      <div className="text-center max-w-3xl mx-auto space-y-6">
        {/* Badge réassurance praticien D.E. */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-50 border border-sage-200 text-xs sm:text-sm font-medium text-sage-800">
          <ShieldCheck className="w-4 h-4 text-sage-600 shrink-0" />
          <span>Praticien de Santé Diplômé d&apos;État • Prise en soin personnalisée</span>
        </div>

        {/* Titre H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#232B28] leading-[1.15]">
          Prendre soin du corps et de l&apos;esprit par le{" "}
          <span className="text-sage-600 underline decoration-teal-accent/50 decoration-wavy decoration-2">
            mouvement
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl text-[#58625E] leading-relaxed max-w-2xl mx-auto">
          Bienvenue au cabinet de psychomotricité de <strong>{settings.contact.fullName}</strong>.
          J&apos;accompagne les enfants, adolescents et adultes pour dénouer les difficultés motrices,
          scolaires et émotionnelles à travers une approche globale et bienveillante.
        </p>

        {/* Double CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={settings.contact.doctolibUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-sage-600 hover:bg-sage-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            <span>Prendre rendez-vous</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>

          <Link
            href="#infos-pratiques"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium text-[#232B28] bg-white border border-[#E8E4DC] hover:bg-[#F7F5F0] hover:border-sage-400 transition-all duration-200"
          >
            <MapPin className="w-4 h-4 text-sage-600" />
            <span>Cabinet & Localisation</span>
          </Link>
        </div>

        {/* Localisation & Prescription */}
        <p className="text-xs text-[#58625E] pt-2">
          📍 Cabinet situé à {settings.contact.address.city} • Sur prescription médicale uniquement
        </p>
      </div>
    </section>
  );
}
