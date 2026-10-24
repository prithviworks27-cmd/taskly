# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
A single person managing their own daily personal tasks on a Mac desktop. They open the app many times a day for quick capture, then glance at what is open and what is overdue. The repo is also public on GitHub, so the app doubles as a portfolio piece, but the daily personal user is the primary audience.

## Product Purpose
Taskly is a local-first desktop to-do app (Electron, plain HTML/CSS/JS). It lets one person keep several lists of tasks, give tasks optional due dates, tick them off, and see overdue work at a glance. Success is capturing a task in seconds and never losing sight of what is overdue.

## Positioning
A small, offline, account-free list app: no sync, no sign-in, data in one local JSON file. Inspired by the general feature set of list-based to-do apps; original code and branding, not affiliated with Microsoft.

## Operating Context
Runs as a macOS Electron window (about 1000x680 default, 640x420 minimum), also buildable as a DMG. Follows the system light/dark appearance. Data is saved locally in Electron's user-data folder.

## Capabilities and Constraints
- Multiple lists: create, rename (click the title), delete (with confirm).
- Tasks: add with optional due date, complete, delete; completed tasks collapse into their own section.
- Overdue tasks are visibly distinguished; open-task counts shown per list.
- Must keep working with no framework: plain HTML/CSS/JS in `src/`, strict CSP (`default-src 'self'`), so no remote fonts or scripts.
- Out of scope for now: My Day, steps, notes, reminders, sync, accounts.

## Brand Commitments
Visual direction pinned by the user: a mixture of minimal and brutal. Features to preserve: all current features and light/dark following the system. The name "Taskly" was not marked as binding.

## Evidence on Hand
No real user data, screenshots, or testimonials. Do not fabricate any.

## Product Principles
- Capture first: adding a task is always one keystroke away.
- Overdue is the loudest state on the screen.
- Everything local, nothing hidden: no accounts, no network.
- Fewer things on screen, each of them undeniable.

## Accessibility & Inclusion
Keyboard operable, visible focus, sufficient contrast in both themes, respects `prefers-color-scheme` and `prefers-reduced-motion`.
