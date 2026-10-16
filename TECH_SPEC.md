# Technical Specification & Data Architecture (TECH_SPEC.md)

## Projet : Site Vitrine Professionnel - Kéliann L'Azou, Psychomotricien D.E.
- **Rôle :** Tech Lead & System Architect
- **Version :** 1.2.0
- **Statut d'exécution :** Phase 2/3 — Intégration des Contenus Réels & Photos d'Illustration
- **Déploiement en production & DNS :** Mis en suspens dans l'attente de la photo portrait finale, du tarif du bilan, du lien Doctolib et du SIRET

---

## 1. Feuille de Route Technique & Enchaînement des Branches Git

| Étape | Branche Git | Objectif Technique | Statut |
| :--- | :--- | :--- | :--- |
| **Étape 1** | `feat/design-tokens-and-layout` | Tokens Tailwind v4 (`globals.css`), Layout racine, `Navbar` responsive, `AlertBanner`, `Footer` déontologique. | ✅ **Terminé & fusionné** |
| **Étape 2** | `feat/modular-sections-refactor` | Découpage de `page.tsx` en composants autonomes dans `src/components/sections/`. | ✅ **Terminé & fusionné** |
| **Étape 3** | `feat/image-placeholders-system` | Composant réutilisable `<ImagePlaceholder />` avec gestion des ratios standards (4:5, 16:10, 4:3) et support `next/image`. | ✅ **Terminé & fusionné** |
| **Étape 4** | `feat/admin-auth-and-settings` | Back-office `/admin` avec authentification maître en temps constant, cookie HttpOnly et persistance locale/KV. | ✅ **Terminé & fusionné** |
| **Étape 5** | `feat/client-content-phase2` | Intégration des textes officiels de Kéliann L'Azou (IFP Bordeaux, Qui suis-je, 3 valeurs, citation, 8 motifs, RPPS `10112605869`, adresse 73 Av. Louis Barthou 33200 Bordeaux, horaires, tarif séance 45€, photos d'illustration du cabinet). | ✅ **Terminé** |
| **Phase 3 (Finale)** | `feat/final-assets` | Intégration de la photo portrait réelle, des photos finales du local aménagé, du tarif bilan, du SIRET et de l'URL Doctolib. | ⏳ **En attente client** |
| **Phase 4 (Prod)** | `chore/production-deployment` | Déploiement Vercel / Cloudflare et configuration DNS A/CNAME chez Infomaniak. | ⏸️ **En suspens** |

---

## 2. Architecture des Données & Paramètres Dynamiques

### 2.1 Fichier de Configuration Par Défaut (`src/data/default-settings.json`)
Contient désormais les données officielles transmises par Kéliann L'Azou :
- **Identité :** `Kéliann L'Azou` — `Psychomotricien Diplômé d'État` (formé à l'IFP de Bordeaux).
- **RPPS :** `RPPS : 10112605869` (Attestation ARS du 30/08/2026).
- **Formule de prescription :** `« Je prescris la réalisation d’un bilan psychomoteur pour [nom de la personne], suivi si nécessaire d’une prise en charge en psychomotricité selon les conclusions du bilan. »`
- **Coordonnées :** `06 52 58 85 17` • `lazoukeliann.psychomot@gmail.com` • `73 Av. Louis Barthou, 33200 Bordeaux (Rez-de-chaussée • Accès par interphone)`.
- **Horaires prévisionnels :** `09h15 – 13h00 / 14h15 – 18h45`.
- **Tarifs :** Séance à `45 €` (`45 minutes`), Bilan `À définir`.

### 2.2 Composant Hybride `<ImagePlaceholder />`
Supporte deux modes sans aucun décalage de mise en page (*CLS = 0.00*) :
1. **Mode Photo (`imageSrc` fourni) :** Affiche l'image via `next/image` (`fill`, `object-cover`) avec un badge discret (`Photo d'illustration` ou `Le Cabinet`) et la légende en surimpression. Utilisé pour les 3 vues du cabinet (`/images/cabinet-salle-principale.jpg`, `/images/cabinet-entree.jpg`, `/images/cabinet-salle-attente.jpg`).
2. **Mode Placeholder (`imageSrc` omis) :** Affiche une carte calibrée 4:5 pour le portrait de Kéliann L'Azou en attendant sa photographie personnelle.

---

## 3. Schéma de Données TypeScript Central (`SiteSettings`)

Le schéma Zod (`src/types/settings.ts`) accepte un montant numérique ou textuel (`z.union([z.number(), z.string()])`) pour les tarifs afin de permettre l'affichage propre de `"À définir"` pour le bilan et `45` pour la séance de suivi.

---

## 4. Spécifications du Back-Office Minimaliste (`/admin`)

Le tableau de bord `/admin` (`src/components/admin/AdminDashboardClient.tsx`) permet désormais à Kéliann d'éditer en autonomie :
1. **Bannière d'alerte / Congés** (activation, message, variante).
2. **Coordonnées & Liens** (téléphone, email, rue, code postal, ville, complément d'adresse, URL Doctolib, URL Google Maps).
3. **Horaires de consultation** (édition jour par jour).
4. **Tarifs & Remboursement** (montant séance, durée séance, montant bilan, description bilan, note mutuelles/MDPH/PCO).
5. **Cadre réglementaire & Identifiants** (numéro RPPS, numéro SIRET, formule de prescription médicale).
