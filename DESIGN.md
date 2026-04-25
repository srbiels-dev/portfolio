# Design System: Gabriel Ferraz Portfolio
**Figma File Key:** `Kh5gKOASrrJU7poDu0GfGG`
**Token File:** `tokens.json` (Tokens Studio format — supports Light & Dark modes)

---

## 1. Visual Theme & Atmosphere

**Dark mode default.** The primary experience is a near-void black (`#060609`) canvas — a brand-specific black with a subtle blue undertone that separates it from pure darkness. Against this, the brand green (`#8BD50D`) hits with raw chartreuse energy: unfiltered, vivid, unapologetic.

The palette is deliberately ecological: black ground, electric green growth, warm cream harvest. It reads natural yet technical — organic origins rendered through a digital lens. Editorial density, generous whitespace, no decoration that doesn't earn its place.

**Light mode** inverts without losing character. The Seasalt white (`#FAFAFA`) replaces void with airiness; the brand black becomes text on white; the green slightly darkens for better contrast. The personality holds — just different lighting on the same objects.

---

## 2. Brand Color Palette

### Primary Brand Colors

| Name | Hex | Role |
|---|---|---|
| **Black** | `#060609` | Brand black — near-void with blue undertone. Page canvas in dark mode, max-weight text in light mode |
| **Seasalt** | `#FAFAFA` | Brand white — warm off-white. Page canvas in light mode, primary text in dark mode |
| **Yellow Green** | `#8BD50D` | Brand green — vivid chartreuse. Primary accent, CTAs, interactive elements |
| **Cream** | `#EDF0BD` | Brand cream — warm lime. Secondary accent, surface tints, subtle highlights |

### Color Scales (11 steps each: 50 → 950)

#### Neutral (Blue-Dark, from `#060609`)
Light-tinted blue-gray range in the 50–400 zone that shifts to indigo-black by 900–950. The blue undertone is latent at extremes and visible mid-range.

| Step | Hex | Appearance |
|---|---|---|
| 50 | `#F4F4F9` | Near-white, cool tint |
| 100 | `#EBEBF3` | Light blue-white |
| 200 | `#D3D4E4` | Soft blue-gray |
| 300 | `#ADAFCC` | Periwinkle-gray |
| 400 | `#8084B0` | Medium blue-gray |
| 500 | `#606597` | Indigo-gray |
| 600 | `#4C4F7D` | Dark indigo |
| 700 | `#3E4066` | Deep indigo |
| 800 | `#363856` | Very dark indigo |
| 900 | `#313249` | Near-black indigo |
| 950 | `#060609` | Brand Black ★ |

#### Brand Green (from `#8BD50D`)
Lime-to-void range. 50–300 are light yellow-greens usable as tints on light backgrounds; 500 is the hero value; 700–950 approach forest/near-black for dark backgrounds.

| Step | Hex | Appearance |
|---|---|---|
| 50 | `#F8FFE6` | Near-white lime |
| 100 | `#EEFEC9` | Light lime |
| 200 | `#DDFB9B` | Soft lime |
| 300 | `#C4F55D` | Bright lime |
| 400 | `#A4EF2C` | Near-brand, slightly cooler |
| 500 | `#8BD50D` | Brand Yellow Green ★ |
| 600 | `#6AAA06` | Deeper green |
| 700 | `#51810A` | Forest green |
| 800 | `#42660E` | Dark forest |
| 900 | `#385611` | Very dark green |
| 950 | `#1B3003` | Near-black green |

#### Brand Cream (from `#EDF0BD`)
Warm olive-lime range. 50–200 are creamy and soft; mid-range steps become olive-gold; 800–950 shift to dark warm brown-green.

| Step | Hex | Appearance |
|---|---|---|
| 50 | `#FAFAEC` | Cream white |
| 100 | `#EDF0BD` | Brand Cream ★ |
| 200 | `#E8EAA5` | Light lime-cream |
| 300 | `#DADD70` | Warm yellow-green |
| 400 | `#CDCF46` | Olive-gold |
| 500 | `#B9BA30` | Deep olive |
| 600 | `#9A9725` | Muted olive |
| 700 | `#797320` | Dark olive |
| 800 | `#635D20` | Warm dark brown |
| 900 | `#554F20` | Very dark warm brown |
| 950 | `#302C0E` | Near-black warm |

### Status Scales (11 steps each)

**Danger (Red)** — `#EF4444` base. Standard red scale. Universally understood. Used for errors, destructive actions, form validation failures.

**Warning (Amber)** — `#F59E0B` base. Warm amber scale. Used for caution states, rate-limited actions, non-blocking issues. Harmonizes with the Cream brand color family.

**Success (Emerald)** — `#22C55E` base. **Distinct from brand green** (which is yellow-green/chartreuse). True emerald provides clear "confirmed/positive" semantic meaning without confusion with brand identity.

---

## 3. Token Architecture (3-Tier System)

Best-practice design token hierarchy:

```
core/          ← Tier 1: Raw primitive values. No semantic meaning.
  colors/      ← All full color scales
  dimensions/  ← Spacing, radius, border-width, icon sizes
  typography/  ← Font families, sizes, weights, line-heights, tracking

semantic/      ← Tier 2: Meaning-based aliases. Mode-specific.
  light/       ← Light mode overrides (references core/)
  dark/        ← Dark mode overrides (references core/)

components/    ← Tier 3: Component-specific. References semantic/.
               ← Mode-agnostic — works in both light and dark automatically
```

