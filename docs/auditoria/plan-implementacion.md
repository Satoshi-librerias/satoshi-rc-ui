# 🗺️ Plan de Implementación — starter-react-ui

> Plan derivado de la auditoría del 23/10/2026. **Estado: PROPUESTO — pendiente
> de aprobación para su ejecución.** No se ha modificado ningún archivo de
> código del proyecto. Ejecución por fases incrementales, cada una con
> verificación antes de avanzar. Referencias: [backlog.md](./backlog.md) ·
> [rfcs/](./rfcs/).

---

## Principios de ejecución

1. **Cada fase termina en verde**: lint + format + build (y tests cuando
   existan) antes de pasar a la siguiente.
2. **Cambios quirúrgicos**: no se reescribe código que funciona; solo se corrige
   lo hallado.
3. **API pública**: único breaking change permitido es el de RFC-003
   (`languageEncryptionKey`), documentado.
4. **Commits convencionales** por unidad coherente (el repo usa commitlint
   estricto).

---

## Fase 0 — Informe de auditoría ✅

- [x] Análisis de configuración base (`package.json`, `vite.config.ts`,
      `tsconfig*`, `eslint.config.js`).
- [x] Análisis de las 4 capas y 80 archivos fuente.
- [x] Validaciones objetivas (lint, format, build, audit, inspección de dist).
- [x] Carpeta `docs/auditoria/` con README, estado, salud, RFCs, backlog y este
      plan.
- [x] Causa raíz de H-01 verificada en ejecución (ver nota en Fase 1).

---

## Fase 1 — Empaquetado y contrato público (P0: BK-01, BK-02, BK-04, BK-05)

**Objetivo:** que un consumidor TypeScript pueda instalar y usar la librería.

> **Nota de la auditoría:** la causa raíz de H-01 se verificó en ejecución:
> `OUTPUT_DIRECTORY` en `vite.config.ts` termina en `/` (`new URL("./dist/")`),
> y el check `strictOutput` de `unplugin-dts` descarta por barra final los
> archivos de la raíz de `dist/` (el log muestra
> `Outside emitted: .../dist/index.d.ts`). La corrección es quitar la barra
> final. Durante la verificación también se confirmó que `publicDir` en Vite 8
> es opción de nivel superior (no dentro de `build`).

| Paso | Acción                                                                                                                                      | Archivo                   |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 1.1  | Corregir emisión de tipos: quitar la barra final de `OUTPUT_DIRECTORY` en `vite.config.ts` (`new URL("./dist", …)`) — causa raíz verificada | `vite.config.ts`          |
| 1.2  | `publicDir: false` **a nivel raíz** de la config (en Vite 8 no es opción de `build`)                                                        | `vite.config.ts`          |
| 1.3  | Añadir `sideEffects: ["*.css"]`, `engines`, `exports["./package.json"]`                                                                     | `package.json`            |
| 1.4  | Eliminar `ThemeSelectorTriggerProps` duplicado                                                                                              | `theme-selector.types.ts` |
| 1.5  | Renombrar `encrypted-preference.constanst.ts` → `encrypted-preference.constants.ts`                                                         | `domain/constants/`       |
| 1.6  | Verificación: build + `test -f dist/index.d.ts` + `npm pack --dry-run`                                                                      | —                         |

**Criterio de salida:** `dist/index.d.ts` existe, tarball sin favicon/icons,
lint/format/build en verde.

---

## Fase 2 — Integridad arquitectónica (P1: BK-03, BK-06 → BK-11)

**Objetivo:** restaurar el grafo de dependencias
`presentation → aplicacion → infraestructura → domain`.

| Paso | Acción                                                                                                                                                        | Detalle      |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 2.1  | Importar tipos desde `@domain` en `translate.provider.tsx` y borrar duplicados locales                                                                        | BK-03        |
| 2.2  | Crear `infraestructura/platform/` y mover `crypto-api`, `storage-api`, `text-encoding`, `base64`                                                              | BK-06        |
| 2.3  | Mover `encryption.service.ts` a `infraestructura/crypto/`                                                                                                     | BK-06        |
| 2.4  | `encrypted-preference.storage.ts` importa de rutas relativas internas                                                                                         | BK-06        |
| 2.5  | Crear `theme-local.storage.ts` (lectura/escritura síncrona) y extraer `THEME_STORAGE_KEY` a domain                                                            | BK-07, BK-09 |
| 2.6  | `theme.utils.ts` recibe el tema guardado como parámetro (función pura)                                                                                        | BK-07        |
| 2.7  | Simplificar persistencia (RFC-003): `readPreference`/`writePreference` síncronos; `TranslateProvider` sin `languageEncryptionKey` ni máquina de estados async | BK-08        |
| 2.8  | Decidir código muerto: eliminar `theme-preference.storage.ts` cifrado y `THEME_FONT_WEIGHT`; conservar `isRegistered/unregister` (API pública del servicio)   | BK-10        |
| 2.9  | Eliminar alias `@styles/*` de `tsconfig.app.json`                                                                                                             | BK-11        |
| 2.10 | Actualizar barrels y verificar con greps de aceptación de RFC-002                                                                                             | —            |

