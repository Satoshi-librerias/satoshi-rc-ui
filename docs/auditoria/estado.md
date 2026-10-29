# 🩺 Estado del Proyecto — starter-react-ui

> Snapshot verificado el **23/10/2026** sobre el commit `2134bff` (rama por
> defecto).

---

## 1. Identidad del proyecto

| Campo    | Valor                                                                   |
| -------- | ----------------------------------------------------------------------- |
| Nombre   | `@steveencues/starter-react-ui`                                         |
| Versión  | 1.0.0                                                                   |
| Tipo     | Librería de componentes React (privada)                                 |
| Stack    | React 19.3 · TypeScript 6.0 · Vite 8.3 · Tailwind CSS 4.3 · DaisyUI 5.7 |
| Licencia | Propietaria (todos los derechos reservados)                             |
| Tamaño   | 80 archivos TS/TSX · 3.254 líneas de código                             |

**Funcionalidad entregada:**

- `ThemeProvider` + `useTheme`: gestión de temas DaisyUI (32 integrados +
  registro de temas personalizados en runtime), persistencia y aplicación vía
  `data-theme`.
- `TranslateProvider` + `useLanguage`: i18n con catálogos anidados,
  interpolación `{{var}}`, idioma de respaldo y persistencia cifrada.
- `ThemeSelector` / `LanguageSelector`: moléculas de presentación con búsqueda,
  filtrado y accesibilidad básica (roles listbox/option, Escape, click-fuera).
- `customThemeService`: registro de temas personalizados inyectando variables
  CSS de DaisyUI.

---

## 2. Estado de las validaciones (evidencia de ejecución)

| Validación        | Comando                         | Resultado                       | Evidencia                                            |
| ----------------- | ------------------------------- | ------------------------------- | ---------------------------------------------------- |
| Lint              | `npm run lint`                  | ✅ PASS (0 errores, 0 warnings) | ESLint 10 con type-checked rules                     |
| Formato           | `npm run format:check`          | ✅ PASS                         | Prettier 3.9                                         |
| Type-check        | `tsc -b` (parte de `build:lib`) | ✅ PASS                         | strict + 15 reglas extra de tipado                   |
| Build de librería | `npm run build:lib`             | ⚠️ PASS con defectos            | Compila, pero ver §3                                 |
| Auditoría npm     | `npm audit`                     | ✅ PASS                         | 0 vulnerabilidades (info/low/moderate/high/critical) |
| Tests             | —                               | ❌ NO EXISTE                    | Sin runner ni un solo archivo de test                |
| Empaquetado       | `npm pack --dry-run`            | ⚠️ Parcial                      | Ver H-01                                             |

> **Nota:** la primera ejecución de `build:lib` falló porque `daisyui` no estaba
> instalado en `node_modules` (dependencia declarada pero ausente del árbol
> instalado). Tras `npm install` el build pasa. Esto sugiere que el entorno
> local estaba desincronizado con `package-lock.json`.

---

## 3. Estado del artefacto publicado (`dist/`)

Contenido real generado por `vite build`:

```
dist/
├── favicon.svg          ← ❌ ruido (viene de public/)
├── icons.svg            ← ❌ ruido (viene de public/)
├── index.js             ← ✅ bundle ESM (22 kB)
├── index.cjs            ← ✅ bundle CJS (22 kB)
├── index.js.map / index.cjs.map
├── style.css            ← ✅ CSS de Tailwind+DaisyUI (82 kB)
└── libs/                ← ❌ declaraciones .d.ts en la ruta equivocada
    ├── index.d.ts       ← el "index.d.ts" real está aquí, no en dist/
    ├── aplicacion/…d.ts
    ├── domain/…d.ts
    ├── infraestructura/…d.ts
    └── presentation/…d.ts
```

**Consecuencia:** `package.json` apunta `types: "./dist/index.d.ts"` → **el
archivo no existe**. Cualquier consumidor TypeScript recibe
`Could not find a declaration file for module '@steveencues/starter-react-ui'`.

