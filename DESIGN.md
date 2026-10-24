---
name: Taskly
description: A printed dispatch waybill for daily tasks; every list a manifest, every task a numbered ruled line.
colors:
  paper: "#f4f5f5"
  ink: "#0c0c0c"
  dim: "#55595b"
  stamp: "#d42a12"
  on-stamp: "#ffffff"
  paper-dark: "#0c0c0c"
  ink-dark: "#f1f2f2"
  dim-dark: "#a2a6a8"
  stamp-dark: "#ff5a3d"
  on-stamp-dark: "#0c0c0c"
typography:
  display:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "clamp(30px, 5.5vw, 56px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  body:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
  wordmark:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "28px"
  gutter: "32px"
components:
  wordmark-plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.wordmark}"
    rounded: "{rounded.none}"
    padding: "18px 16px"
  list-index-item:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "11px 16px"
  list-index-item-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  add-plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 28px"
  ghost-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  ghost-button-hover:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.on-stamp}"
  task-line:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    height: "54px"
  task-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  overdue-stamp:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.on-stamp}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  checkbox:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "20px"
---

# Design System: Taskly

## Overview

**Creative North Star: "The Dispatch Waybill"**

Taskly reads as a printed waybill, not a card list. A list is a manifest; a task is a numbered, ruled line. Everything is one monospace size (13px) except the list title (up to 56px); hierarchy comes from case, weight, reversal and rule, never from size steps, tint or elevation. The soft rounded to-do look is the confirmed rejection.

The surface is two-tone ink on paper with one vermilion stamp color. Hover inverts a row instantly. There is no radius and no motion; state changes are cuts, not transitions. Density is ledger-tight: 54px task lines separated by 1px rules, heavier 3px rules for structure.

**Key Characteristics:**
- One type size plus one oversized title; rank by case, weight, reversal, rule.
- Ink-and-paper only, with a single vermilion stamp accent.
- 3px structural rules, 1px line rules, square corners everywhere.
- Reversal (ink plate with paper text) marks identity, selection and hover.
- Light and dark are the same form inverted, with a brighter stamp in dark.

## Colors

Cold white and near-black, with one vermilion stamp. Themes switch via `prefers-color-scheme`; the custom properties (`--paper`, `--ink`, `--dim`, `--stamp`, `--on-stamp`) are redefined, never the components.

### Primary
- **Stamp Vermilion** (light `stamp`, dark `stamp-dark`): overdue stamp, destructive hover, focus ring, caret, text selection, overdue count, and the title-rename underline.
- **On-Stamp** (`on-stamp` / `on-stamp-dark`): text on any stamp fill.

### Neutral
- **Cold Paper** (`paper` / `paper-dark`): page ground and the text color on reversed plates.
- **Waybill Ink** (`ink` / `ink-dark`): text, every rule, and reversed plate fills.
- **Dim Graphite** (`dim` / `dim-dark`): secondary text: line numbers, due dates, summary, placeholders, completed titles, scrollbar thumb.

### Named Rules
**The One Stamp Rule.** Vermilion marks only urgency and interaction: overdue, destructive hover, focus, caret, selection. It never decorates.
**The Inversion Rule.** Emphasis is reversal (swap paper and ink), not a new color.

## Typography

**Display Font:** system monospace (`ui-monospace`, SF Mono, Menlo, Consolas, monospace)
**Body Font:** same stack
**Label/Mono Font:** same stack

**Character:** a typewritten manifest. Tabular numerals keep line numbers and dates aligned.

### Hierarchy
- **Display** (800, clamp(30px, 5.5vw, 56px), 0.95, -0.035em, uppercase): the list title only.
- **Body** (400, 13px, 1.4): task titles, inputs, list names.
- **Label** (700, 13px, 0.12em, uppercase): ADD plate and other command text.
- **Wordmark** (700, 13px, 0.2em, uppercase): sidebar plate only.

Secondary metadata (list index, summary, due dates, placeholders, section heads) is uppercase at 13px.

