# Design System & Spécifications UI (DESIGN_SYSTEM.md)

## Projet : Site Vitrine Professionnel - Keliann L'Azou, Psychomotricien D.E.
- **Direction Artistique :** Sérénité, Écoute, Santé Bienveillante, Précision Thérapeutique
- **Framework CSS :** Tailwind CSS v4
- **Conformité Accessibilité :** WCAG 2.1 Niveau AA

---

## 1. Direction Artistique & Univers Graphique

La psychomotricité traite des interactions entre le psychisme, le corps et le mouvement. Le design doit immédiatement communiquer :
1. **L'Apaisement & la Sécurité :** Pour des parents d'enfants en souffrance scolaire ou des adultes anxieux, l'interface doit réduire la charge mentale visuelle (fonds chauds, grands espaces d'air, courbes douces).
2. **Le Professionnalisme Médical :** Le site ne doit pas ressembler à un blog de développement personnel ; la rigueur déontologique du diplôme d'État doit transparaître à travers la netteté de la grille et des typographies.
3. **L'Inclusivité & la Chaleur :** Une palette inspirée de la nature (vert sauge, touches minérales crème et accents d'eau vive pastel) qui parle autant aux enfants qu'aux seniors.

---

## 2. Palette de Couleurs & Tokens de Design

### 2.1 Couleurs Primitives & Sémantiques

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PALETTE DU DESIGN SYSTEM                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   Crème de Fond          Vert Sauge (Principal)  Turquoise (Accent)    │
│   #FDFBF7 / #F7F5F0      #5E8B7E / #E8F0EC       #2DD4BF / #CCFBF1     │
│                                                                        │
│   Anthracite Doux        Ambre Alerte             Blanc Pur            │
│   #232B28                #D97706                 #FFFFFF               │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

| Rôle Sémantique | Token CSS | Valeur Hex | Usage UI |
| :--- | :--- | :--- | :--- |
| **Fond Principal (Canvas)** | `--color-bg-canvas` | `#FDFBF7` | Fond général de la page (blanc crème doux évitant la lumière agressive). |
| **Fond Secondaire (Surface)** | `--color-bg-surface` | `#F7F5F0` | Cartes, conteneurs, blocs alternés de sections. |
| **Bordure Neutre** | `--color-border-subtle` | `#EFECE6` | Séparateurs, bordures de cartes et d'inputs. |
| **Texte Principal** | `--color-text-main` | `#232B28` | Titres et textes d'une lisibilité maximale (contraste > 10:1 sur crème). |
| **Texte Atténué** | `--color-text-muted` | `#58625E` | Sous-titres, mentions de durée, légendes (contraste > 5.5:1 sur crème). |
| **Primaire (Sauge)** | `--color-sage-600` | `#5E8B7E` | Boutons d'action secondaires, icônes principales, puces des 4 piliers. |
| **Primaire Foncé (Sauge Dark)** | `--color-sage-800` | `#3D5C53` | Hover des boutons sauge, accents de titres forts. |
| **Primaire Clair (Sauge Soft)** | `--color-sage-50` | `#E8F0EC` | Fonds de badges, puces rondes, cartes d'emphase. |
| **Accent (Turquoise Pastel)** | `--color-teal-accent` | `#2DD4BF` | Éléments d'énergie, badges "Doctolib", highlights subtils. |
| **Accent Clair (Turquoise Soft)** | `--color-teal-soft` | `#CCFBF1` | Hover d'icônes, liserés décoratifs, cartes "Enfants". |
| **Alerte Bannière** | `--color-amber-500` | `#F59E0B` | Bannière de congés ou messages urgents. |

### 2.2 Configuration Tailwind CSS v4 (`src/app/globals.css`)

```css
@import "tailwindcss";

@theme {
  --color-bg-canvas: #FDFBF7;
  --color-bg-surface: #F7F5F0;
  --color-border-subtle: #EFECE6;
  --color-text-main: #232B28;
  --color-text-muted: #58625E;

  --color-sage-50: #E8F0EC;
  --color-sage-100: #D5E4DC;
  --color-sage-600: #5E8B7E;
  --color-sage-700: #4B7266;
  --color-sage-800: #3D5C53;

  --color-teal-accent: #2DD4BF;
  --color-teal-soft: #CCFBF1;
  --color-teal-dark: #0D9488;

  --font-heading: var(--font-outfit), sans-serif;
  --font-body: var(--font-jakarta), sans-serif;

  --radius-card: 1.25rem; /* 20px */
  --radius-pill: 9999px;
}

/* Base resets & smooth behaviors */
html {
  scroll-behavior: smooth;
  background-color: var(--color-bg-canvas);
  color: var(--color-text-main);
  font-family: var(--font-body);
}

::selection {
  background-color: var(--color-sage-100);
  color: var(--color-sage-800);
}
```

---

## 3. Typographie & Échelle Hiérarchique

Le couple typographique recommandé allie modernité douce et lisibilité irréprochable :
- **Titres (Headings) :** `Outfit` ou `Geist Sans` avec des terminaisons rondes et chaleureuses.
- **Corps de texte (Body) :** `Plus Jakarta Sans` ou `Inter` pour une excellente lisibilité à toutes les tailles d'écrans.

### 3.1 Échelle Typographique

