# 💚 Salud Técnica — starter-react-ui

> Evaluación por dimensiones con métricas objetivas recogidas durante la
> auditoría (23/10/2026).

---

## 1. Panel de salud

| #   | Dimensión                      | Nota   | Tendencia     | Riesgo      |
| --- | ------------------------------ | ------ | ------------- | ----------- |
| 1   | Arquitectura y organización    | 7.5/10 | → Estable     | Medio       |
| 2   | Calidad de código              | 8.5/10 | → Estable     | Bajo        |
| 3   | Tipado y seguridad de tipos    | 9/10   | → Estable     | Bajo        |
| 4   | Empaquetado y contrato público | 4/10   | ↓ Degradando  | **Crítico** |
| 5   | Testing                        | 0/10   | → Sin cambios | **Crítico** |
| 6   | Seguridad                      | 8/10   | → Estable     | Bajo        |
| 7   | Rendimiento del build          | 7/10   | → Estable     | Bajo        |
| 8   | CI/CD y automatización         | 7/10   | → Estable     | Medio       |
| 9   | Documentación                  | 7/10   | → Estable     | Medio       |
| 10  | DX (experiencia de desarrollo) | 6/10   | → Estable     | Medio       |

**Índice global de salud: 6.3/10** — Base de código sana con dos heridas
abiertas críticas (empaquetado y testing).

---

## 2. Detalle por dimensión

### 2.1 Arquitectura y organización — 7.5/10

**Positivo:**

- 4 capas con responsabilidad clara: `domain` (tipos puros), `aplicacion` (casos
  de uso/estado), `infraestructura` (I/O), `presentation` (UI).
- Estructura interna de features consistente:
  `components/ hooks/ types/ utils/ constants/` en ambas moléculas.
- Barrels jerárquicos limpios (`index.ts` en cada nivel).
- Aliases de módulo coherentes entre `tsconfig.app.json` y `vite.config.ts`
  (excepto `@styles`).

**Negativo:**

- Dependencia invertida `infraestructura → aplicacion` (H-03).
- Tipos duplicados entre `domain` y `aplicacion` (H-04).
- Código muerto que confunde la topología real (H-06, H-08).

### 2.2 Calidad de código — 8.5/10

**Positivo:**

- Funciones pequeñas y con un solo propósito (promedio ~25 LOC).
- Manejo defensivo uniforme: `getLocalStorage()`/`getCryptoApi()` con try/catch,
  `undefined` en lugar de excepciones en fallos recuperables.
- Inmutabilidad: `readonly` en colecciones e interfaces, sin mutación de
  parámetros.
- `Object.hasOwn`, `Object.freeze`, `String.raw` — APIs modernas bien aplicadas.

**Negativo:**

- Duplicación de `ThemeSelectorTriggerProps` (H-05).
- JSDoc bilingüe inconsistente (H-07).
- Comentario vacío `catch { // Preference persistence... }` — patrón aceptable
  pero sin logging opcional.

### 2.3 Tipado y seguridad de tipos — 9/10

**Positivo:**

- `strict: true` + `noUncheckedIndexedAccess` implícito vía reglas ESLint.
- `@typescript-eslint/no-explicit-any: error` — **cero `any` en todo el
  código**.
- `consistent-type-assertions: never` — cero casts forzados.
- `explicit-function-return-type` + `explicit-module-boundary-types` — API 100%
  anotada.
- Type guards bien construidos (`isCustomThemeDefinition`,
  `hasExpectedEncryptedParts`).
- Genéricos con `readonly` y tuplas tipadas (`CSS_THEME_TOKEN_ENTRIES`).

**Negativo:**

- `(string & {})` en `ThemeName` es un truco idiomático pero reduce el
  autocompletado a union + string libre (aceptable, documentar).

### 2.4 Empaquetado y contrato público — 4/10

**Positivo:**

- Dual ESM/CJS con `exports` condicionales correctos.
- `peerDependencies` con rango amplio (`^18.2.0 || ^19.0.0`).
- `react`, `react-dom`, `react/jsx-runtime` externalizados.
- Sourcemaps habilitados.

**Negativo (crítico):**

- **`dist/index.d.ts` no existe** — `types` apunta a un archivo inexistente
  (H-01). La librería es inutilizable desde TypeScript.
- `public/` se copia al dist (favicon/icons inútiles para consumidores).
- Sin `sideEffects` → tree-shaking comprometido por el import de CSS (H-11).
- Sin `engines` ni `exports["./package.json"]` (H-12).
- `cssFileName: "style"` correcto, pero el CSS de 82 kB incluye los 32 temas de
  DaisyUI siempre.

