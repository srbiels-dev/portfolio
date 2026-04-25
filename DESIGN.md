# Design System: Gabriel Ferraz Portfolio
**Figma File Key:** `Kh5gKOASrrJU7poDu0GfGG`

---

## 1. Visual Theme & Atmosphere

**Tonal dark editorial.** A near-absolute black canvas (#0C0C0C) where typography is the sole decorative element. The system deliberately rejects ornament — no gradients, no shadows, no surface texture. What remains is raw contrast: pure white against void. The mood reads as *printed matter* rather than screen — serious, intentional, confident.

Density is low; whitespace is sovereign. Sections breathe through large vertical padding (128–192px), creating a reading pace that forces pause. The editorial quality comes from typographic hierarchy alone: a single typeface family (BDO Grotesk) doing all structural work, while Geist Mono acts as a monospace accent for labeling, and Instrument Sans is reserved exclusively for interactive elements.

---

## 2. Color Palette & Roles

### Tier 1 — Primitives (raw values, no semantic meaning)

| Token Name | Hex | Description |
|---|---|---|
| `black/950` | `#0C0C0C` | Near-void, deepest surface — the canvas |
| `black/pure` | `#000000` | Absolute black — used on filled button text |
| `white/pure` | `#FFFFFF` | Full white — primary readable text |
| `white/50` | `#FAFAFA` | Off-white warm — interactive/button surface |
| `gray/100` | `#D5D5D5` | Lightest muted — subtle body on dark |
| `gray/200` | `#B2B2B2` | Feature description text |
| `gray/300` | `#AEAEAE` | Highlighted phrase, editorial accent |
| `gray/400` | `#ACACAC` | Metric sublabels, secondary data |
| `gray/500` | `#A7A7A7` | Process step numbers |
| `gray/600` | `#A2A2A2` | Subtitles, supporting text |
| `gray/700` | `#656565` | Dividers and separator borders |
| `gray/800` | `#2B2D33` | Card/placeholder surface (slightly warm dark) |

### Tier 2 — Semantic (aliased to primitives, named by intent)

**Background**
| Token Name | References | Role |
|---|---|---|
| `color/background/canvas` | `black/950` | Page-level background |
| `color/background/surface` | `gray/800` | Cards, placeholders, containers |
| `color/background/inverse` | `white/50` | Filled interactive elements |

**Text**
| Token Name | References | Role |
|---|---|---|
| `color/text/primary` | `white/pure` | Body, headlines — maximum contrast |
| `color/text/secondary` | `gray/600` | Subheadlines, supporting descriptions |
| `color/text/muted` | `gray/400` | Labels, less critical info |
| `color/text/subtle` | `gray/100` | Light body copy on certain sections |
| `color/text/highlight` | `gray/300` | Emphasized inline text fragment |
| `color/text/accent` | `gray/500` | Decorative numbers (process steps, metrics) |
| `color/text/inverse` | `black/pure` | Text on filled/light surfaces |

**Border**
| Token Name | References | Role |
|---|---|---|
| `color/border/subtle` | `gray/700` | Section dividers, card top borders |
| `color/border/strong` | `white/50` | Outlined button border |

**Interactive**
| Token Name | References | Role |
|---|---|---|
| `color/interactive/filled-background` | `white/50` | Filled button background |
| `color/interactive/filled-foreground` | `black/pure` | Text on filled button |
| `color/interactive/outlined-border` | `white/50` | Outlined button border |
| `color/interactive/outlined-foreground` | `white/pure` | Text on outlined button |

### Tier 3 — Component Tokens (aliased to semantic layer)

**Button**
| Token Name | References Semantic | Role |
|---|---|---|
| `button/filled/background` | `color/interactive/filled-background` | Filled button fill |
| `button/filled/foreground` | `color/interactive/filled-foreground` | Filled button label |
| `button/filled/radius` | `radius/button` | Pill-shaped corner |
| `button/outlined/border` | `color/interactive/outlined-border` | Outlined button stroke |
| `button/outlined/foreground` | `color/interactive/outlined-foreground` | Outlined button label |
| `button/outlined/radius` | `radius/button` | Pill-shaped corner |

**Card**
| Token Name | References Semantic | Role |
|---|---|---|
| `card/background` | `color/background/surface` | Card fill |
| `card/radius` | `radius/card` | Gently rounded corners |

---

## 3. Typography Rules

**Three-font system, strictly scoped:**

### BDO Grotesk — Display & Body (structural font)
- The primary workhorse. Carries every headline, subheading, body copy, and label.
- Weight contrast is the only typographic decoration: Regular (400) for body, Bold (700) for feature titles.
- Letter spacing is uniformly negative (-2%) — gives the type a compressed, editorial quality.
- Exception: metric sublabels use +4% tracking for a label/data-unit feel.

| Role | Weight | Size | Line Height | Tracking |
|---|---|---|---|---|
| Display headline | 400 | 64px | 120% | -2% |
| Section subtitle | 400 | 24px | 120% | -2% |
| Body intro | 400 | 20px | 120% | -2% |
| Feature title | 700 | 20px | 120% | -2% |
| Feature body | 400 | 18px | 140% | -2% |
| Metric label | 400 | 18px | 120% | none |
| Metric sublabel | 400 | 24px | 120% | +4% |
| Process body | 400 | 16px | 120% | none |
| Bio text | 400 | 16px | 120% | none |
| Button label | — (Instrument Sans) | — | — | — |
| Section tag | — (Geist Mono) | — | — | — |

### Geist Mono — Section Labels (accent font)
- Used exclusively for the small navigational labels that precede major sections.
- Size: 18px, Regular 400, -2% tracking.
- Appears alongside the arrow icon component to announce section type.
- Examples: "projetos →", "PROCESSO →"

### Instrument Sans — Interactive (UI font)
- Used only for button text. Keeps interactive elements feeling distinct from content.
- Size: 14px, Regular 400, -2% tracking.
- The smaller size reinforces buttons as UI affordances, not content.

---

## 4. Component Stylings

### Button — Filled (Primary CTA)
- **Shape:** Pill-shaped — `border-radius: 99px` (fully rounded ends)
- **Background:** Off-white warm `#FAFAFA` on void canvas — maximum contrast without harsh pure white
- **Text:** Absolute black `#000000` — reversal of the page's primary text color
- **Padding:** 8px vertical × 24px horizontal — compact but breathable
- **Font:** Instrument Sans 14px
- **Behavior:** No default shadow. Hover state not specified in design but should use slight opacity reduction or subtle scale.

### Button — Outlined (Secondary CTA)
- **Shape:** Same pill-shaped radius as filled
- **Background:** Transparent
- **Border:** 1px solid `#FAFAFA`
- **Text:** Pure white `#FFFFFF`
- **Padding:** Identical to filled variant
- **Font:** Instrument Sans 14px
- **Usage:** Always paired with a filled CTA. Never used standalone.

### Project Card
- **Shape:** Gently rounded — `border-radius: 16px`
- **Background:** Dark neutral surface `#2B2D33` — distinct from page black but not distracting
- **Dimensions:** ~368px wide, ~429px tall (portrait orientation)
- **Shadow:** None — flat, consistent with the overall system
- **Label:** BDO Grotesk 20-24px below the image block

### Metric Card
- **Separator:** 1px top border `#656565` — the only divider in the system
- **Number:** BDO Grotesk 64px `#FFFFFF` (same size as display headlines — maximum visual weight)
- **Sublabel:** BDO Grotesk 24px `#ACACAC` with +4% tracking — data unit qualifier
- **Description:** BDO Grotesk 18px `#D5D5D5`
- **Layout:** Column, gap 24px, padding 24px top

### Section Label (Tag)
- **Font:** Geist Mono 18px
- **Icon:** Arrow SVG component (Direction--right--01), 20×20px
- **Layout:** Row, gap 11px, items centered
- **Text color:** `#FFFFFF`

---

## 5. Layout Principles

**Single-column, full-width editorial sections.** The 1200px container centers within the viewport. All sections span the full container width with 24px horizontal padding for edge breathing room.

**Vertical rhythm is the only rhythm.** No complex grids. Sections are stacked vertically. Internal layouts use simple rows (for buttons, labels) and columns (for content).

**Whitespace as structure:**
- Hero: 113px vertical padding
- Pain Points: 192px vertical padding (most generous — the section needs weight)
- Services + About: 128px vertical padding
- Process: 25px top padding (intentionally tighter — follows from prior section)

**Alignment strategy:**
- Content blocks are left-aligned
- One exception: the About section aligns its content block to the right (`align-items: flex-end`) — creates visual asymmetry and editorial interest
- Buttons and CTAs sit left, except when centered within a button group

**Spacing scale (Number primitives):**
| Token | Value | Use |
|---|---|---|
| `spacing/1` | 4px | Tight internal gaps (number+sublabel pairs) |
| `spacing/2` | 8px | Button padding vertical |
| `spacing/3` | 10px | Section label gap |
| `spacing/4` | 12px | Metric card gap |
| `spacing/5` | 16px | Headline-body gap, button group gap |
| `spacing/6` | 24px | Standard gap between elements |
| `spacing/7` | 32px | About text stack gap |
| `spacing/8` | 48px | Section internal gap |
| `spacing/9` | 56px | Feature list gap, About section gap |
| `spacing/10` | 64px | Pain Points section internal gap |
| `spacing/11` | 128px | Services + About section padding |
| `spacing/12` | 192px | Pain Points section padding |

**Border Radius scale:**
| Token | Value | Use |
|---|---|---|
| `border-radius/none` | 0px | No rounding |
| `border-radius/sm` | 4px | Reserved |
| `border-radius/md` | 8px | Reserved |
| `border-radius/lg` | 16px | Cards, image placeholders |
| `border-radius/full` | 99px | Buttons (pill shape) |
