---
version: 1
slug: "src-index-html"
primary_target: "src/index.html"
related_targets: []
---

# Taskly main window

Mode: Operate. Single surface: sidebar of lists + task manifest. Visitor is one person capturing and clearing daily tasks on a Mac.

## Direction contract

THESIS: Taskly is a printed dispatch waybill, not a card list. Every list is a manifest, every task a numbered ruled line. The soft rounded to-do look is refused.

OWN-WORLD: Ink black on cold white (#f4f5f5 / #0c0c0c), one stamp vermilion (#d42a12) used only for overdue and destructive hover; dark theme is the same form inverted with a brighter stamp. System monospace at 13px for everything except the 56px list title; rank by case, weight, reversal and rule. 3px structural rules, 1px line rules, square 3px-bordered checkboxes, no radius, no motion, hover inverts a row instantly.

STORY: See what is open and what is overdue at a glance; add a task in one keystroke (N); finish it with one click.

FIRST VIEWPORT: Left 220px: reversed black wordmark plate, list index with count at right (active list is an opaque reversed plate), new-list line at the foot. Right: 56px list title, "N OPEN / N OVERDUE" under it, a full-width add row with date and a black ADD plate, then ruled numbered task lines with a vermilion OVERDUE stamp, collapsed COMPLETED section at the end.

FORM: Dispatch waybill (rw-timetable-slide-rack discipline: one type size, rank by weight/case/reversal/rule), seed key 74a6f784, assigned direction; user compared three local previews and finally chose this one.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
