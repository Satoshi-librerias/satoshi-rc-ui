---
name: shared-component-ux-responsive-qa
description:
  "Use when: building or improving satoshi-rc-ui shared components, responsive
  dialogs, guided tours, privacy consent, progress indicators, accessibility,
  theme consistency, or component-level visual and functional QA."
---

# Shared Component UX and Responsive QA

Build reusable components that behave consistently across consumers, themes,
keyboard and pointer input, and mobile, tablet, and desktop layouts.

## Workflow

1. Read `.github/specs/ui-kit/spec.md`, `plan.md`, and `tasks.md`; adjust the
   acceptance criteria and planned work before changing a public visual API.
2. Inspect the component types, implementation, exports, neighboring components,
   theme tokens, and tests before changing the public API.
3. Keep reusable presentation in this library. Use DaisyUI semantic theme tokens
   such as `base-100`, `base-content`, and `primary`; do not bake a consumer's
   brand colors or layout assumptions into general components.
4. Design responsive behavior deliberately: prevent viewport overflow, allow
   long copy to wrap, keep actions reachable, and constrain tall dialogs with
   internal scrolling on short screens.
5. Give modal overlays clear visual stacking and interaction ownership. Ensure
   background clicks are blocked, the active dialog is above its curtain, and
   any highlighted tour target is above the curtain without elevating unrelated
   content.
6. Make progress indicators both visual and semantic. Keep the current step,
   range, and accessible label synchronized with the rendered progress amount.
7. Add tests for initial state, each main action, state persistence, reopening,
   keyboard/accessibility semantics, progress changes, and restoration of any
   DOM styles touched by an overlay. Avoid tests that only assert class strings
   when behavior or accessible output can be asserted.
8. For visible localized labels, verify the keys exist in each consumer locale
   and that translated output is not a raw key. Remove invalid key references
   rather than shipping missing labels; remove stale catalog keys only after
   checking dynamic and library-owned usage.
9. Run focused component tests, lint, formatting, and `npm run build:lib`.
   Visual QA is mandatory on mobile and desktop: use 320/390 CSS pixels for
   mobile, 1024/1440 for desktop, and 768 for tablet. Check overflow,
   reachability, themes, and at least one full consumer flow on mobile and
   desktop. When testing the Satoshi portfolio, exercise light, dark, and
   corporate themes.
10. For performance work, record a baseline and target an observed cost in
    render work, network loading, or build output. Prefer small changes with
    measured benefit; avoid speculative memoization and dependencies.
11. Mark spec tasks complete only when their acceptance criteria have evidence.
    Add a verified learning only after evidence from a test, build, or browser
    check. Put ideas requiring further design validation in the opportunity
    section.

## Verified Project Learnings

- `CookieConsent` can notify its consumer after a preference is saved; the
  consumer can use this to sequence other onboarding instead of showing
  overlapping dialogs.
- A modal backdrop should block pointer interaction and use a theme-aware
  translucent color. For a guided tour, raise only the active target above it
  and restore its inline styles when the step changes or the tour closes.
- A visible step count alone is weak progress feedback. Pair the localized count
  with a progress track whose `role="progressbar"` values and fill width update
  together.
- The consent and tour panels use bottom anchoring and a viewport-constrained,
  internally scrollable surface; actions need a stacked mobile layout and a
  balanced wider-screen layout.
- Use the library's existing component tests and build scripts; consumer apps
  may consume a built library package rather than source files.
- `Container` and `SectionHeading` are the composition primitives for readable
  widths, responsive spacing, and section copy; keep heading level semantic and
  visual size a separate choice.
- Generic library components should inherit typography from their consumer;
  app-specific font loading and the font-family choice belong to the consumer.
- The Satoshi portfolio consumer currently exposes light, dark, and corporate
  themes. Validate the applied theme and contrast across mobile and desktop, not
  just the theme-selector state.
- Visual QA needs both mobile and desktop coverage; tablet is an additional
  breakpoint, not a substitute for either device class.

## Improvement Opportunities

- Evaluate focus trapping, initial focus, focus restoration, and Escape-key
  behavior as one modal accessibility contract; preserve the consumer's focus
  when the dialog closes.
- Verify tour target stacking with nested stacking contexts and fixed headers in
  consumers; if needed, adopt a portal or a documented target contract.
- Check reduced-motion preferences for scroll and progress transitions, and test
  the final behavior in browsers rather than assuming CSS support.
