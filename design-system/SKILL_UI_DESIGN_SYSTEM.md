# GENTRICKS SkillUI Design System Specification
**Version 2.0.0 | Editorial Stacking-Sheet & Cinematic Dark Aesthetic**

---

## 1. Vision & Identity

Gentricks is a **youth-driven technology, innovation, creator, community, and startup ecosystem**. Its web interface is built around a **Cinematic Dark Editorial aesthetic** leveraging **Stacking-Sheet Section Architecture**, **High-Contrast Typography**, and **Electric Yellow Accents** (`#FFDE00`).

The design system follows the **SkillUI** specification framework, providing rigid token definitions, reusable component architectures, and guidelines to ensure visual excellence and structural harmony across all viewports.

---

## 2. Color System & Tokens

The Gentricks palette balances deep pitch-black dark backgrounds with sharp contrast typography and signature yellow brand accents.

### A. Brand Signature Colors
| Token Name | Hex / Value | Usage & Context |
| :--- | :--- | :--- |
| `color.brand.primary` | `#FFDE00` | Signature Gentricks Electric Yellow (Primary CTAs, Active highlights) |
| `color.brand.hover` | `#FFE833` | Primary yellow hover state |
| `color.brand.active` | `#E6C800` | Pressed / Active yellow state |
| `color.brand.subtle` | `rgba(255, 222, 0, 0.08)` | Background fill for pills, tags, and active card accents |
| `color.brand.subtleBorder` | `rgba(255, 222, 0, 0.25)` | Border highlight on hover for dark cards and badges |
| `color.brand.glow` | `rgba(255, 222, 0, 0.35)` | Ambient radial glow for hero elements and interactive cards |
| `color.brand.glowStrong` | `rgba(255, 222, 0, 0.60)` | Focus states and high-intensity orb accents |

### B. Dark Mode Surface Hierarchy
| Token Name | Hex Value | Layer & Elevation |
| :--- | :--- | :--- |
| `color.background.deep` | `#000000` | Pitch Black base background for high contrast sheets |
| `color.background.black` | `#08080A` | Standard editorial dark background for stacking sheets |
| `color.background.surface` | `#101014` | Secondary container surface background |
| `color.background.surfaceRaised` | `#16161C` | Hover / raised container surface |
| `color.background.card` | `#121216` | Standard card background fill |
| `color.background.cardHover` | `#1A1A22` | Active card hover fill |
| `color.background.glassHeader` | `rgba(8, 8, 10, 0.85)` | Glassmorphism navigation bar background with `backdrop-filter: blur(16px)` |

### C. Typography Contrast Colors
| Token Name | Hex Value | Purpose |
| :--- | :--- | :--- |
| `color.text.pureWhite` | `#FFFFFF` | Headlines, H1-H3, high-impact titles |
| `color.text.primary` | `#F4F4F5` | Primary body text (Zinc 100) |
| `color.text.secondary` | `#A1A1AA` | Secondary supporting paragraphs, subtitles (Zinc 400) |
| `color.text.muted` | `#71717A` | Metadata, index numbers, captions (Zinc 500) |
| `color.text.dark` | `#08080A` | Dark text printed on yellow button fills |

---

## 3. Typography System

The typography architecture uses a 3-tier font system loaded from Google Fonts:

1. **Display / Headings**: `Syne` (600, 700, 800, 900) — Sculptural, geometric, high-impact editorial typeface.
2. **Body Text**: `Plus Jakarta Sans` (300, 400, 500, 600, 700) — Ultra-legible modern sans-serif.
3. **Monospace & Metadata**: `Space Grotesk` (500, 600, 700) — Tech-forward monospace for indexes, badges, dates, and micro-labels.

### Typography Scale & Spec

| Scale Token | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `Syne` | `clamp(2.75rem, 7.5vw, 5.75rem)` | `900` | `1.05` | `-0.04em` |
| **Section H2** | `Syne` | `clamp(2.00rem, 4.5vw, 3.25rem)` | `800` | `1.12` | `-0.03em` |
| **Card H3** | `Syne` | `clamp(1.35rem, 2.5vw, 1.85rem)` | `800` | `1.20` | `-0.02em` |
| **Subheading H4**| `Syne` | `1.20rem` (19.2px) | `700` | `1.25` | `-0.01em` |
| **Lead Paragraph** | `Plus Jakarta Sans` | `1.15rem` (18.4px) | `400` | `1.70` | `-0.01em` |
| **Body Paragraph** | `Plus Jakarta Sans` | `1.00rem` (16px) | `400` | `1.65` | `0` |
| **Mono Badge / Pill**| `Space Grotesk` | `0.75rem` (12px) | `600` | `1.00` | `0.12em` uppercase |

---

## 4. Spacing, Layout & Grid System

### A. Layout Architecture: Editorial Stacking Sheets
Gentricks structures its main user journey as a sequence of **sticky stacking sheets** layered sequentially over each other:

```css
main > section.stack-sheet {
  position: sticky;
  top: 0;
  min-height: 100vh;
  width: 100%;
  background-color: var(--gt-color-bg-black);
  border-top: 1px solid var(--gt-color-border-subtle);
  box-shadow: 0 -25px 60px rgba(0, 0, 0, 0.95);
  overflow: hidden;
}
```

### B. Z-Index Stacking Hierarchy
- `sheet-1` (Hero): `z-index: 10`
- `sheet-2` (Idea): `z-index: 20`
- `sheet-3` (Ecosystem): `z-index: 30`
- `sheet-4` (Journey): `z-index: 40`
- `sheet-5` (People): `z-index: 50`
- `sheet-6` (Lab): `z-index: 60`
- `sheet-7` (Opportunities): `z-index: 70`
- `sheet-8` (Join CTA): `z-index: 80`
- `sheet-9` (Horizon): `z-index: 90`
- `sheet-footer`: `z-index: 100`