### Named Rules
**The One Size Rule.** Apart from the list title, nothing exceeds 13px. Rank with case, weight, reversal and rule.

## Layout

Two columns: a fixed 220px sidebar (168px at 760px and below) with a 3px right rule, and a flexible main column. Main stacks header (28px 32px 22px), add row, task manifest, collapsed Completed section, each separated by a 3px or 1px rule. Task lines are a grid: line number (64px), checkbox (36px), title (flexible), due date (auto), delete (48px); at 760px and below the columns narrow to 48/32/flex/auto/44 and side gutters drop from 32px to 20px (16px for line numbers). Spacing steps used: 8, 12, 16, 20, 28, 32px.

## Elevation & Depth

Flat. There are no shadows, blurs or layers. Depth and grouping come from rules (3px structural, 1px line) and reversed plates. Hover is an instant inversion; there are no transitions or animations (disabled globally).

### Named Rules
**The Flat Rule.** Separate with a rule or a reversal, never a shadow.
**The Cut Rule.** State changes are instant. Nothing eases, fades or slides.

## Shapes

All corners are square (radius 0 forced globally). Borders are 3px for structure and the checkbox, 1px for lines. The checkbox is a 20px square with a 3px border that fills solid when checked. The delete control is a 16px by 3px crossed-bar drawn in CSS. The overdue stamp is a solid vermilion plate inside a 2px vermilion outline offset 2px, a double rule.

## Components

### Buttons
- **Shape:** square, no radius.
- **Add plate:** ink fill, paper text, bold, 0.12em tracked uppercase, 0 28px padding. Hover swaps to paper with a 3px ink inset outline.
- **Ghost (Delete list):** 1px ink border, transparent; hover fills vermilion with on-stamp text.
- **Focus:** 3px vermilion outline inset by 3px on every focusable element.

### List index
- Full-width rows, 11px 16px, 1px ink bottom rule, uppercase, count at right. Hover and the current list are opaque reversed plates; current is bold. A 3px rule precedes the new-list line.

### Task line
- 54px minimum, 1px bottom rule, positional line number in dim. Hover reverses the whole row. Done tasks go dim with a 2px strikethrough. Delete cross is hidden until row hover or keyboard focus; its hover fills vermilion.

### Overdue stamp
- Replaces the due date: bold, 4px 10px, vermilion fill, on-stamp text, 2px vermilion outline at 2px offset. The only filled color on the page.

### Inputs / Fields
- Borderless, transparent, inheriting the mono face; the row's rule is the field edge. Placeholders are dim uppercase. Date input has a 1px left rule. Rename-title input shows a 3px vermilion underline. Caret is vermilion.

### Wordmark plate and section head
- Sidebar title is an ink plate with paper text and 0.2em tracking. The Completed summary is a bold uppercase row with a CSS triangle that rotates when open; hover reverses.

## Do's and Don'ts

### Do:
- **Do** rank with case, weight, reversal and rule at 13px; reserve the 56px size for the list title.
- **Do** use 3px rules for structure and 1px rules between lines.
- **Do** express hover and selection as full reversal (ink fill, paper text).
- **Do** keep vermilion to overdue, destructive hover, focus, caret and selection, and always pair it with the matching on-stamp text color.
- **Do** redefine only the five custom properties for the dark theme.

### Don't:
- **Don't** use border radius, shadows, gradients or blurs.
- **Don't** add transitions or animation; state changes are cuts.
- **Don't** introduce a second accent color or tinted greys for emphasis.
- **Don't** add intermediate font sizes to create hierarchy.
- **Don't** return to rounded cards or soft to-do styling.

## Known gaps (not canonized)

- The display face is a system monospace because no font file is bundled. Bundling an OFL monospace is the recommended next step; treat the current stack as a stopgap, not a standard.
- Task line numbers are positional CSS counters, not stable identifiers: they renumber as tasks complete or reorder.
- Task delete has no undo.
