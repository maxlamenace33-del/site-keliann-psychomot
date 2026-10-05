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

Cette checklist correspond exactement aux 5 points du mail de cadrage transmis à Keliann L'Azou pour finaliser les contenus :

#### 1. Identité légale & Santé
- [ ] **Titre exact :** Titre officiel (ex. *Keliann L'Azou – Psychomotricien Diplômé d'État*)
- [ ] **Numéro RPPS (ou ADELI) :** Identifiant professionnel de santé
- [ ] **Numéro SIRET :** Dès son attribution administrative
- [ ] **Formule exacte pour l'ordonnance :** Formule réglementaire (ex. *« Bilan psychomoteur et rééducation si nécessaire »*)

#### 2. Pratique & Textes du cabinet
- [ ] **Section « Qui suis-je ? » :** 2 petits paragraphes sur son parcours, son école et son approche
- [ ] **3 Valeurs clés :** 3 mots ou concepts forts avec une phrase explicative pour chacun
- [ ] **Citation ou phrase d'accroche :** Une phrase inspirante qui résume sa vision
- [ ] **Les 8 motifs de consultation :** Titre court + 1 ou 2 phrases pour chaque situation (difficultés motrices, écriture/graphisme, attention, anxiété, etc.)

#### 3. Tarifs & Remboursements
- [ ] **Tarif du bilan initial complet :** Montant en € (tests étalonnés + compte-rendu écrit + restitution)
- [ ] **Tarif de la séance de suivi :** Montant en € et durée exacte (40 ou 45 min)
- [ ] **Note d'information mutuelles / aides :** Modalités de prise en charge (mutuelles complémentaires, dossiers MDPH, PCO...)

#### 4. Accès, Contact & Prise de rendez-vous
- [ ] **Lien Doctolib :** URL exacte du profil de réservation en ligne (dès activation)
- [ ] **Adresse précise du cabinet :** Numéro, rue, code postal, ville, étage, interphone, bâtiment et accès PMR
- [ ] **Lien Google Maps direct :** URL de la fiche d'établissement Maps
- [ ] **Coordonnées directes :** Numéro de téléphone pro et adresse email du cabinet
- [ ] **Horaires d'ouverture habituels :** Plages horaires par jour de la semaine

#### 5. Photos & Médias (haute définition)
- [ ] **Photo 1/4 (Portrait) :** Photo portrait sobre et avenante (format vertical 4:5 • 1200x1500px)
- [ ] **Photo 2/4 (Salle de consultation) :** Photo grand angle de la salle principale / espace moteur (format paysage 16:10 • 1920x1200px)
- [ ] **Photo 3/4 (Devanture) :** Photo de l'entrée du cabinet / accès PMR (format 4:3 • 800x600px)
- [ ] **Photo 4/4 (Salle d'attente) :** Photo de l'espace d'accueil (format 4:3 • 800x600px)

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