### C. Container Bounds
- Standard Container Max Width: `1280px` (`max-w-7xl`)
- Container Padding: `24px` (`px-6 sm:px-8 lg:px-12`)
- Section Vertical Padding: `clamp(80px, 10vw, 130px)`

---

## 5. Component Library Specifications

### A. Buttons

#### Primary Button (`gt-btn-primary`)
- **Background**: `#FFDE00` (Electric Yellow)
- **Text Color**: `#08080A` (Dark Black)
- **Font**: `Syne`, 700 Weight, Uppercase, Tracking 0.04em, 14px
- **Border Radius**: `6px` (`--gt-radius-sm`)
- **Shadow**: `0 0 25px rgba(255, 222, 0, 0.25)`
- **Hover State**: Background `#FFE833`, `translateY(-2px)`, shadow `0 0 45px rgba(255, 222, 0, 0.45)`
- **Active State**: Background `#E6C800`, `translateY(0)`

#### Secondary Button (`gt-btn-secondary`)
- **Background**: Transparent
- **Text Color**: `#FFFFFF`
- **Border**: `1px solid rgba(255, 255, 255, 0.18)`
- **Hover State**: Border `#FFDE00`, Text `#FFDE00`, Fill `rgba(255, 222, 0, 0.08)`, `translateY(-2px)`

---

### B. Cards System (`gt-card`)
- **Background Fill**: `#121216`
- **Border**: `1px solid rgba(255, 255, 255, 0.08)`
- **Border Radius**: `12px` (`--gt-radius-md`)
- **Padding**: `32px`
- **Transition**: `300ms cubic-bezier(0.16, 1, 0.3, 1)`
- **Hover Behavior**:
  - Border transitions to `rgba(255, 222, 0, 0.25)`
  - Background transitions to `#16161C`
  - Elevation: `translateY(-4px)` with shadow `0 10px 30px -10px rgba(0, 0, 0, 0.8)`

---

### C. Eyebrow Tags & Badges (`gt-tag`)
- **Typography**: `Space Grotesk`, 12px, Uppercase, 0.12em tracking
- **Background**: `rgba(255, 222, 0, 0.08)`
- **Border**: `1px solid rgba(255, 222, 0, 0.25)`
- **Border Radius**: `9999px` (Pill)
- **Live Indicator**: 6px pulsing yellow dot with glowing box-shadow

---

### D. Navigation Bar & Mobile Drawer
- **Header Height**: `72px` un-scrolled / `64px` scrolled
- **Glassmorphic Surface**: `rgba(8, 8, 8, 0.85)` + `backdrop-filter: blur(16px)`
- **Scrolled Border**: `1px solid rgba(255, 222, 0, 0.15)`
- **Mobile Menu**: Fullscreen overlay with dark blur background, high-contrast display text links, and numbered indices `01`, `02`, `03`, `04`.

---

### E. Custom Magnetic Cursor
- Desktop custom cursor with inner yellow dot (`6px`) and outer magnetic aura ring (`32px`) following pointer movement with lerp smoothing.

---

## 6. Motion, Micro-Interactions & Scroll Reveals

### A. Scroll Reveal Classes (`.rv`)
Elements enter the viewport using cubic-bezier easing:
- **Base Class (`.rv`)**: `opacity: 1`, `transform: translateY(0)`, transition `0.8s cubic-bezier(0.16, 1, 0.3, 1)`
- **Scale Class (`.rv-scale`)**: `opacity: 1`, `transform: scale(1) translateY(0)`, transition `0.9s cubic-bezier(0.16, 1, 0.3, 1)`
- **Stagger Delays**:
  - `.rv-delay-1`: `80ms`
  - `.rv-delay-2`: `160ms`
  - `.rv-delay-3`: `240ms`
  - `.rv-delay-4`: `320ms`
  - `.rv-delay-5`: `400ms`

### B. Subtle Grain Overlay
A fixed SVG noise overlay (`.subtle-grain`) rendered at `opacity: 0.02` with `pointer-events: none` across the entire viewport to give a premium analog tactile grain.

---

## 7. Responsive Breakpoint Specification

| Breakpoint | Target Device | Layout Adjustments |
| :--- | :--- | :--- |
| **`>= 1280px`** | Desktop / Large Monitor | Full 12-column grid, dual-column hero with 4:5 framed portrait media |
| **`1080px - 1279px`** | Laptop / Small Desktop | Desktop nav collapse to hamburger menu, tightens grid gaps |
| **`768px - 1079px`** | Tablet | Grid shifts to single column, stack-sheet minimum height scales dynamically |
| **`< 768px`** | Mobile Devices | Full-width stacked buttons, 100% viewport mobile drawer overlay, fluid typography clamp scaling |

---

## 8. SkillUI Design System Checklist

- [x] **Brand Color Single Source of Truth**: Standardized to `#FFDE00`
- [x] **Typography Hierarchy Rules**: `Syne` (Headings), `Plus Jakarta Sans` (Body), `Space Grotesk` (Mono)
- [x] **Universal Component Rules**: `.gt-btn`, `.gt-card`, `.gt-tag`
- [x] **Layout Integrity**: Editorial Stacking-Sheet sticky scrolling with `z-index` depth
- [x] **Responsive Adaptation**: Fluid font sizing via CSS `clamp()` and adaptive grid systems