**Criterio de salida:** 0 imports de `@aplicacion` en `infraestructura`, 0
accesos directos a `window.localStorage` en `aplicacion`, lint/build en verde.

---

## Fase 3 — Red de seguridad: testing (P2: BK-12 → BK-16, BK-18)

**Objetivo:** suite automatizada que proteja los refactors y active el paso de
tests en CI.

| Paso | Acción                                                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------- |
| 3.1  | Instalar `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@vitest/coverage-v8`                   |
| 3.2  | Crear `vitest.config.ts` con aliases compartidos y entorno jsdom                                                           |
| 3.3  | Scripts `test`, `test:watch`, `test:coverage` en `package.json`                                                            |
| 3.4  | Tests de utils puros: `translation.utils`, `theme.utils`, `filter-themes`, `filter-languages`, `prioritize-selected-theme` |
| 3.5  | Tests de servicios: `encryption.service` (roundtrip/corrupto), `custom-theme.service` (DOM)                                |
| 3.6  | Tests de hooks/providers: `useTheme`, `useLanguage`, `ThemeProvider`, `TranslateProvider`                                  |
| 3.7  | Tests de moléculas: `ThemeSelector`, `LanguageSelector` (render, apertura, selección, filtrado)                            |
| 3.8  | Añadir `npm test` al hook `pre-push`                                                                                       |

**Criterio de salida:** `npm test` verde con cobertura de los caminos críticos;
CI ejecuta la suite.

---

## Fase 4 — DX y CI (P2: BK-17, BK-19)

| Paso | Acción                                                                                       |
| ---- | -------------------------------------------------------------------------------------------- |
| 4.1  | `lint-staged` en pre-commit (lint + format solo en archivos staged)                          |
| 4.2  | Unificar versiones de GitHub Actions (`checkout@v6`, `setup-node@v7` en todos los workflows) |
| 4.3  | Verificación completa de CI local: `npm run build` (lint + format + build + pack)            |

**Criterio de salida:** commits rápidos (solo archivos staged), workflows
consistentes.

---

## Fase 5 — Documentación y pulido (P3: BK-20 → BK-22)

| Paso | Acción                                                                             |
| ---- | ---------------------------------------------------------------------------------- |
| 5.1  | Sección "Arquitectura" en README con el diagrama de capas y reglas de dependencia  |
| 5.2  | Documentar el módulo de cifrado opcional y la migración de `languageEncryptionKey` |
| 5.3  | Unificar JSDoc a español (o inglés) — decisión con el mantenedor                   |

**Criterio de salida:** README refleja la arquitectura real y la API vigente.

---

## Fase 6 — Verificación final integral

```bash
npm run lint          # ✅ 0 errores
npm run format:check  # ✅
npm test              # ✅ suite verde
npm run build:lib     # ✅
test -f dist/index.d.ts
npm pack --dry-run    # ✅ tarball limpio con tipos
# Greps de aceptación RFC-002:
grep -rn "@aplicacion" src/libs/infraestructura/   # → 0
grep -rn "window.localStorage" src/libs/aplicacion/ # → 0
```

---

## Estado de ejecución

| Fase                               | Estado                     |
| ---------------------------------- | -------------------------- |
| 0 — Informe de auditoría           | ✅ Completada              |
| 1 — Empaquetado y contrato público | ⬜ Pendiente de aprobación |
| 2 — Integridad arquitectónica      | ⬜ Pendiente               |
| 3 — Testing                        | ⬜ Pendiente               |
| 4 — DX y CI                        | ⬜ Pendiente               |
| 5 — Documentación                  | ⬜ Pendiente               |
| 6 — Verificación final             | ⬜ Pendiente               |

---

## Orden de ejecución elegido y por qué

1. **Empaquetado primero (Fase 1)**: es el bloqueador de valor — sin tipos, la
   librería no sirve a su público.
2. **Arquitectura antes de tests (Fase 2 → 3)**: mover código y luego testearlo
   evita escribir tests que habría que reescribir. Los utils puros que produce
   la Fase 2 son los más fáciles de testear.
3. **Tests antes de DX (Fase 3 → 4)**: el pre-push con tests requiere que
   existan tests.
4. **Documentación al final (Fase 5)**: documenta el estado resultante, no el
   intermedio.

## Riesgos y mitigaciones

| Riesgo                                                                      | Mitigación                                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `unplugin-dts` no emita el barrel raíz donde se espera                      | Causa raíz ya verificada (barra final en `OUTPUT_DIRECTORY`); plan B documentado en RFC-001 |
| Breaking change de `languageEncryptionKey` afecte a consumidores existentes | Librería privada pre-1.x estable; cambio documentado en release notes                       |
| Regresiones al mover módulos entre capas                                    | Barrels re-exportan; verificación con greps + build + (Fase 3) tests                        |
| ESLint estricto rechace código movido                                       | El código ya cumple las reglas; solo cambian rutas de import                                |
