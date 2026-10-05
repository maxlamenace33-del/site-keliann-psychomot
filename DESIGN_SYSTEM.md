# Design System & Spécifications UI (DESIGN_SYSTEM.md)

## Projet : Site Vitrine Professionnel - Keliann L'Azou, Psychomotricien D.E.
- **Direction Artistique :** Sérénité, Écoute, Santé Bienveillante, Précision Thérapeutique
- **Framework CSS :** Tailwind CSS v4
- **Conformité Accessibilité :** WCAG 2.1 Niveau AA
- **Phase actuelle :** V1 avec Placeholders & Ratios d'images calibrés

---

## 1. Direction Artistique & Univers Graphique

La psychomotricité traite des interactions entre le psychisme, le corps et le mouvement. Le design doit immédiatement communiquer :
1. **L'Apaisement & la Sécurité :** Pour des parents d'enfants en souffrance scolaire ou des adultes anxieux, l'interface doit réduire la charge mentale visuelle (fonds chauds, grands espaces d'air, courbes douces).
2. **Le Professionnalisme Médical :** Le site ne doit pas ressembler à un blog de développement personnel ; la rigueur déontologique du diplôme d'État doit transparaître à travers la netteté de la grille et des typographies.
3. **L'Inclusivité & la Chaleur :** Une palette inspirée de la nature (vert sauge, touches minérales crème et accents d'eau vive pastel) qui parle autant aux enfants qu'aux seniors.

---

## 2. Palette de Couleurs & Tokens de Design

### 2.1 Couleurs Primitives & Sémantiques

| Rôle Sémantique | Token CSS | Valeur Hex | Usage UI |
| :--- | :--- | :--- | :--- |
| **Fond Principal (Canvas)** | `--color-canvas` | `#FDFBF7` | Fond général de la page (blanc crème doux évitant la lumière agressive). |
| **Fond Secondaire (Surface)** | `--color-surface` | `#F7F5F0` | Cartes, conteneurs, blocs alternés de sections. |
| **Bordure Neutre** | `--color-border-subtle` | `#E8E4DC` | Séparateurs, bordures de cartes et d'inputs. |
| **Texte Principal** | `--color-text-main` | `#232B28` | Titres et textes d'une lisibilité maximale (contraste > 10:1 sur crème). |
| **Texte Atténué** | `--color-text-muted` | `#58625E` | Sous-titres, mentions de durée, légendes (contraste > 5.5:1 sur crème). |
| **Primaire (Sauge)** | `--color-sage-600` | `#4B7266` / `#5E8B7E` | Boutons d'action, icônes principales, puces des 4 piliers. |
| **Primaire Foncé (Sauge Dark)** | `--color-sage-700` | `#3D5C53` | Hover des boutons sauge, accents de titres forts. |
| **Primaire Clair (Sauge Soft)** | `--color-sage-50` | `#E8F0EC` | Fonds de badges, puces rondes, cartes d'emphase. |
| **Accent (Turquoise Pastel)** | `--color-teal-accent` | `#2DD4BF` | Éléments d'énergie, badges "Doctolib", highlights subtils. |
| **Accent Clair (Turquoise Soft)** | `--color-teal-soft` | `#CCFBF1` | Hover d'icônes, liserés décoratifs, cartes "Enfants". |
| **Alerte Bannière** | `--color-amber-500` | `#F59E0B` | Bannière de congés ou messages urgents. |

---

## 3. Typographie & Adaptabilité aux Variations de Texte

Les textes réels fournis par le praticien lors de la Phase 2 pourront être plus longs ou plus courts que les placeholders. Le design system intègre des règles de flexibilité automatique :
- **Hauteurs fluides :** Pas de hauteurs fixes en pixels (`h-[200px]` proscrit) sur les conteneurs de texte afin d'éviter tout chevauchement ou coupure.
- **Grilles auto-alignées :** Utilisation de `flex flex-col justify-between` pour que les cartes d'une même ligne conservent un alignement harmonieux quel que soit le volume de description.
- **Échelle typographique :**
  - Titres (H1) : `Outfit`, `text-4xl md:text-5xl lg:text-6xl`, tracking-tight.
  - Titres de section (H2) : `Outfit`, `text-2xl md:text-3xl lg:text-4xl`, font-bold.
  - Titres de cartes (H3) : `text-lg font-semibold`.
  - Corps : `Plus Jakarta Sans`, `text-base` ou `text-sm`, `leading-relaxed`.

---

## 4. Spécification des Placeholders Visuels & Traitement des Futures Photos

Pendant la Phase 1 et jusqu'à la remise des photographies officielles par Keliann L'Azou, les visuels sont modélisés par des conteneurs ergonomiques normés.

### 4.1 Ratios d'Aspect Cibles pour les Prises de Vue

```
┌────────────────────────┐  ┌────────────────────────────────────┐
│   PORTRAIT PRATICIEN   │  │       SALLE DE MOTRICITÉ           │
│      Ratio : 4/5       │  │          Ratio : 16/10             │
│   (Idéal : 1200x1500)  │  │       (Idéal : 1920x1200)          │
│                        │  │                                    │
│   - Fond lumineux      │  │   - Espace dégagé & tapis          │
│   - Regard bienveillant│  │   - Matériel sensoriel visible     │
│   - Tenue pro soignée  │  │   - Lumière naturelle douce        │
└────────────────────────┘  └────────────────────────────────────┘

┌──────────────────┐  ┌──────────────────┐
│ DEVANTURE / PMR  │  │ SALLE D'ATTENTE  │
│   Ratio : 4/3    │  │   Ratio : 4/3    │
│ (Idéal: 800x600) │  │ (Idéal: 800x600) │
└──────────────────┘  └──────────────────┘
```

### 4.2 Recommandations pour les Photographies Réelles
1. **Lumière naturelle :** Privilégier les prises de vue le matin ou en début d'après-midi, sans flash direct.
2. **Couleurs naturelles :** Éviter les filtres saturés ou froids ; conserver des tons chauds (bois, tapis pastel, murs clairs).
3. **Anonymat des patients :** Ne faire figurer aucun patient ni mineur sur les photos pour respecter le secret médical et le droit à l'image.

---

## 5. Spécifications des Composants Clés

### 5.1 Boutons & CTA
- **CTA Principal Doctolib :** `bg-sage-600 hover:bg-sage-700 text-white rounded-full px-8 py-4 font-semibold shadow-md`.
- **Bouton Secondaire Maps / Infos :** `bg-white border border-[#E8E4DC] hover:bg-[#F7F5F0] text-[#232B28] rounded-full px-6 py-4`.

### 5.2 Cartes & Blocs
- **4 Piliers :** Puces rondes avec icônes Lucide (`Activity`, `PenTool`, `Heart`, `Smile`), fond `bg-sage-50`, bordures subtiles.
- **Grille des 8 Motifs :** Cartes `rounded-2xl`, fond `bg-white`, bordure `border-[#E8E4DC]`, survol doux avec bordure sauge.
- **Encadré Réglementaire (Prescription) :** `border-l-4 border-sage-600 bg-sage-50 p-5 rounded-r-2xl`.

---

## 6. Accessibilité (a11y) & Ergonomie Mobile
- **Contraste texte :** `#232B28` sur `#FDFBF7` = **13.8:1** (Niveau AAA).
- **Zones tactiles :** Minimum 48px x 48px pour les boutons et ancres sur mobile.
- **Focus visible :** Anneau de contour `focus-visible:ring-2 focus-visible:ring-sage-600`.
- **Réduction des mouvements :** Respect de `prefers-reduced-motion`.
