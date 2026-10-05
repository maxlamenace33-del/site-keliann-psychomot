# Cabinet de Psychomotricité — Keliann L'Azou D.E.

Bienvenue sur le dépôt officiel du site vitrine professionnel de **Keliann L'Azou**, Psychomotricien Diplômé d'État.

Ce site vitrine monopage (Single Page Application avec scroll fluide) est conçu pour offrir une expérience rassurante, ultra-rapide et accessible aux patients (enfants, adolescents, adultes) et aux professionnels de santé prescripteurs.

---

## 📚 Documentation Complète du Projet

Pour garantir une gouvernance technique et produit sans faille, le projet est documenté par 4 documents de référence :

1. 📄 **[PRD.md](./PRD.md)** : Spécifications fonctionnelles, personas, parcours patients, wireframes et exigences déontologiques.
2. ⚙️ **[TECH_SPEC.md](./TECH_SPEC.md)** : Architecture technique, modèle de données TypeScript, API `/admin`, sécurité et SEO local.
3. 🎨 **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** : Direction artistique, tokens Tailwind CSS v4, typographie, palette de couleurs et composants UI.
4. 🚀 **[README.md](./README.md)** : Ce guide d'installation, workflow Git et opérations.

---

## 🛠️ Stack Technique

- **Framework :** [Next.js](https://nextjs.org/) (App Router, React 19, Server Components par défaut)
- **Langage :** [TypeScript](https://www.typescriptlang.org/) (Mode strict activé)
- **Styling :** [Tailwind CSS v4](https://tailwindcss.com/) avec `@tailwindcss/postcss`
- **Icônes :** [Lucide React](https://lucide.dev/)
- **Validation :** [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)
- **Hébergement cible :** Vercel ou Cloudflare Pages avec nom de domaine géré chez Infomaniak

---

## 🚀 Démarrage Rapide

### Prérequis
- **Node.js** version 20.x ou supérieure
- Gestionnaire de paquets **npm** (ou `pnpm` / `bun`)

### 1. Installation des dépendances
```bash
npm install
```

### 2. Configuration des variables d'environnement
Créez un fichier `.env.local` à la racine du projet en vous basant sur l'exemple ci-dessous :

```bash
cp .env.example .env.local
```

Contenu type de `.env.local` :
```env
# Mot de passe maître pour accéder au panneau /admin
ADMIN_PASSWORD="votre_mot_de_passe_securise"

# Clé secrète pour signer les sessions JWT d'administration
AUTH_SECRET="votre_cle_secrete_aleatoire_32_caracteres"

# (Optionnel) Vercel KV / Upstash Redis pour la persistance dynamique
KV_REST_API_URL=""
KV_REST_API_TOKEN=""

# URL publique du site
NEXT_PUBLIC_SITE_URL="https://keliann-psychomot.fr"
```

### 3. Lancement du serveur de développement
```bash
npm run dev
```
Rendez-vous sur [http://localhost:3000](http://localhost:3000) pour prévisualiser le site.

### 4. Commandes disponibles

| Commande | Action |
| :--- | :--- |
| `npm run dev` | Lance le serveur de développement local avec Fast Refresh |
| `npm run build` | Compile l'application pour la production et vérifie les types TS |
| `npm run start` | Démarre le serveur Node.js en mode production |
| `npm run lint` | Analyse le code avec ESLint et rapporte les erreurs |

---

## 🌳 Workflow Git & Bonnes Pratiques

Bien que vous soyez le seul développeur sur le projet, une discipline rigoureuse de branches garantit un historique propre, des retours en arrière sans risque et des déploiements sereins.

### Règle d'or : Jamais de commit direct sur `main`
La branche `main` représente la version en production, stable et vérifiée.

### Nomenclature des branches
Chaque nouvelle tâche fait l'objet d'une branche dédiée créée depuis `main` :
- `feat/<nom-fonctionnalite>` : Ajout d'une nouvelle fonctionnalité (ex: `feat/hero-section`, `feat/admin-panel`)
- `fix/<nom-correctif>` : Correction de bug (ex: `fix/mobile-menu-scroll`, `fix/og-image-url`)
- `docs/<nom-documentation>` : Documentation ou spécifications (ex: `docs/project-specifications`)
- `style/<nom-refonte>` : Ajustements de style et Design System (ex: `style/color-tokens`)

### Cycle de développement pas-à-pas

1. **Créer une branche de travail :**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/nom-de-votre-tache
   ```

2. **Commiter avec des messages conventionnels (Conventional Commits) :**
   ```bash
   git add .
   git commit -m "feat(hero): integrate CTA Doctolib and responsive layout"
   ```

3. **Pousser la branche et fusionner dans `main` :**
   ```bash
   git push -u origin feat/nom-de-votre-tache
   ```
   *Astuce : Vous pouvez fusionner directement via une Pull Request sur GitHub ou en local :*
   ```bash
   git checkout main
   git merge feat/nom-de-votre-tache
   git push origin main
   ```

4. **Nettoyer la branche terminée :**
   ```bash
   git branch -d feat/nom-de-votre-tache
   ```

---

## 📁 Arborescence du Code

```
site-keliann-psychomot/
├── public/                       # Fichiers statiques publics
│   ├── images/                   # Photos du cabinet, portrait, illustration Hero
│   ├── favicon.ico               # Favicon du site
│   └── og-image.jpg              # Image OpenGraph 1200x630
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (public)/             # Groupe de routes publiques
│   │   │   └── page.tsx          # Single Page Application (#accueil, #qui-suis-je, etc.)
│   │   ├── admin/                # Panneau d'administration minimaliste
│   │   │   ├── login/page.tsx    # Page d'authentification par mot de passe maître
│   │   │   └── page.tsx          # Tableau de bord d'édition des paramètres
│   │   ├── api/
│   │   │   ├── auth/             # Endpoints login / logout
│   │   │   └── settings/         # GET / PUT paramètres du site
│   │   ├── globals.css           # Thème Tailwind CSS v4 & styles globaux
│   │   ├── layout.tsx            # Layout racine (polices, métadonnées, JSON-LD)
│   │   └── not-found.tsx         # Page 404 personnalisée
│   ├── components/               # Composants React réutilisables
│   │   ├── layout/               # Header, Navbar, Footer, MobileNav
│   │   ├── sections/             # Hero, Pillars, About, Values, Psychomot, Info, Contact
│   │   ├── ui/                   # Button, Card, Badge, AlertBanner
│   │   └── admin/                # Formulaires et inputs du back-office
│   ├── data/
│   │   └── default-settings.json # Valeurs de secours (téléphone, horaires, tarifs...)
│   ├── lib/
│   │   ├── auth.ts               # Gestion des sessions JWT & hachage sécurisé
│   │   ├── settings.ts           # Lecture et écriture de la configuration
│   │   └── utils.ts              # Fonctions utilitaires (cn, formatteurs)
│   └── types/
│       └── settings.ts           # Schéma Zod et types TypeScript de configuration
├── .env.example                  # Modèle des variables d'environnement
├── DESIGN_SYSTEM.md              # Référence charte UI et Tailwind tokens
├── PRD.md                        # Document de cadrage produit
├── README.md                     # Ce fichier
├── TECH_SPEC.md                  # Spécifications d'architecture et données
├── next.config.ts                # Configuration Next.js (headers de sécurité, images)
├── package.json                  # Dépendances et scripts npm
└── tsconfig.json                 # Configuration TypeScript stricte
```

---

## 🔒 Sécurité & Protection des Données Médicales

- **Aucune donnée de santé stockée :** Conformément à la réglementation française (RGPD & HDS), le site n'embarque aucun formulaire de collecte de dossiers médicaux. Les prises de rendez-vous sont exclusivement déportées vers l'infrastructure agréée de **Doctolib**.
- **Sécurité d'administration :** Le mot de passe d'accès au panneau `/admin` n'est jamais exposé côté client. Les requêtes de mise à jour utilisent des cookies chiffrés `HttpOnly` avec protection `SameSite=Lax`.

---

## 🌐 Déploiement & Domaine Infomaniak

1. **Liaison du dépôt GitHub :** Connectez ce dépôt à [Vercel](https://vercel.com) ou Cloudflare Pages.
2. **Configuration du domaine chez Infomaniak :**
   - Créez un enregistrement `A` pointant vers l'IP fournie par l'hébergeur.
   - Créez un enregistrement `CNAME` pour le sous-domaine `www`.
3. Le certificat SSL Let's Encrypt est provisionné et renouvelé automatiquement.