**Why 3 tiers?**
- Primitives can change (e.g. rebrand) without touching semantic or component logic
- Semantic tokens decouple meaning from value — "background/default" in light mode points to white, in dark mode points to black
- Component tokens allow component-level overrides without duplicating entire theme logic

---

## 4. Typography System

**Three-font system, each scoped to a distinct role:**

### BDO Grotesk — Display & Body (`core.typography.font-family.display`)
Primary structural font. All headlines, body copy, labels.
- Negative letter-spacing (`-0.02em`) gives it a compressed editorial quality
- Regular (400) for body, Bold (700) for feature titles only
- Exception: metric sublabels use wide tracking (`+0.04em`) for a data-unit feel

| Semantic Role | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|
| Display headline | 64px (6xl) | 400 | 120% | -0.02em |
| Section title | 24px (2xl) | 400 | 120% | -0.02em |
| Feature title | 20px (xl) | 700 | 120% | -0.02em |
| Body intro | 20px (xl) | 400 | 120% | -0.02em |
| Feature body | 18px (lg) | 400 | 140% | -0.02em |
| Metric sublabel | 24px (2xl) | 400 | 120% | +0.04em |
| Process body | 16px (md) | 400 | 120% | 0 |

### Geist Mono — Labels & Tags (`core.typography.font-family.mono`)
Accent font. Used exclusively for section labels, code references, technical strings.
- 18px (lg), Regular 400, -0.02em tracking
- Signals "navigational/structural" meaning vs body content

### Geist — Prose (`core.typography.font-family.body`)
Long-form reading. Used for bio text, extended descriptions where BDO Grotesk's tight tracking would fatigue the eye.
- 16px (md), Regular 400, normal tracking, 120% line-height

### Instrument Sans — Interactive (`core.typography.font-family.ui`)
Button and UI control font. Smaller scale (14px / sm), kept strictly to interactive affordances to distinguish them from content type.

---

## 5. Semantic Token Map by Mode

### Background Tokens
| Token | Light | Dark |
|---|---|---|
| `background/default` | `#FAFAFA` (Seasalt) | `#060609` (Black) |
| `background/subtle` | `#F4F4F9` (neutral-50) | `#313249` (neutral-900) |
| `background/inverse` | `#060609` | `#FAFAFA` |
| `background/brand` | `#8BD50D` | `#8BD50D` |
| `background/brand-subtle` | `#F8FFE6` (green-50) | `#1B3003` (green-950) |

### Text Tokens
| Token | Light | Dark |
|---|---|---|
| `text/primary` | `#060609` | `#FAFAFA` |
| `text/secondary` | `#3E4066` (neutral-700) | `#ADAFCC` (neutral-300) |
| `text/tertiary` | `#606597` (neutral-500) | `#606597` (neutral-500) |
| `text/disabled` | `#8084B0` (neutral-400) | `#3E4066` (neutral-700) |
| `text/brand` | `#51810A` (green-700) | `#A4EF2C` (green-400) |
| `text/on-brand` | `#060609` | `#060609` |

### Interactive Tokens
| Token | Light | Dark |
|---|---|---|
| `interactive/primary-bg` | `#060609` | `#FAFAFA` |
| `interactive/primary-fg` | `#FAFAFA` | `#060609` |
| `interactive/secondary-border` | `#D3D4E4` (neutral-200) | `#FAFAFA` |
| `interactive/brand-bg` | `#8BD50D` | `#8BD50D` |
| `interactive/brand-fg` | `#060609` | `#060609` |

---

## 6. Component Stylings

### Button — Primary (dark-on-light / light-on-dark)
- **Light mode:** near-black fill (`#060609`) with white text
- **Dark mode:** off-white fill (`#FAFAFA`) with black text
- Shape: pill — `border-radius: 9999px`
- Padding: 8px × 24px
- Font: Instrument Sans 14px
- Three variants: `primary`, `secondary` (outline), `brand` (green fill)

### Button — Brand
- Fill: `#8BD50D` in both light and dark modes
- Text: `#060609` always (sufficient contrast on this green)
- Hover: green-600 or green-400 depending on mode
- Same shape/sizing as primary

### Card
- Light: white surface, neutral-200 border, xl radius (16px)
- Dark: neutral-900 surface, neutral-800 border, xl radius
- Standard padding: 24px

### Input
- Light: white bg, neutral-300 border → neutral-500 (brand color) on focus
- Dark: neutral-900 bg, neutral-700 border → green-500 on focus
- Radius: md (8px)

### Status Badges
All variants: same structure — subtle tinted background, matching text, matching border. The 3 status scales are tuned per mode (dark mode uses lighter text on darker bg).

---

## 7. Layout Principles

**12-step spacing scale** (4px → 192px). Based on a 4px grid. Gaps between elements use the smaller end (4–24px); section-level padding uses the larger end (64–192px).

**Border radius scale** goes from `none` to `full` (pill). Buttons are always pill. Cards are `xl` (16px). Inputs are `md` (8px). Modals/sheets can go up to `2xl` (24px).

**1200px max-width container** with 24px horizontal padding for edge breathing room. All sections span full-width with generous vertical padding (128–192px on hero/feature sections).