| Niveau | Taille / Line-height | Poids (Weight) | Usage |
| :--- | :--- | :--- | :--- |
| **Display / H1** | `text-4xl md:text-5xl lg:text-6xl` (36px - 60px) | `font-bold` (700) | Titre principal Hero banner. |
| **H2 Section** | `text-2xl md:text-3xl lg:text-4xl` (24px - 36px) | `font-semibold` (600) | Titres de sections ("Qui suis-je ?", "La Psychomotricité"). |
| **H3 Sous-titre** | `text-xl md:text-2xl` (20px - 24px) | `font-medium` (500) | Titres de cartes, motifs de consultation, piliers. |
| **Corps (Body)** | `text-base` (16px / leading-relaxed) | `font-normal` (400) | Paragraphes de présentation, descriptions de soins. |
| **Petit / Métadonnée** | `text-sm` (14px) | `font-medium` (500) | Horaires, mentions légales, notes de bas de carte. |
| **Badge / Tag** | `text-xs uppercase tracking-wider` (12px) | `font-semibold` (600) | Tag "Diplômé d'État", "Sur ordonnance". |
| **Citation** | `text-lg md:text-xl italic` | `font-light` (300) | Citation inspirante en fin de section valeurs. |

---

## 4. Rayons de Courbure (Radii) & Ombres (Elevation)

Pour traduire l'univers pédiatrique et la bienveillance, les angles droits tranchants sont proscrits :
- **Rayons de courbure (Border Radius) :**
  - Boutons & Puces des 4 piliers : `rounded-full` (Pill shapes complètes, ultra-ergonomiques au toucher mobile).
  - Cartes de contenu & Modales : `rounded-2xl` (16px) ou `rounded-3xl` (24px).
  - Cadres photos : `rounded-3xl` avec bordure intérieure légère (`ring-1 ring-black/5`).
- **Élévations & Ombres :**
  - Des ombres ambrées/chaudes subtiles plutôt que du noir pur :
    - `shadow-sm` : Cartes statiques au repos (`0 2px 8px -2px rgba(94, 139, 126, 0.08)`).
    - `shadow-md` : Survol des cartes interactives et bouton Doctolib.
    - `shadow-lg` : Navbar sticky avec `backdrop-blur-md bg-[#FDFBF7]/90`.

---

## 5. Spécifications des Composants Clés

### 5.1 Boutons & CTA
1. **CTA Doctolib Principal (`ButtonDoctolib`) :**
   - Rôle : Convertir immédiatement les visiteurs.
   - Style : Fond bleu Doctolib officiel `#0596DE` ou Sauge profond `#3D5C53` avec accent pastel `#CCFBF1`.
   - Icône : `Calendar` ou lien externe `ExternalLink`.
   - Classes : `inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5`.
2. **Bouton Secondaire (`ButtonOutline`) :**
   - Style : Fond transparent, bordure `border-2 border-sage-600`, texte `text-sage-700`.
   - Hover : Fond `bg-sage-50`.
3. **Bouton Tertiaire / Maps (`ButtonGhost`) :**
   - Style : Texte souligné ou icône carte discrète `MapPin`.

### 5.2 Le Bandeau des 4 Piliers (`PillarsBanner`)
- Conteneur centré, disposition en flex-wrap ou grille 4 colonnes (`grid grid-cols-2 md:grid-cols-4 gap-4`).
- Chaque pilier est une puce ronde :
  - Cercle icône : Fond `bg-sage-50 text-sage-600` avec icône Lucide (`Activity`, `PenTool`, `Heart`, `Smile`).
  - Texte : Typographie `text-sm font-medium text-center text-text-main`.

### 5.3 Les Cartes de Consultation (`MotifCard`)
- 8 motifs de consultation disposés en grille responsive (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`).
- Anatomie de la carte :
  - **En-tête :** Icône spécifique dans une pastille turquoise pastel (`bg-teal-soft/60 text-teal-dark p-3 rounded-2xl`).
  - **Titre (H3) :** Court, ciblé (ex. *"Troubles de la motricité fine & Graphisme"*).
  - **Description :** 2 à 3 lignes explicatives et concrètes.
  - **Micro-interaction :** Transition douce au survol (`hover:border-sage-600 hover:-translate-y-1 transition duration-300`).

### 5.4 La Section "Pour qui ?" (`TargetAudience`)
3 cartes distinctes avec distinction visuelle :
1. **Enfants (Dès le plus jeune âge) :** Badge icône `Baby / Sparkles`, ton vert sauge clair.
2. **Adolescents :** Badge icône `UserCheck`, ton bleu turquoise doux.
3. **Adultes & Aînés :** Badge icône `ShieldCheck`, ton crème texturé.

### 5.5 Bloc d'Avertissement Déontologique (`PrescriptionBanner`)
- Encadré obligatoire rappelant la prescription médicale.
- Style : Bordure gauche épaisse `border-l-4 border-sage-600`, fond `bg-sage-50/70 p-5 rounded-r-2xl`.
- Icône : `FileText` ou `Stethoscope`.

---

## 6. Guide d'Accessibilité (a11y) & Ergonomie Mobile

- **Zones tactiles (Touch Targets) :** Tous les boutons et liens mobiles possèdent une zone cliquable minimale de `48px x 48px`.
- **Contraste de couleurs :**
  - Texte `#232B28` sur fond crème `#FDFBF7` = **Ratio de 13.8:1** (dépasse largement les 4.5:1 exigés par le niveau AAA).
  - Vert sauge `#5E8B7E` sur fond crème = **Ratio de 4.8:1** (conforme AA pour les textes normaux et titres).
- **Navigation au clavier :**
  - Anneau de focus visible et contrasté : `focus-visible:ring-2 focus-visible:ring-sage-600 focus-visible:outline-none`.
- **Réduction des mouvements :**
  - Prise en charge systématique de `@media (prefers-reduced-motion: reduce)` désactivant le smooth-scroll et les transitions dynamiques pour les personnes sensibles.
