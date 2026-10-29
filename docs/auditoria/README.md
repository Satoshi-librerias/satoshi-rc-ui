# 📋 Informe de Auditoría de Arquitectura — starter-react-ui

> **Fecha:** 23 de octubre de 2026 · **Alcance:** auditoría integral de
> arquitectura de la librería `@steveencues/starter-react-ui` **Método:**
> análisis estático de los 80 archivos fuente (3.254 LOC), ejecución de
> lint/format/build/audit, y revisión de configuración, CI/CD y contratos
> públicos.

---

## 1. Resumen ejecutivo

`starter-react-ui` es una **librería de componentes React** (selectores de tema
e idioma para DaisyUI/Tailwind v4) con una **arquitectura en capas de
inspiración DDD** (`domain → aplicacion → infraestructura → presentation`). El
código fuente es de **calidad notablemente alta**: tipado estricto sin `any`,
ESLint con reglas de complejidad y documentación obligatoria, y una separación
de responsabilidades consistente dentro de cada módulo.

Sin embargo, la auditoría detectó **un defecto crítico de empaquetado** (el
contrato de tipos publicado está roto), **violaciones de la propia arquitectura
en capas** (dependencias invertidas entre `aplicacion` e `infraestructura`),
**duplicación de tipos entre capas**, **código muerto interno** y **ausencia
total de pruebas automatizadas**.

### Veredicto global

| Dimensión                      | Nota       | Comentario                                                                            |
| ------------------------------ | ---------- | ------------------------------------------------------------------------------------- |
| Arquitectura y organización    | **7.5/10** | Capas bien definidas y consistentes, pero con dependencias cruzadas que las violan    |
| Calidad de código              | **8.5/10** | Tipado estricto, JSDoc obligatorio, límites de complejidad; duplicación puntual       |
| Empaquetado y contrato público | **4/10**   | `dist/index.d.ts` no existe; consumidores no pueden usar la librería con TS           |
| Testing                        | **0/10**   | Cero tests; CI ejecuta `npm test --if-present` (no-op silencioso)                     |
| Seguridad                      | **8/10**   | AES-GCM correcto, 0 vulnerabilidades npm; cifrado de preferencias es over-engineering |
| CI/CD y automatización         | **7/10**   | 7 workflows maduros; sin tests reales, sin lint-staged                                |
| Documentación                  | **7/10**   | README exhaustivo; sin ADRs ni docs de arquitectura                                   |

**Nota global ponderada: 6.3/10** — Excelente base de código lastrada por un
empaquetado roto y cero red de seguridad de tests.

---

## 2. Hallazgos principales

### 🔴 Críticos (bloquean el uso de la librería)

1. **[H-01] Contrato de tipos roto en el paquete publicado** — `package.json`
   declara `types: ./dist/index.d.ts` y `exports["."].types`, pero el build
   genera las declaraciones en `dist/libs/index.d.ts` (el entry real es
   `src/index.ts` → `export * from "./libs"`). TypeScript no resuelve los tipos
   para ningún consumidor. Además `dist/` incluye `favicon.svg` e `icons.svg` de
   `public/` (ruido innecesario en el tarball).
2. **[H-02] Cero pruebas automatizadas** — No existe `vitest`/`jest`, ni un solo
   archivo `*.test.ts`. El workflow CI usa `npm test --if-present`, que se salta
   silenciosamente. La lógica crítica (cifrado AES-GCM, resolución de idiomas,
   providers) no tiene red de seguridad.

### 🟠 Altos

3. **[H-03] Violación de dependencias entre capas** —
   `infraestructura/storage/encrypted-preference.storage.ts` importa desde
   `@aplicacion` (crypto, storage, encoding). En una arquitectura en capas,
   `aplicacion` debe depender de `infraestructura`, nunca al revés. Además
   `aplicacion/utils/theme.utils.ts` accede a `window.localStorage`
   directamente, duplicando la responsabilidad de `infraestructura/storage`.
4. **[H-04] Duplicación de tipos dominio↔aplicación** — `translate.provider.tsx`
   redeclara `LanguagePreferenceConfiguration`, `LanguagePreferenceState`,
   `LanguagePreferenceResult` y `SetLanguagePreferenceState` que ya existen en
   `domain/interface/translation.interface.ts` y
   `domain/types/translation.types.ts`. Dos fuentes de verdad divergentes.
