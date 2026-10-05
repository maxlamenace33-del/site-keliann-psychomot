# Technical Specification & Data Architecture (TECH_SPEC.md)

## Projet : Site Vitrine Professionnel - Keliann L'Azou, Psychomotricien D.E.
- **Rôle :** Tech Lead & System Architect
- **Version :** 1.0.0
- **Environnement d'exécution :** Node.js 20+ / Edge Runtime / React 19 / Next.js (App Router)

---

## 1. Choix Technologiques & Justifications d'Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ARCHITECTURE DU SYSTÈME                         │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   Visiteur Public              Navigateur Client        Infomaniak     │
│   (Scan QR / Web)              (React 19 Islands)      (Domaine & DNS) │
│          │                             ▲                      │        │
│          ▼                             │ Hydration            ▼        │
│   ┌──────────────┐          ┌──────────────────────┐   ┌────────────┐  │
│   │ Vercel / CF  │ ───────> │ Next.js App Router   │ <─┤ DNS CNAME  │  │
│   │ Edge Network │          │ (Server Components)  │   │ / SSL Auto │  │
│   └──────────────┘          └──────────────────────┘   └────────────┘  │
│                                        │                               │
│                         ┌──────────────┴──────────────┐                │
│                         ▼                             ▼                │
│                 Page Publique (SSR/ISR)       Back-office (/admin)     │
│                 - Zéro JS inutile             - React Hook Form + Zod  │
│                 - Micro-animations CSS        - Auth JWT / Master Pwd  │
│                 - Schema.org JSON-LD          - Cookie Session HttpOnly│
│                         │                             │                │
│                         └──────────────┬──────────────┘                │
│                                        ▼                               │
│                            ┌───────────────────────┐                   │
│                            │ Dynamic State Layer   │                   │
│                            │ - Local JSON / KV /   │                   │
│                            │   Supabase KV Store   │                   │
│                            │ - Fallback statique   │                   │
│                            └───────────────────────┘                   │
└────────────────────────────────────────────────────────────────────────┘
```

### 1.1 Stack Technique Principale

| Composant | Technologie | Version | Rationale Technique |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | 16+ / Canary | Server Components par défaut, streaming HTML, génération statique (SSG/ISR), gestion optimisée des métadonnées. |
| **Moteur UI** | React | 19.x | Actions serveur natives, hooks `useActionState` / `useTransition`, absence de surcharge côté client pour les composants statiques. |
| **Langage** | TypeScript | 5.x | Typage strict (`strict: true`), typage de bout en bout des paramètres de configuration et formulaires. |
| **Styling & CSS** | Tailwind CSS | v4 (`@tailwindcss/postcss`) | Moteur CSS haute performance, configuration des tokens via CSS `@theme`, absence de fichier de config complexe, bundle CSS ultra-léger. |
| **Icônes** | Lucide React | Dernière version | Icônes SVG légères (tree-shakeable), universelles et conformes aux codes visuels de la santé. |
| **Validation Formulaire** | Zod + React Hook Form | Latest | Schémas de validation typés pour l'administration des paramètres, validation côté client et côté serveur (`z.infer`). |
| **Sécurité d'accès** | Jose / Web Crypto | Standard | Chiffrement et signature JWT légers, compatibles Edge Runtime sans dépendance native Node lourde. |

---

## 2. Modélisation des Données & Schémas TypeScript

Le site repose sur un schéma de configuration unique (`SiteSettings`) qui alimente la page vitrine. Une stratégie de **fallback statique garanti** est mise en place pour qu'aucune panne de base de données ne puisse rendre le site vitrine indisponible.

### 2.1 Schéma TypeScript Central (`src/types/settings.ts`)

```typescript
import { z } from "zod";

