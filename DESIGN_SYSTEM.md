# Design System & Spécifications UI (DESIGN_SYSTEM.md)

## Projet : Site Vitrine Professionnel - Kéliann L'Azou, Psychomotricien D.E.
- **Direction Artistique :** Sérénité, Écoute, Santé Bienveillante, Précision Thérapeutique
- **Framework CSS :** Tailwind CSS v4
- **Conformité Accessibilité :** WCAG 2.1 Niveau AA
- **Phase actuelle :** Phase 2/3 — Textes officiels intégrés & Galerie Cabinet illustrée

---

## 1. Direction Artistique & Univers Graphique

La psychomotricité traite des interactions entre le psychisme, le corps et le mouvement. Le design communique immédiatement :
1. **L'Apaisement & la Sécurité :** Fonds chauds (`#FDFBF7`), grands espaces d'air, courbes douces (`rounded-2xl` / `rounded-3xl`).
2. **Le Professionnalisme Médical :** Rigueur déontologique du Diplôme d'État (IFP de Bordeaux) et de l'inscription RPPS (`10112605869`).
3. **L'Inclusivité & la Chaleur :** Palette inspirée de la nature (vert sauge, bois clair, touches minérales crème) adaptée à chaque étape de la vie.

---

## 2. Palette de Couleurs & Tokens de Design

| Rôle Sémantique | Token CSS | Valeur Hex | Usage UI |
| :--- | :--- | :--- | :--- |
| **Fond Principal (Canvas)** | `--color-canvas` | `#FDFBF7` | Fond général de la page (blanc crème doux). |
| **Fond Secondaire (Surface)** | `--color-surface` | `#F7F5F0` | Cartes, conteneurs, section "Mes Valeurs Clés". |
| **Bordure Neutre** | `--color-border-subtle` | `#E8E4DC` | Séparateurs, bordures de cartes et d'inputs. |
| **Texte Principal** | `--color-text-main` | `#232B28` | Titres et textes d'une lisibilité maximale. |
| **Texte Atténué** | `--color-text-muted` | `#58625E` | Paragraphes, descriptions, horaires. |
| **Primaire (Sauge)** | `--color-sage-600` | `#4B7266` / `#5E8B7E` | Boutons d'action, icônes des 8 motifs et des 3 valeurs. |
| **Primaire Foncé (Sauge Dark)** | `--color-sage-700` | `#3D5C53` | Hover des boutons sauge, accents forts. |
| **Primaire Clair (Sauge Soft)** | `--color-sage-50` | `#E8F0EC` | Fonds de badges, encadré de prescription médicale. |

---

## 3. Gestion des Médias & Photographies (Phase 2/3)

Conformément à la demande de Kéliann L'Azou (*« tu peux meubler avec une photo autre si besoin »* en attendant son accès complet à la pièce du 73 Av. Louis Barthou), la stratégie visuelle actuelle est la suivante :

| Emplacement | Ratio | État Actuel | Fichier / Composant |
| :--- | :--- | :--- | :--- |
| **1. Portrait de Kéliann** | `4/5` | Placeholder dédié (en attente de sa photo personnelle) | `<ImagePlaceholder aspectRatio="4/5" />` |
| **2. Salle de psychomotricité** | `16/10` | Photo d'illustration intégrée | `/public/images/cabinet-salle-principale.jpg` |
| **3. Entrée du cabinet (RDC)** | `4/3` | Photo d'illustration intégrée | `/public/images/cabinet-entree.jpg` |
| **4. Salle d'attente** | `4/3` | Photo d'illustration intégrée | `/public/images/cabinet-salle-attente.jpg` |

Dès que Kéliann aura aménagé sa salle au 73 Av. Louis Barthou, il suffira de remplacer ces 3 fichiers dans `/public/images/` et d'ajouter `/public/images/keliann-portrait.jpg`.
