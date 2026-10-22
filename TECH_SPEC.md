# Technical Specification & Data Architecture (TECH_SPEC.md)

## Projet : Site Vitrine Professionnel - Kéliann L'Azou, Psychomotricien D.E.
- **Rôle :** Tech Lead & System Architect
- **Version :** 1.3.0
- **Statut d'exécution :** Phase 3 Terminée — Prêt pour déploiement V1 sur Vercel

---

## 1. Feuille de Route Technique & Enchaînement des Branches Git

| Étape | Branche Git | Objectif Technique | Statut |
| :--- | :--- | :--- | :--- |
| **Étape 1** | `feat/design-tokens-and-layout` | Tokens Tailwind v4 (`globals.css`), Layout racine, `Navbar` responsive, `AlertBanner`, `Footer` déontologique. | ✅ **Terminé & fusionné** |
| **Étape 2** | `feat/modular-sections-refactor` | Découpage de `page.tsx` en composants autonomes dans `src/components/sections/`. | ✅ **Terminé & fusionné** |
| **Étape 3** | `feat/image-placeholders-system` | Composant réutilisable `<ImagePlaceholder />` avec gestion des ratios standards (4:5, 16:10, 4:3) et support `next/image`. | ✅ **Terminé & fusionné** |
| **Étape 4** | `feat/admin-auth-and-settings` | Back-office `/admin` avec authentification maître en temps constant, cookie HttpOnly et persistance hybride. | ✅ **Terminé & fusionné** |
| **Étape 5** | `feat/client-content-phase2` | Intégration des textes officiels de Kéliann L'Azou (IFP Bordeaux, Qui suis-je, 3 valeurs, citation, 8 motifs, RPPS `10112605869`, adresse 73 Av. Louis Barthou 33200 Bordeaux). | ✅ **Terminé & fusionné** |
| **Étape 6** | `feat/final-assets` | Intégration de la photo portrait réelle (`keliann-portrait.jpg`), des 2 photos réelles du cabinet (`cabinet-1.jpg`, `cabinet-2.jpg`), du tarif bilan (`190 €`), des horaires définitifs (Lun/Mer/Ven + Sam matin) et de l'accessibilité PMR. | ✅ **Terminé** |
| **Phase 4 (Prod)** | `chore/production-deployment` | Déploiement V1 sur Vercel (`.vercel.app`) puis configuration DNS A/CNAME chez Infomaniak. | 🚀 **Prêt à déployer** |

---

## 2. Comment fonctionne le Backend & l'Espace `/admin` ?

Bien qu'il n'y ait pas de serveur Express/Python séparé, **Next.js embarque son propre Backend intégré** via les **Route Handlers (`src/app/api/`)** et les **Server Components** :

1. **Routes Backend (`src/app/api/`) :**
   - `POST /api/auth/login` : Vérifie le mot de passe maître (`ADMIN_PASSWORD`, par défaut `admin123` en local si non défini dans `.env.local`) en temps constant (`crypto.timingSafeEqual`) et dépose un cookie `HttpOnly` signé en HMAC-SHA256 (`psychomot_admin_session`).
   - `POST /api/auth/logout` : Supprime le cookie de session.
   - `GET & PUT /api/settings` : Lit et met à jour les paramètres du site après validation stricte par schéma **Zod** (`siteSettingsSchema`), puis invalide immédiatement le cache Next.js (`revalidatePath("/")`).

2. **Stratégie de Persistance Hybride à 3 Niveaux (`src/lib/settings.ts`) :**
   - **Niveau 1 — En local (`localhost:3000`) :** Les modifications faites dans `/admin` sont écrites directement sur le disque dans `src/data/live-settings.json`. Elles survivent aux rechargements de page et aux redémarrages.
   - **Niveau 2 — Sur Vercel en mode Démo V1 (sans base de données configurée) :** Sur Vercel, le dossier du code source est en lecture seule (*read-only*). Le backend bascule donc automatiquement sur le stockage éphémère Serverless (`/tmp/psychomot-live-settings.json` + mémoire `globalThis`) pour permettre de tester l'interface `/admin` en direct lors de la démonstration !
   - **Niveau 3 — Sur Vercel en Production Définitive (Upstash Redis / Vercel KV) :** Il suffit d'attacher en 1 clic une base Redis gratuite (**Upstash Redis** depuis l'onglet *Storage / Marketplace* de Vercel), ce qui injecte automatiquement `KV_REST_API_URL` et `KV_REST_API_TOKEN`. Dès lors, chaque sauvegarde dans `/admin` est stockée de façon permanente dans le Cloud.

---

## 3. Données Officielles par Défaut (`src/data/default-settings.json`)

- **Identité :** `Kéliann L'Azou` — `Psychomotricien Diplômé d'État` (formé à l'IFP de Bordeaux).
- **RPPS :** `RPPS : 10112605869` (Attestation ARS du 30/08/2026).
- **SIRET :** `SIRET : en cours d'attribution` (micro-entreprise créée, numéro attendu sous quelques jours).
- **Coordonnées :** `06 52 58 85 17` • `lazoukeliann.psychomot@gmail.com` • `73 Av. Louis Barthou, 33200 Bordeaux (Rez-de-chaussée • Accessible PMR • Accès par interphone)`.
- **Horaires d'ouverture :**
  - **Lundi :** `09h15 – 13h00 / 14h15 – 18h00`
  - **Mardi :** `Fermé`
  - **Mercredi :** `09h15 – 13h00 / 14h15 – 18h00`
  - **Jeudi :** `Fermé`
  - **Vendredi :** `09h15 – 13h00 / 14h15 – 18h00`
  - **Samedi :** `09h15 – 13h00`
  - **Dimanche :** `Fermé`
- **Tarifs :**
  - **Séance de suivi :** `45 €` (`45 minutes`)
  - **Bilan psychomoteur complet :** `190 €`
