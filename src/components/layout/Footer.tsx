import Link from "next/link";
import { Phone, Mail, MapPin, Calendar, ExternalLink, ShieldCheck, Lock } from "lucide-react";
import { SiteSettings } from "@/types/settings";

interface FooterProps {
  settings: SiteSettings;
}

export function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear();

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
              Cabinet de psychomotricité accueillant les nourrissons, enfants, adolescents et adultes.
              Prise en soin globale et bienveillante sur prescription médicale.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#58625E] bg-white/70 py-2 px-3 rounded-xl border border-[#E8E4DC] w-fit">
              <ShieldCheck className="w-4 h-4 text-sage-600 shrink-0" />
              <span>N° RPPS : {settings.legal.rpps}</span>
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
                  href={`tel:${settings.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 hover:text-sage-700 transition-colors"
                >
                  <span className="p-2 rounded-lg bg-sage-50 text-sage-700">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-[#232B28]">{settings.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${settings.contact.email}`}
                  className="flex items-center gap-3 hover:text-sage-700 transition-colors"
                >
                  <span className="p-2 rounded-lg bg-sage-50 text-sage-700">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span>{settings.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={settings.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-sage-700 transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-sage-50 text-sage-700 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span>
                    {settings.contact.address.street}
                    <br />
                    {settings.contact.address.postalCode} {settings.contact.address.city}
                    {settings.contact.address.complement && (
                      <span className="block text-xs text-[#58625E]/80">
                        {settings.contact.address.complement}
                      </span>
                    )}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Prise de Rendez-vous */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-[#232B28] tracking-tight">
              Prendre Rendez-vous
            </h4>
            <p className="text-sm text-[#58625E] leading-relaxed">
              Consultez les créneaux disponibles pour les bilans initiaux et les séances de suivi en ligne.
            </p>
            <a
              href={settings.contact.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-sage-600 hover:bg-sage-700 shadow-sm hover:shadow transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Réserver sur Doctolib</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
            <p className="text-xs text-[#58625E] italic">
              * Une prescription médicale est obligatoire dès la première séance.
            </p>
          </div>
        </div>

        {/* Mentions Légales & Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#58625E]">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {currentYear} {settings.contact.fullName} — Psychomotricien Diplômé d&apos;État. Tous droits réservés.
            </p>
            <p className="text-[11px] text-[#58625E]/80">
              SIRET : {settings.legal.siret} • {settings.legal.legalStatus}
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
