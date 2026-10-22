# Design System & Spécifications UI (DESIGN_SYSTEM.md)

## Projet : Site Vitrine Professionnel - Kéliann L'Azou, Psychomotricien D.E.
- **Direction Artistique :** Sérénité, Écoute, Santé Bienveillante, Précision Thérapeutique
- **Framework CSS :** Tailwind CSS v4
- **Conformité Accessibilité :** WCAG 2.1 Niveau AA & Signalétique PMR
- **Phase actuelle :** Phase 3 Terminée — Photographies réelles de Kéliann et du cabinet intégrées

---

## 1. Direction Artistique & Univers Graphique

La psychomotricité traite des interactions entre le psychisme, le corps et le mouvement. Le design communique immédiatement :
1. **L'Apaisement & la Sécurité :** Fonds chauds (`#FDFBF7`), grands espaces d'air, courbes douces (`rounded-2xl` / `rounded-3xl`).
2. **Le Professionnalisme Médical :** Rigueur déontologique du Diplôme d'État (IFP de Bordeaux) et de l'inscription RPPS (`10112605869`).
3. **L'Inclusivité & l'Accessibilité :** Palette inspirée de la nature (vert sauge, bois clair, touches minérales crème) et mise en avant claire de l'accessibilité PMR en rez-de-chaussée.

---

## 2. Palette de Couleurs & Tokens de Design

| Rôle Sémantique | Token CSS | Valeur Hex | Usage UI |
| :--- | :--- | :--- | :--- |
| **Fond Principal (Canvas)** | `--color-canvas` | `#FDFBF7` | Fond général de la page (blanc crème doux). |
| **Fond Secondaire (Surface)** | `--color-surface` | `#F7F5F0` | Cartes, conteneurs, section "Mes Valeurs Clés". |
| **Bordure Neutre** | `--color-border-subtle` | `#E8E4DC` | Séparateurs, bordures de cartes et d'inputs. |
| **Texte Principal** | `--color-text-main` | `#232B28` | Titres et textes d'une lisibilité maximale. |
| **Texte Atténué** | `--color-text-muted` | `#58625E` | Paragraphes, descriptions, jours fermés. |
| **Primaire (Sauge)** | `--color-sage-600` | `#4B7266` / `#5E8B7E` | Boutons d'action, icônes des 8 motifs et des 3 valeurs. |
| **Primaire Foncé (Sauge Dark)** | `--color-sage-700` | `#3D5C53` | Hover des boutons sauge, accents forts. |
| **Primaire Clair (Sauge Soft)** | `--color-sage-50` | `#E8F0EC` | Fonds de badges, encadré de prescription médicale et badge PMR. |

---

## 3. Gestion des Médias & Photographies Réelles (Phase 3)

Toutes les photographies affichées sur le site sont désormais les **photographies réelles** transmises par Kéliann L'Azou, optimisées en JPEG haute définition (`sips` qualité 90%) et servies via `next/image` :

| Emplacement | Ratio | Statut | Fichier |
| :--- | :--- | :--- | :--- |
| **1. Portrait de Kéliann L'Azou** | `4/5` | ✅ Photo réelle intégrée | `/public/images/keliann-portrait.jpg` |
| **2. Salle de consultation (Vue 1)** | `16/10` | ✅ Photo réelle intégrée | `/public/images/cabinet-2.jpg` |
| **3. Espace d'accueil & bureau (Vue 2)** | `16/10` | ✅ Photo réelle intégrée | `/public/images/cabinet-1.jpg` |
