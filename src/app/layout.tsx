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
    default: "Keliann L'Azou | Psychomotricien D.E. - Cabinet de Psychomotricité",
    template: "%s | Keliann L'Azou Psychomotricien",
  },
  description:
    "Cabinet de psychomotricité de Keliann L'Azou, Psychomotricien Diplômé d'État. Bilans psychomoteurs et rééducation pour enfants, adolescents et adultes sur prescription médicale.",
  keywords: [
    "Psychomotricien",
    "Psychomotricité",
    "Bilan psychomoteur",
    "Keliann L'Azou",
    "Troubles des apprentissages",
    "TDAH",
    "Dysgraphie",
    "Dyspraxie",
    "Rééducation motrice",
  ],
  authors: [{ name: "Keliann L'Azou" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://keliann-psychomot.fr",
    title: "Keliann L'Azou | Psychomotricien Diplômé d'État",
    description:
      "Cabinet de psychomotricité : accompagnement bienveillant pour enfants, adolescents et adultes sur prescription médicale.",
    siteName: "Keliann L'Azou Psychomotricien",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

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
        opens: "08:30",
        closes: "19:30",
      },
    ],
    priceRange: "$$",
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
