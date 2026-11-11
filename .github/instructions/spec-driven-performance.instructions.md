---
description:
  "Use when: writing UI kit specs, plans, tasks, component performance work, or
  responsive and theme QA in satoshi-rc-ui."
name: "Spec-Driven UI Kit and Performance"
applyTo: ".github/specs/**/*.md"
---

# Spec-Driven UI Kit and Performance

- Read the related spec, plan, tasks, repository instructions, component code,
  and existing tests before editing.
- Define observable acceptance criteria and an ordered plan before a public API
  or visual behavior change. Keep scope and dependencies explicit in tasks.
- Implement the smallest complete change. Keep generic UI reusable and
  brand-neutral; components inherit the consumer font and use DaisyUI semantic
  theme tokens.
- Validate the exact behavior in tests and production build. Do not mark tasks
  complete without command or browser evidence.
- For performance work, measure a baseline and identify a real bottleneck before
  optimizing. Prefer removing unnecessary work and loading only required assets;
  avoid speculative memoization and dependencies.
- QA both mobile and desktop at minimum: use 320/390 CSS pixels for mobile,
  1024/1440 for desktop, and 768 for tablet. Check overflow, text wrapping,
  control reachability, keyboard behavior, and representative consumer flows.
- When validating the Satoshi portfolio consumer, exercise all three configured
  themes: light, dark, and corporate. Verify applied surfaces and readable
  contrast, not only selector labels.
- Keep Spanish and English labels equivalent when components own localized
  messages. Verify consumer catalogs before removing any key that may be used
  dynamically or by the shared library.