export const siteSettingsSchema = z.object({
  // Bannière d'alerte temporaire
  alertBanner: z.object({
    enabled: z.boolean(),
    message: z.string().max(250, "Le message ne doit pas dépasser 250 caractères"),
    variant: z.enum(["info", "warning", "holiday"]).default("info"),
  }),

  // Coordonnées de contact direct
  contact: z.object({
    fullName: z.string().min(1),
    title: z.string().min(1),
    phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, "Numéro de téléphone invalide"),
    email: z.string().email("Adresse email invalide"),
    address: z.object({
      street: z.string().min(1),
      postalCode: z.string().min(4),
      city: z.string().min(1),
      complement: z.string().optional(),
    }),
    googleMapsUrl: z.string().url("URL Google Maps invalide"),
    doctolibUrl: z.string().url("URL de prise de RDV invalide"),
  }),

  // Horaires d'ouverture
  openingHours: z.array(
    z.object({
      day: z.string(),
      slots: z.string(), // Ex: "08:30 - 19:00" ou "Fermé"
    })
  ),

  // Tarifs & Prise en charge
  pricing: z.object({
    bilan: z.object({
      amount: z.number().positive(),
      label: z.string().default("Bilan psychomoteur complet"),
      description: z.string(),
    }),
    seance: z.object({
      amount: z.number().positive(),
      label: z.string().default("Séance de suivi psychomoteur"),
      duration: z.string().default("40 à 45 minutes"),
    }),
    reimbursementNote: z.string(),
  }),

  // Mentions d'ordonnance et cadre réglementaire
  prescriptionNote: z.string(),

  // Mentions légales & Immatriculation
  legal: z.object({
    rpps: z.string(),
    siret: z.string(),
    legalStatus: z.string(),
    host: z.string().default("Vercel Inc. / Cloudflare"),
  }),
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;
```

### 2.2 Données par Défaut (`src/data/default-settings.json`)
Ce fichier sert de source de vérité par défaut :

```json
{
  "alertBanner": {
    "enabled": false,
    "message": "Le cabinet sera fermé pour congés annuels du 1er au 15 août inclus.",
    "variant": "holiday"
  },
  "contact": {
    "fullName": "Keliann L'Azou",
    "title": "Psychomotricien Diplômé d'État",
    "phone": "06 00 00 00 00",
    "email": "contact@keliann-psychomot.fr",
    "address": {
      "street": "12 Rue de la Santé",
      "postalCode": "75000",
      "city": "Paris",
      "complement": "Bâtiment B, 1er étage avec ascenseur"
    },
    "googleMapsUrl": "https://maps.google.com/?q=Keliann+LAzou+Psychomotricien",
    "doctolibUrl": "https://www.doctolib.fr"
  },
  "openingHours": [
    { "day": "Lundi", "slots": "08:30 - 19:30" },
    { "day": "Mardi", "slots": "08:30 - 19:30" },
    { "day": "Mercredi", "slots": "08:30 - 19:30" },
    { "day": "Jeudi", "slots": "08:30 - 19:30" },
    { "day": "Vendredi", "slots": "08:30 - 18:30" },
    { "day": "Samedi & Dimanche", "slots": "Fermé" }
  ],
  "pricing": {
    "bilan": {
      "amount": 180,
      "label": "Bilan psychomoteur initial",
      "description": "Comprend l'anamnèse, la passation des tests étalonnés, l'analyse clinique, la rédaction du compte-rendu écrit et l'entretien de restitution."
    },
    "seance": {
      "amount": 45,
      "label": "Séance de rééducation psychomotrice",
      "duration": "45 minutes"
    },
    "reimbursementNote": "La psychomotricité n'est pas prise en charge par la Sécurité Sociale de base. Une prise en charge totale ou partielle est toutefois fréquemment assurée par les mutuelles complémentaires de santé (factures délivrées à chaque séance) ou par la MDPH dans le cadre d'un dossier AEEH/PCH."
  },
  "prescriptionNote": "Conformément au Code de la Santé Publique (décret de compétence n° 88-659), le bilan psychomoteur et les séances de rééducation sont réalisés exclusivement sur prescription médicale de votre médecin traitant ou spécialiste.",
  "legal": {
    "rpps": "10100000000",
    "siret": "000 000 000 00000",
    "legalStatus": "Profession libérale réglementée - Membre d'une association de gestion agréée acceptant le règlement par chèque et virement.",
    "host": "Vercel Inc. / Cloudflare Pages"
  }
}
```

---

## 3. Architecture de Persistance du Back-Office (No-Overengineering)

Pour respecter le principe de frugalité technique ("No Overengineering"), 3 options compatibles sont prises en compte avec une abstraction via repository pattern (`SettingsRepository`) :

### 3.1 Tableau Comparatif des Solutions

| Solution | Complexité | Coût | Vitesse | Recommandation |
| :--- | :--- | :--- | :--- | :--- |
| **Option 1 : Vercel KV / Upstash Redis** | Très faible | Gratuit (tier free) | Instantanée (< 10ms) | **Recommandée si hébergement Vercel** (clé unique `site_settings`). |
| **Option 2 : Supabase (Table unique clé/valeur)** | Faible | Gratuit | Très rapide (< 30ms) | Idéal si besoin d'une interface Supabase studio externe en secours. |
| **Option 3 : Fichier JSON local / GitHub Commit via API** | Modérée | 0 € / Sans service tiers | Rebuild automatique | Pratique si 100% statique et hébergement Cloudflare Pages gratuit. |

### 3.2 Implémentation du Provider (`src/lib/settings.ts`)

```typescript
import defaultSettings from "@/data/default-settings.json";
import { SiteSettings, siteSettingsSchema } from "@/types/settings";

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    // Si Upstash Redis / Vercel KV est configuré dans l'environnement
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const response = await fetch(`${process.env.KV_REST_API_URL}/get/site_settings`, {
        headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
        next: { tags: ["settings"], revalidate: 60 },
      });
      const data = await response.json();
      if (data?.result) {
        const parsed = siteSettingsSchema.safeParse(JSON.parse(data.result));
        if (parsed.success) return parsed.data;
      }
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des paramètres dynamiques, fallback JSON actif:", error);
  }
  return defaultSettings as SiteSettings;
}
```

---

## 4. Spécification des Routes API & Authentification Minimaliste

### 4.1 Authentification du Praticien (`/admin`)
- **Pas de base de données d'utilisateurs lourde :** Un unique administrateur (Keliann).
- **Mécanisme :**
  - Formulaire de connexion sur `/admin/login`.
  - Comparaison du mot de passe avec `process.env.ADMIN_PASSWORD` via comparaison sécurisée en temps constant (`crypto.timingSafeEqual`) pour prévenir les attaques temporelles (timing attacks).
  - Génération d'un token de session signé (HMAC-SHA256) stocké dans un cookie `httpOnly`, `secure`, `sameSite: "lax"`, expiration à 7 jours.

### 4.2 Endpoints API

#### `POST /api/auth/login`
- **Payload :** `{ password: string }`
- **Validation :** Vérification contre `ADMIN_PASSWORD`.
- **Réponse 200 :** Cookie `auth_session` positionné, `{ success: true }`.
- **Réponse 401 :** `{ error: "Mot de passe incorrect" }`.
- **Sécurité :** Rate-limit de 5 tentatives par tranche de 15 minutes par IP.

#### `POST /api/auth/logout`
- **Comportement :** Suppression du cookie de session.

#### `GET /api/settings`
- **Accès :** Public ou restreint aux composants internes.
- **Réponse 200 :** Objet `SiteSettings` sérialisé.

#### `PUT /api/settings`
- **Accès :** Protégé par middleware de session.
- **Payload :** Objet `SiteSettings` partiel ou complet validé par `siteSettingsSchema`.
- **Comportement :** Enregistrement dans le store (KV / DB), appel de `revalidateTag("settings")` pour purger le cache ISR de la page publique.
- **Réponse 200 :** `{ success: true, updated: SiteSettings }`.

---

## 5. SEO, Métadonnées & Données Structurées Schema.org

### 5.1 Balises Open Graph & Twitter Cards
Le site configure la balise `metadata` dans `src/app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://keliann-psychomot.fr"),
  title: {
    default: "Keliann L'Azou | Psychomotricien D.E. - Cabinet de Psychomotricité",
    template: "%s | Keliann L'Azou Psychomotricien",
  },
  description: "Cabinet de psychomotricité de Keliann L'Azou, Psychomotricien Diplômé d'État. Bilans psychomoteurs et rééducation pour enfants, adolescents et adultes sur prescription médicale.",
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
    description: "Accompagnement du nourrisson à l'adulte : motricité, apprentissages, régulation émotionnelle.",
    siteName: "Keliann L'Azou Psychomotricien",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cabinet de Psychomotricité - Keliann L'Azou",
      },
    ],
  },
};
```

### 5.2 JSON-LD Schema.org (`MedicalBusiness`)
Intégré dans le layout racine pour optimiser le référencement local et Google Maps :

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Keliann L'Azou - Psychomotricien Diplômé d'État",
  "image": "https://keliann-psychomot.fr/images/cabinet-hero.webp",
  "medicalSpecialty": "Psychomotor Therapy",
  "telephone": "+33600000000",
  "email": "contact@keliann-psychomot.fr",
  "url": "https://keliann-psychomot.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Rue de la Santé",
    "addressLocality": "Paris",
    "postalCode": "75000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "19:30"
    }
  ],
  "priceRange": "$$"
}
```

