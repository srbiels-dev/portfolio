# Design System: Baius Design Portfolio

## 1. Visual Theme & Atmosphere

Uncompromisingly dark, editorial, and conversion-focused. Near-black canvas (`#08090C`) with stark white typography creates an environment that demands attention and projects confidence. The aesthetic sits at the intersection of tech minimalism and bold editorial design — sparse but never cold, direct but never aggressive.

Generous vertical breathing room (128–192px sections) contrasts with typographically dense moments (the pain-point stats). Every element earns its place. The emotional register: a craftsman confident enough to let work speak rather than decorate.

## 2. Color Palette & Roles

| Name | Hex | Role |
|------|-----|------|
| Void Black | `#08090C` | Page background. Deepest dark. |
| Arctic White | `#FAFAFA` | Primary text, primary button fill. Soft-bright, not blinding. |
| Silver Mist | `#D3D5D9` | Secondary text, supporting copy, subheadings. |
| Iron | `#6E737D` | Tertiary text, step numbers, muted labels. |
| Soot | `#2B2D33` | Project card and image placeholder backgrounds. |
| Gunmetal | `#656565` | Stat section top-border dividers. |
| Form Gray | `#787878` | Form input bottom-borders, toggle button borders. |
| Label Gray | `#989898` | ALL-CAPS form field labels. |
| Lime Volt | `#8BD50D` | Brand green (green-500). Reserved for design system components. |

## 3. Typography Rules

- **BDO Grotesk** (display) — All 64px headlines. Tight tracking (`-1.28px`). Line-height `1.2`. Defines brand character. Substitute: Bricolage Grotesque.
- **Geist** (body) — Supporting copy, bio text, descriptions. `14–20px`. Clean, modern, readable.
- **Geist Mono** (section labels) — Category indicators ("PROCESSO", "projetos"). `18px`. Creates a systematic/technical feel.
- **Instrument Sans** (CTAs only) — Button labels exclusively. `14–18px`, `wdth: 100`. Tactile and distinct from surrounding copy.

Hierarchy: `64px` (hero/statements) → `24px` (card titles/subtitles) → `18–20px` (body) → `14–16px` (secondary/labels).

## 4. Component Stylings

- **Primary button**: Pill-shaped (`border-radius: 9999px`), `#FAFAFA` fill, black text. `24px` h-pad / `8px` v-pad. Instrument Sans.
- **Secondary button**: Same pill, transparent fill, `#FAFAFA` 1px border, white text.
- **Project cards**: `border-radius: 16px`, `#2B2D33` fill, `429px` tall.
- **Stat items**: No card background. Top-border only (`#656565`), `24px` padding-top. Number + muted subtitle + description stacked.
- **Form inputs**: Bottom border only (`#787878`, 1px), `64px` tall field area. Transparent background. ALL-CAPS label above.
- **Form toggles**: Sharp square corners (no radius), `1px #787878` border, `24px` padding. White text.
- **Section labels**: Geist Mono + rotated right-arrow icon pointing down.

## 5. Layout Principles

- Full-bleed sections. Horizontal padding: `40px` (nav/footer), `24px` (content sections).
- Vertical rhythm: `48px` (compact) → `128px` (standard sections) → `192px` (statement/pain-points).
- Two-column layouts use equal flex (`1fr / 1fr`) with `56–114px` gaps depending on context.
- Hero content constrained to `~776px` (left-aligned). About section to `859px` (right-aligned).
- Footer: social links bottom-left, `168px` "BAIUS DESIGN" right-aligned — typographic statement, not decoration.
- `scroll-behavior: smooth` for anchor navigation.
