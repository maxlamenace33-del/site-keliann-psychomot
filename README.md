# Cabinet de Psychomotricité — Keliann L'Azou D.E.

Bienvenue sur le dépôt officiel du site vitrine professionnel de **Keliann L'Azou**, Psychomotricien Diplômé d'État.

Ce site vitrine monopage (Single Page Application avec scroll fluide) est conçu pour offrir une expérience rassurante, ultra-rapide et accessible aux patients (enfants, adolescents, adultes) et aux professionnels de santé prescripteurs.

---

## 📌 Statut Actuel du Projet & Cadrage V1

> [!NOTE]
> **Orientation stratégique du projet :**
> - **Actuellement en Phase 1 (Développement V1 avec Placeholders) :** L'objectif est de produire une application locale complète, esthétique et entièrement interactive.
> - **Mise en suspens temporaire de l'hébergement & du nom de domaine :** La mise en ligne définitive et le rattachement du domaine Infomaniak sont suspendus jusqu'à la réception de tous les contenus finaux (photos HD du cabinet, portrait officiel, validation des textes de présentation et tarifs) et des retours de recette de Keliann L'Azou.

---

## 🗺️ Enchaînement Détaillé des Étapes de Développement (Roadmap V1)

Chaque étape est développée sur une branche Git dédiée avant fusion dans `main` :

| Étape | Branche Git | Contenu Technique | Statut |
| :--- | :--- | :--- | :--- |
| **01. Cadrage & Docs** | `docs/project-specifications` | Rédaction des 4 fichiers directeurs (`PRD`, `TECH_SPEC`, `DESIGN_SYSTEM`, `README`). | ✅ **Terminé & fusionné** |
| **02. Design Tokens & Layout** | `feat/design-tokens-and-layout` | Implémentation Tailwind v4, Navbar glassmorphic, AlertBanner, Footer déontologique, Page d'accueil. | ✅ **Terminé & fusionné** |
| **03. Roadmap V1 & Phasing** | `docs/dev-roadmap-and-v1-workflow` | Formalisation du cycle de vie V1, gestion des placeholders et suspension temporaire du déploiement. | 🔄 **En cours** |
| **04. Découpage Modulaire des Sections** | `feat/modular-sections-refactor` | Découpage de `src/app/page.tsx` en sous-composants propres dans `src/components/sections/` (`HeroSection`, `PillarsSection`, `AboutSection`, `ValuesSection`, `PsychomotSection`, `CabinetSection`). | ⏳ À venir |
| **05. Système de Placeholders d'Images** | `feat/image-placeholders-system` | Création d'un composant `<ImagePlaceholder />` réutilisable respectant les ratios d'aspect (4:5, 16:10, 4:3) pour garantir 0 décalage visuel (CLS = 0.00). | ⏳ À venir |
| **06. Back-Office Minimaliste & Auth** | `feat/admin-auth-and-settings` | Interface `/admin` sécurisée par mot de passe maître unique (`ADMIN_PASSWORD`), édition des horaires, tarifs, coordonnées et message d'alerte. | ⏳ À venir |
| **07. Revue Locale & Démo Client** | `chore/v1-demo-ready` | Préparation de la démonstration locale pour recueillir les retours de Keliann L'Azou. | ⏳ À venir |
| **08. Intégration des Retours & Contenus Réels** | `feat/real-content-integration` | Remplacement des textes et photos par les éléments définitifs du praticien. | ⏸️ Post-recette |
| **09. Déploiement & DNS Infomaniak** | `chore/production-deployment` | Déploiement Vercel/Cloudflare, liaison DNS Infomaniak et activation HTTPS. | ⏸️ En suspens |

---

## 📋 Checklist des Contenus Attendus du Client (Phase 2)

Pour passer à la version finale de production, les éléments suivants seront recueillis auprès de Keliann :
- [ ] **Photo Portrait :** Format vertical (ratio 4:5), haute résolution, regard bienveillant.
- [ ] **Photo Salle de consultation :** Format paysage (ratio 16:10), grand angle mettant en valeur le matériel moteur.
- [ ] **2 Photos d'ambiance :** Entrée du cabinet (accès PMR) et salle d'attente (ratio 4:3).
- [ ] **Textes personnalisés :** Biographie courte, éventuelles spécialisations spécifiques (bébés, graphisme...).
- [ ] **Lien Doctolib :** URL officielle de son profil de réservation.
- [ ] **Tarifs & Coordonnées :** Montant définitif du bilan et des séances, adresse exacte et numéro de téléphone pro.
- [ ] **Identifiants légaux :** Numéro RPPS et numéro SIRET.

---

## 🛠️ Stack Technique

- **Framework :** Next.js 16+ (App Router, React 19, Server Components par défaut)
- **Langage :** TypeScript (Mode strict activé)
- **Styling :** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Icônes :** Lucide React
- **Validation :** Zod & React Hook Form
- **Polices :** Plus Jakarta Sans (Corps) & Outfit (Titres) via `next/font/google`

---

## 🚀 Démarrage Rapide en Local

### 1. Installation des dépendances
```bash
npm install
```

### 2. Configuration locale
```bash
cp .env.example .env.local
```
*(Le fichier `.env.local` est pré-rempli avec des valeurs par défaut pour tester le site sans configuration externe).*

### 3. Lancement du serveur de développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 4. Vérification de la compilation de production
```bash
npm run build
```

---

## 🌳 Workflow Git

1. Créer une branche dérivée de `main` :
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/nom-de-votre-fonctionnalite
   ```
2. Travailler et commiter avec des messages conventionnels :
   ```bash
   git add .
   git commit -m "feat(section): add modular hero section"
   ```
3. Pousser la branche et fusionner dans `main` après validation :
   ```bash
   git push -u origin feat/nom-de-votre-fonctionnalite
   git checkout main
   git merge feat/nom-de-votre-fonctionnalite --no-edit
   git push origin main
   ```

---

## 📚 Documentation Associée

- 📄 **[PRD.md](./PRD.md)** : Spécifications produit, personas, parcours et feuille de route des 4 phases.
- ⚙️ **[TECH_SPEC.md](./TECH_SPEC.md)** : Spécifications techniques, schéma Zod, API d'administration et enchaînement Git.
- 🎨 **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** : Charte graphique, tokens Tailwind v4, ratios des photos et typographie.
