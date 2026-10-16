import Link from "next/link";
import { Phone, Mail, MapPin, Calendar, ExternalLink, ShieldCheck, Lock } from "lucide-react";
import { SiteSettings } from "@/types/settings";

interface FooterProps {
  settings: SiteSettings;
}

export function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const isMapsPending = !settings.contact.googleMapsUrl || settings.contact.googleMapsUrl === "#";
  const cleanPhoneHref = `tel:${settings.contact.phone.replace(/\s+/g, "")}`;

  return (
    <footer id="contact" className="bg-[#F7F5F0] border-t border-[#E8E4DC] text-[#232B28] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#E8E4DC]">
          {/* Colonne 1 : Praticien & Mission */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#232B28]">
                {settings.contact.fullName}
              </h3>
              <p className="text-sm font-semibold text-sage-700 uppercase tracking-wide">
                {settings.contact.title}
              </p>
            </div>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Cabinet de psychomotricité à Bordeaux (formé à l&apos;IFP de Bordeaux). Accompagnement
              personnalisé à chaque étape de la vie sur prescription médicale.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#58625E] bg-white/70 py-2 px-3 rounded-xl border border-[#E8E4DC] w-fit">
              <ShieldCheck className="w-4 h-4 text-sage-600 shrink-0" />
              <span className="font-medium text-[#232B28]">{settings.legal.rpps}</span>
            </div>
          </div>

          {/* Colonne 2 : Coordonnées directes */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-[#232B28] tracking-tight">
              Coordonnées du Cabinet
            </h4>
            <ul className="space-y-3 text-sm text-[#58625E]">
              <li>
                <a
                  href={cleanPhoneHref}
                  className="flex items-center gap-3 group hover:text-sage-700 transition-colors"
                >
                  <span className="p-2 rounded-lg bg-sage-50 text-sage-700 group-hover:bg-sage-600 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-[#232B28] group-hover:text-sage-700">
                    {settings.contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${settings.contact.email}`}
                  className="flex items-center gap-3 group hover:text-sage-700 transition-colors"
                >
                  <span className="p-2 rounded-lg bg-sage-50 text-sage-700 group-hover:bg-sage-600 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="break-all text-[#232B28] group-hover:text-sage-700">
                    {settings.contact.email}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-sage-50 text-sage-700 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-medium text-[#232B28]">{settings.contact.address.street}</p>
                    <p className="text-xs text-[#58625E]">
                      {settings.contact.address.postalCode} {settings.contact.address.city}
                    </p>
                    {settings.contact.address.complement && (
                      <p className="text-xs text-sage-700 mt-0.5">
                        {settings.contact.address.complement}
                      </p>
                    )}
                    {!isMapsPending && (
                      <a
                        href={settings.contact.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-sage-700 hover:underline mt-1"
                      >
                        <span>Voir sur Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Prise de Rendez-vous */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-[#232B28] tracking-tight">
              Prise de Rendez-vous
            </h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Consultez les disponibilités pour un bilan psychomoteur ou une séance de suivi en ligne, ou contactez directement le cabinet par téléphone ou par mail.
            </p>
            <a
              href={settings.contact.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-sage-600 hover:bg-sage-700 shadow-sm hover:shadow transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre RDV sur Doctolib</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
            <p className="text-xs text-[#58625E] italic">
              * Prescription médicale obligatoire pour un bilan psychomoteur.
            </p>
          </div>
        </div>

        {/* Mentions Légales & Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#58625E]">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {currentYear} {settings.contact.fullName} — {settings.contact.title}. Tous droits réservés.
            </p>
            <p className="text-[11px] text-[#58625E]/80">
              {settings.legal.rpps} • {settings.legal.siret} • {settings.legal.legalStatus}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#accueil"
              className="hover:text-[#232B28] transition-colors"
            >
              Haut de page ↑
            </Link>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-[#58625E]/60 hover:text-sage-700 transition-colors"
              title="Accès praticien"
            >
              <Lock className="w-3 h-3" />
              <span>Espace Pro</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
