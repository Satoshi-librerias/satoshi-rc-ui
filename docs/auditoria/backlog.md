# 📌 Backlog priorizado — starter-react-ui

> Generado a partir de la auditoría del 23/10/2026. Los IDs H-xx referencian los
> hallazgos de [README.md](./README.md) y [estado.md](./estado.md).

---

## P0 — Crítico (bloquea el valor de la librería)

| ID    | Título                                                                  | Hallazgo   | RFC     | Esfuerzo      | Estado                               |
| ----- | ----------------------------------------------------------------------- | ---------- | ------- | ------------- | ------------------------------------ |
| BK-01 | Corregir emisión de `dist/index.d.ts` y limpiar el tarball              | H-01       | RFC-001 | S (2-4 h)     | ⬜ Pendiente (causa raíz verificada) |
| BK-02 | Añadir `sideEffects`, `engines`, `exports["./package.json"]`            | H-11, H-12 | RFC-001 | XS (< 1 h)    | ⬜ Pendiente                         |
| BK-03 | Eliminar duplicación de tipos `LanguagePreference*` (provider → domain) | H-04       | RFC-002 | S (1-2 h)     | ⬜ Pendiente                         |
| BK-04 | Eliminar `ThemeSelectorTriggerProps` duplicado                          | H-05       | —       | XS (< 30 min) | ⬜ Pendiente                         |
| BK-05 | Corregir typo `encrypted-preference.constanst.ts` → `constants`         | H-09       | —       | XS (< 15 min) | ⬜ Pendiente                         |

## P1 — Alto (integridad arquitectónica)

| ID    | Título                                                                                                             | Hallazgo   | RFC              | Esfuerzo      | Estado       |
| ----- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ---------------- | ------------- | ------------ |
| BK-06 | Mover primitivas de plataforma (crypto/storage/encoding) a `infraestructura`                                       | H-03       | RFC-002          | M (3-5 h)     | ⬜ Pendiente |
| BK-07 | Centralizar persistencia de tema en infraestructura (fuera de `theme.utils`)                                       | H-03, H-08 | RFC-002, RFC-003 | M (2-3 h)     | ⬜ Pendiente |
| BK-08 | Simplificar persistencia: texto plano, eliminar `languageEncryptionKey` del provider                               | H-06       | RFC-003          | M (2-4 h)     | ⬜ Pendiente |
| BK-09 | Extraer clave mágica `"app_theme"` a `domain/constants`                                                            | H-08       | RFC-003          | XS (< 30 min) | ⬜ Pendiente |
| BK-10 | Eliminar/decidir código muerto: `theme-preference.storage` cifrado, `THEME_FONT_WEIGHT`, `isRegistered/unregister` | H-06       | RFC-003          | S (1-2 h)     | ⬜ Pendiente |
| BK-11 | Eliminar alias muerto `@styles/*` de `tsconfig.app.json`                                                           | H-10       | —                | XS (< 15 min) | ⬜ Pendiente |

## P2 — Medio (red de seguridad y DX)

| ID    | Título                                                                 | Hallazgo | RFC     | Esfuerzo      | Estado       |
| ----- | ---------------------------------------------------------------------- | -------- | ------- | ------------- | ------------ |
| BK-12 | Configurar Vitest + Testing Library + jsdom                            | H-02     | RFC-004 | M (2-3 h)     | ⬜ Pendiente |
| BK-13 | Suite de tests de utils puros (translation, theme, filters)            | H-02     | RFC-004 | M (3-4 h)     | ⬜ Pendiente |
| BK-14 | Suite de tests de servicios (encryption, custom-theme)                 | H-02     | RFC-004 | M (2-3 h)     | ⬜ Pendiente |
| BK-15 | Suite de tests de hooks y providers (useTheme, useLanguage, providers) | H-02     | RFC-004 | M (3-4 h)     | ⬜ Pendiente |
| BK-16 | Suite de tests de moléculas (ThemeSelector, LanguageSelector)          | H-02     | RFC-004 | M (3-4 h)     | ⬜ Pendiente |
| BK-17 | Añadir `lint-staged` al pre-commit                                     | H-13     | —       | XS (< 1 h)    | ⬜ Pendiente |
| BK-18 | Añadir `npm test` al hook pre-push                                     | H-02     | RFC-004 | XS (< 15 min) | ⬜ Pendiente |
| BK-19 | Unificar versiones de GitHub Actions (checkout/setup-node)             | —        | —       | XS (< 1 h)    | ⬜ Pendiente |

## P3 — Bajo (pulido y documentación)

| ID    | Título                                                            | Hallazgo | RFC     | Esfuerzo      | Estado       |
| ----- | ----------------------------------------------------------------- | -------- | ------- | ------------- | ------------ |
| BK-20 | Unificar idioma del JSDoc (español) y revisar regla anti-acentos  | H-07     | —       | M (2-3 h)     | ⬜ Pendiente |
| BK-21 | Añadir sección "Arquitectura" al README con reglas de dependencia | H-14     | RFC-002 | S (1 h)       | ⬜ Pendiente |
| BK-22 | Documentar módulo de cifrado opcional en README                   | H-06     | RFC-003 | XS (< 30 min) | ⬜ Pendiente |
| BK-23 | Evaluar publicación automática a registro en `release.yml`        | —        | —       | S (1-2 h)     | ⬜ Pendiente |
| BK-24 | Reducir CSS: temas DaisyUI opcionales por build                   | —        | —       | M (3-4 h)     | ⬜ Pendiente |
| BK-25 | E2E con Playwright para selectores                                | —        | —       | L (1-2 d)     | ⬜ Pendiente |
| BK-26 | Añadir `CHANGELOG.md` generado                                    | —        | —       | S (1-2 h)     | ⬜ Pendiente |

---

## Resumen de esfuerzo

| Prioridad | Ítems | Esfuerzo total estimado |
| --------- | ----- | ----------------------- |
| P0        | 5     | ~1 día                  |
| P1        | 6     | ~2 días                 |
| P2        | 8     | ~2-3 días               |
| P3        | 7     | ~3-4 días (opcional)    |

**Leyenda de esfuerzo:** XS < 1 h · S 1-4 h · M ½-1 día · L 1-2 días

## Criterios de "hecho" (Definition of Done)

- `npm run lint` ✅ · `npm run format:check` ✅ · `npm test` ✅ ·
  `npm run build:lib` ✅
- Criterios de aceptación del RFC asociado verificados.
- Sin regresiones en la API pública salvo las breaking changes documentadas
  (RFC-003).
- Cambios verificados con `npm pack --dry-run` cuando afecten al empaquetado.
