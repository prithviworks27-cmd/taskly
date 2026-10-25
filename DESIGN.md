# Design System: Taskly (Stitch Taste)

## 1. Visual Theme & Atmosphere
A restrained, gallery-airy workspace with asymmetric whitespace: a quiet list rail on the left, a wide left-aligned manifest on the right, nothing centred. Density 4 (daily-app balanced), variance 6, motion 6. Clinical but warm, like a well-lit architecture studio. Follows the system light/dark setting.

## 2. Color Palette & Roles
Light:
- **Canvas Mist** (#FAFAFA) , app background
- **Pure Surface** (#FFFFFF) , add bar, active list pill
- **Charcoal Ink** (#18181B) , primary text, overdue pill fill (Zinc-900, never pure black)
- **Muted Steel** (#71717A) , secondary text, dates, counts
- **Whisper Line** (rgba(24,24,27,0.09)) , 1px row dividers and borders
- **Deep Emerald** (#147A52) , the single accent: Add button, checked boxes, focus rings, status dot

Dark: Canvas #09090B, Surface #18181B, Ink #FAFAFA, Muted #A1A1AA, Accent Mint #34D399 (on-accent #04291B).
One accent only, saturation under 80%. Overdue is carried by an inverted ink pill, not a second colour. No purple, no neon.

## 3. Typography Rules
- **Display and body:** Geist (variable, bundled as woff2). List title 36 to 56px, weight 600, tracking -0.04em. Body 15 to 16px, titles weight 500.
- **Mono:** Geist Mono for dates, counts and the "Today" stamp, tabular numerals.
- **Banned:** Inter, serif faces, system fonts as the display voice.

## 4. Component Stylings
- **Add bar:** one rounded (22px) white surface with a whisper shadow; focus-within draws an accent ring. Primary Add button is accent fill, 16px radius, -1px press with slight scale.
- **List rail:** 14px-radius rows; the active list is a white pill with a hairline and diffused shadow. Counts in mono.
- **Task rows:** border-top dividers, no cards. 22px rounded checkbox with an animated spring check mark; 44px hit area. Delete cross appears on hover in a 44px target.
- **Overdue:** inverted ink pill with mono date.
- **Empty state:** dashed composed panel with a ghost checkbox glyph and "Press N to add the first task."
- **Loaders:** not needed, data is local and instant.

## 5. Layout Principles
Fixed 264px rail, content column capped at 760px and left-aligned with a generous right margin. CSS Grid rows, 100dvh app shell with internal scroll. Below 760px the rail narrows to 172px and the add bar wraps to two rows.

## 6. Motion & Interaction
Spring easing cubic-bezier(0.34, 1.56, 0.64, 1) on checks, presses and chevrons. Task rows rise in with a 45ms stagger on first load and list switch only. One perpetual micro-loop: the breathing accent dot by the wordmark. Transform and opacity only. All motion off under prefers-reduced-motion.

## 7. Anti-Patterns (Banned)
No emojis, no Inter, no pure black, no neon glow, no gradient text, no second accent, no equal card grids, no centred layouts, no AI copy clichés, no spinner loaders.
