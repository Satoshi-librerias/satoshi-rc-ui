# UI Kit Composition Plan

Parent specification: [spec.md](./spec.md)

## Design

Use the existing `Container` as the responsive spacing primitive and extend
`SectionHeading` as the reusable content hierarchy primitive. Keep semantic
heading level independent from visual size. Implement styles through library
constants and DaisyUI tokens; do not add consumer-specific color values.

## Sequence

1. Define responsive horizontal padding and section-heading size/alignment
   options with backward-compatible defaults.
2. Add focused tests for the public props and render order.
3. Build the library and run the focused component suite, lint, and formatting.
4. Validate the composition in the linked portfolio on mobile and desktop, with
   tablet as an additional breakpoint, under light, dark, and corporate themes.
5. Capture build output before performance changes and optimize only an observed
   bottleneck.

## Risks

- Existing consumers may rely on current heading dimensions; preserve the
  current default and make the larger landing-page size explicit.
- Tailwind classes must be statically discoverable by the library build.
- Center alignment and actions can become cramped on narrow screens; allow
  wrapping and test long bilingual copy.

## Rollback

Revert the additive `SectionHeading` options and responsive Container mapping;
existing public defaults and markup remain compatible.
