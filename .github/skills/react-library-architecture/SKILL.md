---
name: react-library-architecture
description:
  "Use when: creating or modifying components, hooks, providers, services,
  storage, types, or tests in the satoshi-rc-ui React library, adding aliases,
  or deciding where a new file belongs under projects/satoshi-ui."
---

# React Library Architecture

The React library lives in `projects/satoshi-ui` with exactly two functional
roots (`components`, `libs`) plus a centralized `test` folder. The official
aliases are `@components`, `@libs` and `@test`; no layer aliases exist.

## Official tree

```text
projects/satoshi-ui/
├── src/
│   ├── index.ts            (public API: exports ./components and ./libs)
│   ├── components/         (UI React)
│   │   ├── atoms/          (<name>/components + types + constants + utils + index.ts)
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── index.ts        (re-exports atoms, molecules, organisms)
│   ├── libs/               (cross-cutting, no UI JSX)
│   │   ├── constants/      contexts/    enums/     hooks/
│   │   ├── interface/      providers/   services/  storage/
│   │   ├── types/          utils/       styles/    (Tailwind + DaisyUI CSS)
│   │   └── index.ts        (public libs barrel, one export per folder)
│   └── assets/
├── test/                   (ALL unit tests live here; none inside src)
│   ├── components/         (mirrors src/components)
│   ├── libs/               (mirrors src/libs)
│   ├── mocks/  fixtures/  utils/
│   └── setup/              (setup.ts: global Vitest setup)
├── .storybook/
├── tsconfig.json           (references: app + test + node)
├── tsconfig.app.json       (src; declares all aliases)
├── tsconfig.test.json      (test; extends app so the IDE resolves aliases)
├── vite.config.ts
└── README.md
```

## Rules

1. **Only `components` and `libs`**: never create `domain`, `application`,
   `applications`, `presentation` or `infrastructure` folders, barrels or
   aliases.
2. **Dependency direction**: `components -> libs`; `libs` never imports from
   `components`. Inside `libs`, modules import each other with relative paths
   (`../types`, `../interface`) to avoid barrel cycles; those single-level
   relative imports are allowed because they stay inside the same module.
3. **Barrels everywhere**: every component folder and every libs folder has an
   `index.ts`. The public API is only `src/index.ts`
   (`export * from "./components"; export * from "./libs";`).
4. **Aliases** (declared in `tsconfig.app.json`, `vite.config.ts`,
   `vitest.config.ts` and `.storybook/main.ts` — keep the four in sync):
   - `@components` and `@components/*` -> `src/components`
   - `@libs` and `@libs/*` -> `src/libs`
   - `@test/*` -> `test`
   - `@assets/*` and `@/*` -> `src`
5. **Cross-module imports use aliases**: `components` imports `libs` with
   `@libs`; a component importing another component family uses `@components`.
   Inside `libs`, modules import each other with `@libs/<module>` (e.g.
   `@libs/contexts`, `@libs/interface`, `@libs/utils`) — never with `../` paths
   between libs modules. Relative imports are only allowed inside the same
   module folder (e.g. `./x` or `../types` within one component folder;
   `./theme-manifest.interface` within `libs/interface`).
6. **Tests centralized**: every `*.test.ts(x)` lives in
   `projects/satoshi-ui/test` mirroring the source layout
   (`test/components/...`, `test/libs/...`). Never next to the source, never
   inside `src`, never in `__tests__` folders. Import the code under test and
   its types from the single `@libs` / `@components` barrel; testing resources
   (mocks, fixtures, utils) use `@test/*`. `tsconfig.test.json` extends
   `tsconfig.app.json` and includes `test/` so TypeScript and the IDE resolve
   the aliases there; it is referenced from the root `tsconfig.json`.
7. **One import per alias**: values and `type` members go together in a single
   import statement per alias (`import { X, type Y } from "@libs"`). Never split
   the same alias into two imports, and never import the same module through two
   different paths (e.g. `@libs` and `@libs/interface` in one file): pick the
   barrel `@libs` when the file needs several modules, or the specific
   `@libs/<module>` when it needs only one.
8. **Styles**: only `src/libs/styles/index.css` (Tailwind 4 + DaisyUI). Its
   `@source` directives must cover the library and `stories/`.
9. **TypeScript strict, no `any`**, explicit return types on exported functions,
   JSDoc in Spanish without special characters.
10. **Validation before closing a task**: `npm test`, `npm run lint`,
    `npm run format:check`, `npm run build:lib`, and `npm run build:storybook`
    for visual changes.
