# Cabinet de Psychomotricité — Kéliann L'Azou D.E. (Bordeaux)

Bienvenue sur le dépôt officiel du site vitrine professionnel de **Kéliann L'Azou**, Psychomotricien Diplômé d'État (formé à l'IFP de Bordeaux • RPPS `10112605869`), situé au **73 Av. Louis Barthou, 33200 Bordeaux**.

---

## 📌 Statut Actuel du Projet (Phase 3 Terminée — Prêt pour Déploiement V1 Vercel)

> [!NOTE]
> **Avancement du projet :**
> - **Textes, RPPS, Horaires & Tarifs 100% intégrés :** Présentation complète (« Qui suis-je ? »), 3 valeurs clés (*Individualité, Bienveillance, Respect du rythme*), citation, 8 motifs de consultation, formule officielle de prescription médicale, numéro RPPS (`10112605869`), adresse à Bordeaux avec mention **Accès PMR (Rez-de-chaussée)**, tarif de séance (`45 €` / `45 min`), tarif du bilan (`190 €`) et horaires définitifs (**Lundi, Mercredi, Vendredi : 09h15–13h00 / 14h15–18h00 • Samedi : 09h15–13h00**).
> - **Photos réelles intégrées :** Photo portrait de Kéliann (`/images/keliann-portrait.jpg`) et les 2 photos réelles du cabinet (`/images/cabinet-1.jpg` et `/images/cabinet-2.jpg`).

---

## 📋 Checklist des Contenus Client

### ✅ Reçus et intégrés dans le site
- [x] **Titre exact :** *Kéliann L'Azou – Psychomotricien Diplômé d'État* (formé à l'IFP de Bordeaux)
- [x] **Numéro RPPS :** `10112605869` (extrait de l'attestation ARS du 30/08/2026)
- [x] **Formule exacte pour l'ordonnance :** *« Je prescris la réalisation d’un bilan psychomoteur pour [nom de la personne], suivi si nécessaire d’une prise en charge en psychomotricité selon les conclusions du bilan. »*
- [x] **Section « Qui suis-je ? » :** Texte complet en 5 paragraphes + formule d'accueil et conclusion
- [x] **3 Valeurs clés :** *1. Individualité*, *2. Bienveillance*, *3. Respect du rythme*
- [x] **Citation :** *« Accompagner, ce n'est pas montrer le chemin, c'est aider chacun à trouver le sien. »*
- [x] **Les 8 motifs de consultation**
- [x] **Tarif de la séance de suivi :** **45 €** pour **45 minutes** de séance
- [x] **Tarif du bilan psychomoteur :** **190 €**
- [x] **Horaires et jours d'ouverture :**
  - **Lundi, Mercredi, Vendredi :** `09h15 – 13h00 / 14h15 – 18h00`
  - **Samedi :** `09h15 – 13h00`
  - **Mardi, Jeudi, Dimanche :** `Fermé`
- [x] **Adresse & Accessibilité PMR :** **73 Av. Louis Barthou, 33200 Bordeaux** (Rez-de-chaussée • Accessible PMR • Accès par interphone) + Lien Google Maps actif
- [x] **Coordonnées directes :** `06 52 58 85 17` & `lazoukeliann.psychomot@gmail.com`
- [x] **Photo Portrait de Kéliann :** Intégrée dans `/public/images/keliann-portrait.jpg`
- [x] **Photos réelles du cabinet :** Intégrées dans `/public/images/cabinet-1.jpg` et `/public/images/cabinet-2.jpg`

### ⏳ En attente d'attribution administrative / ouverture
- [ ] **Numéro SIRET :** Micro-entreprise créée, numéro SIRET attendu sous quelques jours (modifiable en 1 clic via `/admin`).
- [ ] **Lien Doctolib :** URL exacte de la fiche praticien Doctolib dès son ouverture (modifiable en 1 clic via `/admin`).

---

## 🔐 Fonctionnement de l'Espace `/admin` (Local vs Vercel)

- **URL d'accès :** [http://localhost:3000/admin](http://localhost:3000/admin) (ou `https://votre-site.vercel.app/admin`)
- **Mot de passe par défaut (en local) :** `admin123` (modifiable via la variable d'environnement `ADMIN_PASSWORD`).
- **Architecture Backend :** Le site utilise les **API Routes de Next.js** (`src/app/api/auth/*` et `src/app/api/settings/route.ts`).
  - **En local :** Les changements sont sauvegardés dans `src/data/live-settings.json`.
  - **Sur Vercel (V1 de démo) :** Fonctionne immédiatement en mémoire / `/tmp` pour la démo, et de façon permanente dès qu'une base gratuite **Upstash Redis (Vercel KV)** est reliée au projet Vercel.

---

## 🚀 Démarrage Rapide en Local

```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le site, ou [http://localhost:3000/admin](http://localhost:3000/admin) pour accéder à l'espace praticien.

---

## 📚 Documentation Associée

- 📄 **[PRD.md](./PRD.md)** : Spécifications produit, état d'avancement des contenus et checklist client.
- ⚙️ **[TECH_SPEC.md](./TECH_SPEC.md)** : Spécifications techniques, architecture du backend `/admin` et schéma de données.
- 🎨 **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** : Charte graphique, tokens Tailwind v4 et gestion des médias.