5. **[H-05] Duplicación interna en presentation** — `ThemeSelectorTriggerProps`
   está declarado dos veces en `theme-selector.types.ts` (idéntico). Riesgo de
   divergencia en futuras ediciones.

### 🟡 Medios

6. **[H-06] Código muerto interno** — `theme-preference.storage.ts` (load/save
   cifrado del tema) no es usado por nadie; `ThemeProvider` persiste en texto
   plano con clave hardcodeada `"app_theme"` en
   `aplicacion/utils/theme.utils.ts`. `THEME_FONT_WEIGHT` solo se referencia a
   sí mismo. `customThemeService.isRegistered/unregister` sin llamadores.
7. **[H-07] Inconsistencia de idioma en documentación** — JSDoc mezcla español
   (mayoría) e inglés (encryption, translation.provider, font-weight). La regla
   `jsdoc/match-description` prohíbe acentos, lo que degrada la legibilidad del
   español escrito sin tildes ("coleccion", "seleccion").
8. **[H-08] Persistencia de tema sin cifrado y con clave mágica** —
   `"app_theme"` hardcodeado en `theme.utils.ts`; la infraestructura de
   preferencias cifradas existe pero no se usa para el tema.
9. **[H-09] Typo en nombre de archivo** — `encrypted-preference.constanst.ts`
   (debería ser `constants`).
10. **[H-10] Alias `@styles/*` muerto** — Declarado en `tsconfig.app.json` pero
    no existe en `vite.config.ts` ni se usa en el código.

### ⚪ Bajos

11. **[H-11] `sideEffects` ausente en package.json** — `src/index.ts` importa
    CSS global; sin el campo, los bundlers de consumidores no pueden
    tree-shakear con seguridad.
12. **[H-12] Sin `engines` ni `exports["./package.json"]`** — metadatos de
    paquete incompletos.
13. **[H-13] Sin lint-staged** — pre-commit lintea todo el repo (lento en repos
    grandes).
14. **[H-14] README sin sección de arquitectura** — la estructura de carpetas
    está documentada pero no las reglas de dependencia entre capas.

---

## 3. Contenido del informe

| Documento                                          | Descripción                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| [estado.md](./estado.md)                           | Estado actual verificado: qué funciona, qué falla, evidencia de ejecución |
| [salud.md](./salud.md)                             | Salud técnica por dimensión con métricas objetivas                        |
| [rfcs/](./rfcs/)                                   | RFCs de diseño para las decisiones arquitectónicas propuestas             |
| [backlog.md](./backlog.md)                         | Backlog priorizado (P0–P3) con esfuerzo estimado                          |
| [plan-implementacion.md](./plan-implementacion.md) | Plan de implementación por fases que se ejecutará                         |

---

## 4. Fortalezas a preservar

- **Tipado estricto real**: `strict: true`, `no-explicit-any`,
  `consistent-type-imports`, `switch-exhaustiveness-check`,
  `no-floating-promises`.
- **Límites de complejidad automatizados**: max 8 complejidad ciclomática, 100
  líneas por función, 500 por archivo, 4 parámetros.
- **Barrels consistentes** con `export *` y re-exportación jerárquica limpia.
- **Manejo defensivo de APIs del navegador** (`getLocalStorage`, `getCryptoApi`
  con try/catch) → SSR-safe.
- **CI/CD maduro**: commitlint, release automático semver, security audit con
  reporte, auto-PR.
- **Cifrado AES-GCM correcto**: IV aleatorio de 12 bytes, derivación SHA-256,
  validación de payload.

---

## 5. Metodología de la auditoría

1. **Fase 1 — Configuración base**: `package.json`, `vite.config.ts`,
   `tsconfig*.json`, `eslint.config.js`, `.prettierrc.json`.
2. **Fase 2 — Estructura**: árbol completo de `src/` (80 archivos, 3.254 LOC),
   barrels, aliases.
3. **Fase 3 — Código por capas**: domain (tipos/constantes), aplicacion
   (providers/hooks/services/utils), infraestructura (storage), presentation
   (molecules).
4. **Fase 4 — Validación objetiva**: `npm run lint` ✅, `npm run format:check`
   ✅, `npm run build:lib` ❌→✅ (tras instalar deps), `npm audit` ✅ 0 vulns,
   inspección de `dist/`.
5. **Fase 5 — CI/CD y hooks**: 7 workflows de GitHub Actions, husky, commitlint.
6. **Fase 6 — Informe**: estado, salud, RFCs, backlog y plan de implementación.
