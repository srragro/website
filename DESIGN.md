# Design System — Shree Radha Rani Agrotech

## Color (OKLCH-informed, hex declared)

Primary identity colors are fixed; everything else is in service.

### Primary (deep forest — locked)
- `primary` `#012d1d` — wordmarks, dominant CTAs, large committed surfaces
- `primary-container` `#1b4332` — secondary surfaces in primary moments, dark-mode background
- `on-primary` `#ffffff`
- `on-primary-container` `#86af99`
- `primary-fixed` `#c1ecd4` — light-mode accents on dark
- `primary-fixed-dim` `#a5d0b9`

### Accent (saffron — Indian heritage warm)
- `accent` `#c97f2d` — single accent, ≤10% surface, emphasis only
- `accent-deep` `#9c5d1d` — hover / pressed states
- `accent-soft` `#e8d3b0` — backgrounds for accent moments

### Neutrals (warm paper, all tinted toward the brand)
- `background` `#f4ede0` — canvas, the paper
- `surface` `#faf5ea`
- `surface-container-lowest` `#fbf8f1` — elevated tiles
- `surface-container-low` `#efe6d2`
- `surface-container` `#ebe1c8`
- `surface-container-high` `#e3d8bb`
- `surface-container-highest` `#dccfa9`
- `on-surface` `#1a1d18` — warm near-black (never `#000`)
- `on-surface-variant` `#4a4f43` — warm olive secondary text
- `outline` `#807866`
- `outline-variant` `#c5bda7`

## Typography

Three families, each with a job. Never mix display and body — they have separate roles.

- **Display — Fraunces** (variable, with optical sizing 9–144 and SOFT axis). For all H1/H2/section markers, oldstyle figures enabled for numerics in editorial moments.
- **Body — Source Serif 4**. For paragraph text and long-form reading at 17–19px / 28–32px line-height.
- **UI / Labels — Metropolis**. Navigation, buttons, captions, eyebrows, form labels. Uppercase + tracked for eyebrows.

### Scale (1.27 modular)
- `text-eyebrow` 11 / 16, +0.18em, uppercase
- `text-label` 13 / 20, +0.04em, semibold
- `text-body` 17 / 28
- `text-body-lg` 19 / 32
- `text-headline-sm` 20 / 28
- `text-headline-md` 26 / 34, −0.01em
- `text-headline-lg` 40 / 46, −0.02em
- `text-display-sm` 56 / 60, −0.025em
- `text-display-md` 72 / 76, −0.03em
- `text-display-lg` 96 / 96, −0.035em

## Layout & Spacing

- Container max: 1280px
- Gutter: 32px (was 24)
- Asymmetric 12-col grids preferred over symmetric. The page should never look like cards on a grid.
- Vertical rhythm: 96px section gaps, 48px subsection, 24px module
- Section markers (01, 02, …) on the left margin where space allows; otherwise above the section heading

## Texture

- Paper grain via SVG fractal noise, ~4% opacity, multiplied over canvas
- Hairline rules (1px `outline-variant`) between editorial sections
- No box-shadows by default; elevation is conveyed by hairline + tint, not bloom

## Motion

- Reveals: opacity + 16px upward translate, 900ms, cubic-bezier(0.16, 1, 0.3, 1) (ease-out-quint)
- No bounce, no elastic, never animate layout properties
- Hover transitions: 200ms ease-out

## Iconography

Material Symbols Outlined, used sparingly. Icons are punctuation, not headlines — typography carries content. When used, sized to align with the type baseline, never as the dominant visual.

## Components

### Button — primary
Background `primary`, text `on-primary`, font Metropolis 13 semibold tracked, 16px / 24px padding, sharp corners (2px), hover lifts to `primary-container` over 200ms.

### Button — ghost
Transparent background, 1px `on-surface` border, label hover bg `surface-container-low`.

### Eyebrow label
Metropolis 11 / 16, +0.18em, uppercase, `on-surface-variant`. Often paired with a leading rule (40px hairline) or a section number.

### Editorial pull-quote
Fraunces italic, 28 / 38, hanging indent, accent-colored opening glyph, attribution in label style below.

### Stat block
Display number in Fraunces oldstyle figures, ≥72px, paired with a small Metropolis caption. Never wrapped in a card; sit naked on the page.

### Hairline section divider
`<hr class="border-outline-variant">` — 1px, full-width within container.

## Anti-patterns to refuse
- Identical 3-up icon-heading-text card grids (the original design's main sin)
- Hero metric template (big number + small label + 4 supporting stats)
- Gradient text, side-stripe borders, glass cards
- Box shadows as default elevation
- "Trusted by" logo strips
- Em dashes (use commas, colons, periods — also not `--`)

## Dark mode

Toggle is preserved. Dark variant uses `primary-container` (`#1b4332`) as canvas with `primary-fixed` for headings and warm cream for body — inverts the paper feel without losing warmth. Saffron accent stays the same hue.
