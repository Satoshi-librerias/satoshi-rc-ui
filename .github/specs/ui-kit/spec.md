# UI Kit Composition Specification

Status: In progress

## Context

The library has reusable components, but consumers still assemble section
headings, spacing, and responsive alignment with unrelated utility classes. This
specification defines a small shared composition language rather than adding
another visual framework.

## Goals

- Make common page sections visually consistent through shared components and
  semantic theme tokens.
- Separate heading semantics from visual size and alignment.
- Make spacing and readable text widths predictable from mobile through desktop.
- Keep APIs composable and preserve existing usage through backward-compatible
  defaults.

## Requirements

### UIK-REQ-01: Responsive container rhythm

The `Container` padding scale uses consistent mobile-first horizontal insets and
increases them at tablet and desktop breakpoints. Width, gap, and padding
options remain explicit and typed.

### UIK-REQ-02: Reusable section heading

`SectionHeading` supports an optional eyebrow, title, optional subtitle and
action, independent semantic heading level, visual size, and start or centered
alignment. Long text must wrap without pushing the action outside the viewport.

### UIK-REQ-03: Theme consistency

Shared components use semantic DaisyUI tokens for text, surfaces, borders, and
accent states. Consumer brand colors and page-specific styles do not enter
shared component constants.

### UIK-REQ-04: Composition and compatibility

Consumers can compose a section using `Container`, `SectionHeading`, `Card`, and
existing controls without rebuilding common spacing or heading styles. Existing
`SectionHeading` usages keep their current default heading level and start
alignment.

### UIK-REQ-05: Accessibility and verification

Heading levels remain semantic and configurable. Tests cover responsive
composition props, text/action presence, and defaults. Library type-check,
tests, lint, formatting, and build pass.

### UIK-REQ-06: Consumer typography and performance

Shared components inherit the consumer's font family and do not load a
brand-specific font. Performance changes use a measured baseline and target an
observed cost rather than speculative optimization.

### UIK-REQ-07: Responsive and theme QA

Visual QA covers mobile and desktop, with tablet as an additional breakpoint.
When using the Satoshi portfolio as a consumer, test light, dark, and corporate
themes and confirm actual rendered contrast and behavior.

## Acceptance criteria

- Existing section heading API remains source-compatible.
- Eyebrow, heading, subtitle, and action render in a stable order.
- Center alignment applies to both heading copy and action layout without
  horizontal overflow.
- Container spacing is consistent at mobile, tablet, and desktop breakpoints.
- Both light and dark DaisyUI themes retain readable semantic contrast.
- Components inherit configurable consumer typography.
- Mobile and desktop QA runs; consumer-specific theme coverage includes light,
  dark, and corporate for the Satoshi portfolio.

## Out of scope

- Replacing DaisyUI or introducing a second styling system.
- Applying Satoshi branding colors to generic library components.
- Migrating every consumer screen in one release.

## Related

- [Implementation plan](./plan.md)
- [Tasks](./tasks.md)