### 2.5 Testing — 0/10

- Sin runner configurado (no `vitest`, no `jest`).
- Sin un solo archivo `*.test.ts` / `*.spec.ts` en 80 archivos.
- CI ejecuta `npm test --if-present` → **pasa siempre sin probar nada** (falsa
  sensación de cobertura).
- Código altamente testeble desperdiciado: funciones puras de traducción,
  cifrado, resolución de temas.

### 2.6 Seguridad — 8/10

**Positivo:**

- `npm audit`: 0 vulnerabilidades en todas las severidades.
- AES-GCM con IV aleatorio de 12 bytes por cifrado, derivación de clave SHA-256,
  validación estricta de payload (longitud de IV, número de segmentos).
- Clave de cifrado la proporciona el consumidor (no hardcodeada).
- Workflows con `permissions:` mínimos por job.

**Negativo:**

- Cifrar el nombre del tema/idioma en localStorage es **seguridad teatral**: no
  protege nada sensible y complica el debugging (el consumidor debe gestionar
  una clave). Recomendación: simplificar a texto plano o documentar el porqué
  (RFC-003).
- `npm audit` en CI no falla el build por vulnerabilidades < high (solo warning)
  en `security.yml`, aunque `auto-pr.yml` sí usa `--audit-level=high`.

### 2.7 Rendimiento del build — 7/10

- Build completo: ~6.8 s (81 módulos) — excelente para el tamaño.
- `unplugin-dts` consume el 67% del tiempo (4.5 s) — aceptable.
- CSS de salida: 82 kB (14.8 kB gzip) — razonable con 32 temas; podría reducirse
  con temas opcionales.

### 2.8 CI/CD y automatización — 7/10

**Positivo:**

- 7 workflows con responsabilidades separadas, `concurrency` y `permissions`
  mínimos.
- Release semver automático basado en conventional commits con detección de
  breaking changes.
- Commitlint en commit-msg y en CI.
- Auto-PR con metadata de commits/archivos.

**Negativo:**

- El paso "Run tests" es un no-op silencioso (H-02).
- Sin publicación a registro npm en `release.yml` (solo tag + GitHub Release).
- Versiones de actions mezcladas (`checkout@v4` vs `@v6`, `setup-node@v4` vs
  `@v7`).

### 2.9 Documentación — 7/10

**Positivo:**

- README exhaustivo (instalación, scripts, temas, i18n, estructura,
  contribución).
- JSDoc obligatorio en API pública con
  `@description/@param/@returns/@throws/@author/@version`.

**Negativo:**

- Sin ADRs ni documento de arquitectura con reglas de dependencia (H-14).
- JSDoc sin acentos por regla de lint — español degradado (H-07).
- Sin CHANGELOG.md (el release automático usa notas de GitHub, aceptable pero
  mejorable).

### 2.10 DX — 6/10

**Positivo:**

- Husky con 6 hooks, commitlint, prettier+eslint integrados.
- Scripts npm claros y compuestos (`build` = lint + format + build + pack).

**Negativo:**

- Pre-commit lintea el repo completo (sin lint-staged) (H-13).
- Sin tests locales rápidos (`vitest` watch) — inexistente.
- `post-checkout`/`post-merge` ejecutan `npm run lint` completo — fricción en
  cada checkout.

---

## 3. Métricas cuantitativas

| Métrica                                | Valor                     | Benchmark                   |
| -------------------------------------- | ------------------------- | --------------------------- |
| Archivos fuente                        | 80                        | —                           |
| Líneas de código                       | 3.254                     | —                           |
| `any` explícitos                       | 0                         | 0 es el objetivo ✅         |
| Tests                                  | 0                         | ≥ 60% cobertura objetivo ❌ |
| Vulnerabilidades npm                   | 0                         | 0 ✅                        |
| Complejidad ciclomática máx. permitida | 8                         | 10 típico — más estricto ✅ |
| Líneas máx. por función                | 100                       | 50-100 típico ✅            |
| Tiempo de build                        | 6.8 s                     | < 30 s ✅                   |
| Tamaño bundle ESM                      | 22 kB (6.9 kB gzip)       | — ✅                        |
| Tamaño CSS                             | 82 kB (14.9 kB gzip)      | — ⚠️                        |
| Workflows CI                           | 7                         | — ✅                        |
| Deuda técnica abierta                  | 14 hallazgos (2 críticos) | — ❌                        |