---

## 6. Stratégie d'Optimisation des Images (`next/image`)

Toutes les images sont servies via le composant natif `next/image` pour garantir le respect des Core Web Vitals :
- **Hero Image :** `priority={true}` avec conversion automatique AVIF/WebP.
- **Portraits & Cabinet :** `loading="lazy"`, attributs `sizes="(max-width: 768px) 100vw, 50vw"`.
- **Effet de chargement doux :** `placeholder="blur"` avec Data URLs floues générées lors de la phase de build.

---

## 7. Déploiement & Configuration DNS Infomaniak

Le client détiendra le nom de domaine chez le registrar **Infomaniak**.

### 7.1 Configuration DNS (Enregistrements pour Vercel / Cloudflare)
| Type | Nom d'hôte (Host) | Valeur / Cible | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (racine) | `76.76.21.21` (si Vercel) | 300 |
| **CNAME** | `www` | `cname.vercel-dns.com.` (si Vercel) | 300 |
| **CAA** | `@` | `0 issue "letsencrypt.org"` | 300 |

### 7.2 Configuration HTTPS & HSTS
- Génération automatique du certificat SSL/TLS Let's Encrypt géré par la plateforme cloud.
- Activation de la redirection forcée HTTP vers HTTPS.
- Headers de sécurité stricts configurés dans `next.config.ts` :
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