---

## 4. Estado de la arquitectura en capas

```
┌─────────────────────────────────────────────┐
│ presentation (molecules)                    │  ✅ solo usa @aplicacion y @domain
│   theme-selector, language-selector         │
├─────────────────────────────────────────────┤
│ aplicacion (providers, hooks, services)     │  ⚠️ accede a window.localStorage
│   theme-provider, translate-provider,       │     directamente (theme.utils) y
│   encryption, utils                         │     exporta primitivas que usa infra
├─────────────────────────────────────────────┤
│ infraestructura (storage)                   │  ❌ importa desde @aplicacion
│   encrypted-preference, theme/language      │     (dependencia invertida)
├─────────────────────────────────────────────┤
│ domain (types, interfaces, constants)       │  ✅ puro, sin dependencias
└─────────────────────────────────────────────┘
```

**Regla violada:** `infraestructura → aplicacion` (H-03). El resto de
dependencias respetan el orden correcto.

---

## 5. Estado de CI/CD

| Workflow          | Propósito                                          | Estado                              |
| ----------------- | -------------------------------------------------- | ----------------------------------- |
| `deploy.yml` (CI) | format + lint + test + build en PR/push            | ⚠️ `npm test --if-present` es no-op |
| `lint.yml`        | lint + format en main/develop                      | ✅                                  |
| `pr-lint.yml`     | lint en PRs                                        | ✅                                  |
| `auto-pr.yml`     | commitlint + lint + audit + auto-descripción de PR | ✅                                  |
| `commitlint.yml`  | validación de mensajes                             | ✅                                  |
| `security.yml`    | npm audit + reporte artefacto                      | ✅                                  |
| `release.yml`     | versionado semver automático + GitHub Release      | ✅ (no publica a registro)          |

**Husky:** pre-commit (lint+format), pre-push (lint), commit-msg (commitlint),
post-checkout/commit/merge. Sin lint-staged: cada commit lintea el repo
completo.

---

## 6. Deuda técnica detectada (resumen)

| ID   | Severidad  | Resumen                                                                                                |
| ---- | ---------- | ------------------------------------------------------------------------------------------------------ |
| H-01 | 🔴 Crítica | `dist/index.d.ts` no existe; contrato de tipos roto                                                    |
| H-02 | 🔴 Crítica | 0 tests en toda la librería                                                                            |
| H-03 | 🟠 Alta    | `infraestructura` importa de `@aplicacion` (capas invertidas)                                          |
| H-04 | 🟠 Alta    | Tipos de preferencia de idioma duplicados en provider y domain                                         |
| H-05 | 🟠 Alta    | `ThemeSelectorTriggerProps` duplicado en el mismo archivo                                              |
| H-06 | 🟡 Media   | `theme-preference.storage.ts` muerto; tema persiste en texto plano con clave `"app_theme"` hardcodeada |
| H-07 | 🟡 Media   | JSDoc mezcla español e inglés; regla anti-acentos degrada el español                                   |
| H-08 | 🟡 Media   | `THEME_FONT_WEIGHT` sin uso; `isRegistered/unregister` sin llamadores                                  |
| H-09 | 🟡 Media   | Typo `constanst` en nombre de archivo                                                                  |
| H-10 | 🟡 Media   | Alias `@styles/*` declarado pero inexistente en Vite                                                   |
| H-11 | ⚪ Baja    | Falta `sideEffects` (CSS global en entry)                                                              |
| H-12 | ⚪ Baja    | Faltan `engines` y `exports["./package.json"]`                                                         |
| H-13 | ⚪ Baja    | Sin lint-staged                                                                                        |
| H-14 | ⚪ Baja    | README sin reglas de dependencia entre capas                                                           |

Detalle completo y propuestas en [backlog.md](./backlog.md) y [rfcs/](./rfcs/).
