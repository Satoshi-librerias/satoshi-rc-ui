# RFC-004 — Introducción de testing (Vitest + Testing Library)

- **Estado:** Propuesto → Aceptado (ejecución en Fase 3 del plan)
- **Fecha:** 23/10/2026
- **Relacionado:** H-02, H-13 · [backlog.md](../backlog.md)

---

## 1. Contexto

La librería tiene **cero pruebas** en 80 archivos y 3.254 LOC. El workflow CI
ejecuta `npm test --if-present`, que se salta silenciosamente: el pipeline verde
no garantiza nada.

El código es especialmente testeble tras RFC-002/003:

- Funciones puras: `translation.utils` (resolución de idiomas, interpolación,
  fallback), `theme.utils` (resolución de tema inicial), `filter-themes`,
  `filter-languages`, `prioritize-selected-theme`.
- Servicios: `custom-theme.service` (DOM), `encryption.service` (crypto).
- Hooks/providers: `useTheme`, `useLanguage`, `ThemeProvider`,
  `TranslateProvider` (React).

## 2. Decisión

**Vitest 3 + jsdom + @testing-library/react** como stack de testing:

| Herramienta                 | Rol                                                                         |
| --------------------------- | --------------------------------------------------------------------------- |
| `vitest`                    | Runner (integración nativa con Vite 8, comparte `vite.config.ts` y aliases) |
| `jsdom`                     | Entorno DOM para componentes y `localStorage`                               |
| `@testing-library/react`    | Render y consultas accesibles para providers/moléculas                      |
| `@testing-library/jest-dom` | Matchers de DOM (`toBeInTheDocument`, …)                                    |

Configuración:

- `vitest.config.ts` propio que reutiliza los aliases (evita acoplar el build de
  librería al entorno de test).
- Script `test` (run) y `test:watch`; `test:coverage` con `@vitest/coverage-v8`.
- Tests co-ubicados: `*.test.ts` junto al archivo probado (convención del repo:
  archivos con sufijo de tipo).
- CI: `deploy.yml` ya ejecuta `npm test --if-present` → al existir el script, se
  activa sin tocar el workflow.
- Pre-push: añadir `npm test` (hoy solo lint).

### Suite inicial (cobertura de los caminos críticos)

| Área                               | Tests                                                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `translation.utils`                | resolución inicial/fallback, claves anidadas, interpolación con/sin params, catálogo vacío lanza error |
| `theme.utils`                      | resolución inicial con/sin guardado, aplicación de `data-theme`, persistencia                          |
| `encryption.service`               | roundtrip cifrar/descifrar, payload corrupto → undefined, IV inválido → undefined                      |
| `custom-theme.service`             | registro crea `<style>` con variables, re-registro actualiza, nombre inválido lanza                    |
| `useTheme`/`useLanguage`           | error fuera de provider, valores dentro, cambio de tema/idioma                                         |
| `ThemeSelector`/`LanguageSelector` | render, apertura/cierre, selección, filtrado                                                           |

## 3. Alternativas consideradas

| Alternativa                | Descartada porque                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------- |
| Jest                       | Más lento, requiere config de ESM/TS extra; Vitest comparte el ecosistema Vite del repo |
| Playwright (E2E)           | Valor alto pero coste alto; primero unit/integración (E2E queda en backlog P3)          |
| Sin tests + types como red | El type-check no cubre lógica de runtime (interpolación, fallbacks, eventos)            |

## 4. Consecuencias

- ✅ Red de seguridad para refactors (RFC-002/003 se ejecutan con tests detrás).
- ✅ CI deja de ser un no-op: `npm test` existe y corre en cada PR.
- ✅ Cobertura medible (`test:coverage`).
- ⚠️ +6 devDependencies (~instalación única).
- ⚠️ Tiempo de CI +~20-30 s (aceptable).

## 5. Criterio de aceptación

```bash
npm test                 # ✅ suite verde
npm run test:coverage    # informe generado
# CI: el paso "Run tests" ejecuta la suite (ya no --if-present no-op)
```
