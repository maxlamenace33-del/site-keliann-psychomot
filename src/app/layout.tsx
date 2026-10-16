import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { getSiteSettings } from "@/lib/settings";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AlertBanner } from "@/components/layout/AlertBanner";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://keliann-psychomot.fr"),
  title: {
    default: "Kéliann L'Azou | Psychomotricien D.E. à Bordeaux (33200)",
    template: "%s | Kéliann L'Azou Psychomotricien Bordeaux",
  },
  description:
    "Cabinet de psychomotricité de Kéliann L'Azou, Psychomotricien Diplômé d'État (IFP de Bordeaux), situé au 73 Av. Louis Barthou, 33200 Bordeaux. Bilans psychomoteurs et suivi personnalisé.",
  keywords: [
    "Psychomotricien Bordeaux",
    "Psychomotricité Bordeaux Caudéran",
    "Bilan psychomoteur Bordeaux",
    "Kéliann L'Azou",
    "Keliann L'Azou",
    "Graphisme et écriture",
    "Coordination et dyspraxie",
    "Motricité fine",
    "Particularités sensorielles",
    "Développement psychomoteur",
  ],
  authors: [{ name: "Kéliann L'Azou" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://keliann-psychomot.fr",
    title: "Kéliann L'Azou | Psychomotricien Diplômé d'État à Bordeaux",
    description:
      "Cabinet de psychomotricité au 73 Av. Louis Barthou, 33200 Bordeaux : accompagnement bienveillant et individualisé à chaque étape de la vie.",
    siteName: "Kéliann L'Azou Psychomotricien",
  },
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${settings.contact.fullName} - ${settings.contact.title}`,
    medicalSpecialty: "Psychomotor Therapy",
    identifier: settings.legal.rpps,
    telephone: settings.contact.phone,
    email: settings.contact.email,
    url: "https://keliann-psychomot.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.contact.address.street,
      addressLocality: settings.contact.address.city,
      postalCode: settings.contact.address.postalCode,
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:15",
        closes: "18:45",
      },
    ],
    priceRange: "45€",
  };

  return (
    <html lang="fr" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#232B28] font-sans antialiased">
        <AlertBanner banner={settings.alertBanner} />
        <Navbar settings={settings} />
        <main className="flex-1">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
