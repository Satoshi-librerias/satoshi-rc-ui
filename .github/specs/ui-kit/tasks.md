# UI Kit Composition Tasks

Parent: [UI Kit Composition Specification](./spec.md)

- [x] Review existing Container and SectionHeading APIs before design changes.
- [x] Add responsive spacing rules to Container.
- [x] Add eyebrow, alignment, and visual-size options to SectionHeading.
- [x] Add component tests for composition order, options, and defaults.
- [x] Validate library lint, format, build, and targeted component tests.
- [x] Run the complete library suite and rerun its timed-out test in isolation.
- [x] Validate a consumer composition at mobile, tablet, desktop, light, and
      dark.
- [x] Document performance-first spec-driven workflow and mobile/desktop QA.
- [ ] Recheck the Satoshi consumer in light, dark, and corporate themes after
      future library visual changes.

Validation note: an earlier full run had one timeout in `HeaderComposition`; the
isolated file and a subsequent full run both passed. The latest complete library
run passed all 329 tests.
