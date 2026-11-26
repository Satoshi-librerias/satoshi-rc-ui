# Auditoría y corrección integral de aliases e importaciones – Satoshi UI React

## Objetivo

Realiza una revisión completa de los aliases de TypeScript, Vite, Vitest,
Storybook y demás configuraciones de la librería React ubicada en:

`projects/satoshi-ui`

La arquitectura oficial utiliza exclusivamente:

- `@components`
- `@libs`
- `@test`

Además, todas las importaciones internas de `libs` deben utilizar los aliases
correspondientes, eliminando las rutas relativas innecesarias.

## 1. Verificar que no existan aliases obsoletos

Inspecciona todas las configuraciones del proyecto y comprueba que no exista
ninguna referencia a aliases de capas de Clean Architecture. Si aparece alguna,
eliminala por completo.

Busca estas referencias en:

- `tsconfig.json`
- `tsconfig.*.json`
- `vite.config.ts`
- `vitest.config.ts`
- `jest.config.ts`
- `eslint.config.js`
- `.storybook`
- `package.json`
- Configuraciones de compilación.
- Scripts.
- Skill Instructions.
- Documentación.

No debe quedar ninguna referencia a estos aliases en la arquitectura React.

## 2. Establecer los aliases oficiales

Configura únicamente los aliases necesarios para la arquitectura actual.

Configuración de referencia (`tsconfig.app.json`, rutas relativas a la raiz del
repositorio):

```json
{
  "compilerOptions": {
    "paths": {
      "@components": ["./projects/satoshi-ui/src/components/index.ts"],
      "@components/*": ["./projects/satoshi-ui/src/components/*"],
      "@libs": ["./projects/satoshi-ui/src/libs/index.ts"],
      "@libs/*": ["./projects/satoshi-ui/src/libs/*"],
      "@test/*": ["./projects/satoshi-ui/test/*"],
      "@assets/*": ["./projects/satoshi-ui/src/assets/*"],
      "@/*": ["./projects/satoshi-ui/src/*"]
    }
  },
  "include": ["projects/satoshi-ui/src"]
}
```

Las pruebas se cubren con `tsconfig.test.json`, que extiende `tsconfig.app.json`
e incluye `projects/satoshi-ui/test`; debe estar referenciado desde el
`tsconfig.json` raiz para que TypeScript y el IDE resuelvan los alias en los
tests.

Adapta la configuración según la estructura real y asegúrate de que todos los
entornos resuelvan correctamente los aliases.

No dupliques configuraciones ni introduzcas aliases innecesarios.

## 3. Corregir importaciones internas de libs

Este punto es obligatorio.

Realiza una búsqueda recursiva de todos los archivos dentro de:

`projects/satoshi-ui/src/libs`

Identifica importaciones relativas que utilicen rutas como:

```typescript
import { something } from "../../utils";
import { something } from "../contexts";
import { something } from "../../types";
import { something } from "../../../components";
```

Evalúa cada importación y reemplázala por el alias correspondiente.

Ejemplos:

Incorrecto:

```typescript
import { useTheme } from "../../hooks/useTheme";
import { ThemeProvider } from "../contexts/ThemeContext";
import type { Theme } from "../../types/theme.types";
```

Correcto:

```typescript
import { useTheme } from "@libs/hooks/useTheme";
import { ThemeProvider } from "@libs/contexts/ThemeContext";
import type { Theme } from "@libs/types/theme.types";
```

Si una funcionalidad pertenece a `components`, utiliza `@components`.

Si pertenece a `libs`, utiliza `@libs`.

No utilices `@components` para importar funcionalidades transversales ni `@libs`
para importar componentes visuales.

### Regla general

Las importaciones entre módulos principales deben utilizar aliases. Esto incluye
los módulos internos de `libs` entre si: un archivo de `libs/providers` que
necesita `contexts` importa desde `@libs/contexts`, no desde `../contexts`.

No deben existir dependencias entre módulos resueltas mediante múltiples niveles
de `../`.

Los imports relativos únicamente podrán mantenerse cuando correspondan a
recursos internos del mismo módulo y exista una justificación técnica (por
ejemplo `./theme-manifest.interface` dentro de `libs/interface`, o `../types`
dentro de la carpeta de un componente).

## 4. Corregir importaciones de components

Inspecciona también:

`projects/satoshi-ui/src/components`

Aplica las mismas reglas:

- Dependencias de `libs` mediante `@libs`.
- Dependencias de otros componentes mediante `@components`.
- Evitar rutas relativas entre módulos principales.
- Mantener imports relativos únicamente cuando sean apropiados dentro del mismo
  módulo.

## 5. Revisar imports en tests

Todas las pruebas están centralizadas en:

`projects/satoshi-ui/test`

Verifica que utilicen los aliases correspondientes, con un solo import por alias
(valores y tipos `type` juntos):

```typescript
import { describe, expect, it } from "vitest";

import { Button, type ButtonProps } from "@components";
import { useTheme, type AppTheme } from "@libs";
```

Evita referencias relativas como:

```typescript
import { Button } from "../../../src/components/atoms/Button";
```

Evita también imports duplicados del mismo alias:

```typescript
// Incorrecto: dos imports de @libs
import { useTheme } from "@libs";
import { ThemeProvider } from "@libs";

// Correcto: un solo import de @libs
import { ThemeProvider, useTheme } from "@libs";
```

Evita también mezclar el barril y el modulo en el mismo archivo:

```typescript
// Incorrecto: @libs y @libs/interface en el mismo archivo
import { useTheme } from "@libs";
import type { ThemeContextValue } from "@libs/interface";

// Correcto: un solo import de @libs con los tipos dentro
import { useTheme, type ThemeContextValue } from "@libs";
```

La misma regla aplica dentro de `libs`: un modulo que necesita otro modulo de
`libs` usa `@libs/<modulo>` (por ejemplo `@libs/contexts` o `@libs/interface`),
nunca `../<modulo>`.

Para recursos propios del testing utiliza:

```typescript
import { mockTheme } from "@test/mocks/theme.mock";
```

Asegúrate de que Vitest o el framework existente resuelva correctamente estos
aliases y de que `tsconfig.test.json` incluya la carpeta `test/` para que
TypeScript y el IDE los resuelvan.

## 6. Sincronizar las configuraciones

Verifica que los aliases estén correctamente sincronizados entre:

- TypeScript (`tsconfig.app.json` para `src/`, `tsconfig.test.json` para
  `test/`, ambos referenciados desde el `tsconfig.json` raiz).
- Vite.
- Vitest.
- Storybook.
- ESLint, si utiliza resolución de módulos.
- Herramientas de compilación y desarrollo.

Evita definir los mismos aliases de manera contradictoria.

Si la configuración permite compartir una única definición, prioriza esa
solución.

## 7. Búsqueda global y comprobaciones

Realiza búsquedas globales para detectar:

1. Todos los aliases antiguos.
2. Todas las importaciones `../` entre módulos de `libs` (deben ser
   `@libs/<modulo>`).
3. Todas las importaciones `../../` dentro de `components`.
4. Todas las referencias a las capas eliminadas.
5. Imports que no puedan resolverse.
6. Imports circulares.
7. Aliases duplicados o incorrectos.
8. Imports que utilicen el alias equivocado.

No reemplaces automáticamente todas las rutas relativas sin analizar su destino.
Cada importación debe utilizar el alias correspondiente a su responsabilidad.

## 8. Actualizar Skill Instructions

Actualiza las skills e instrucciones del proyecto para establecer estas reglas
como obligatorias:

- La arquitectura React utiliza `components` y `libs`.
- Los aliases oficiales son `@components`, `@libs` y `@test`.
- No deben existir aliases de capas de Clean Architecture.
- Las dependencias entre módulos principales deben utilizar aliases.
- Los módulos internos de `libs` se importan entre si con `@libs/<modulo>`,
  nunca con `../`.
- Un solo import por alias: valores y tipos (`type`) juntos.
- Las importaciones internas de `libs` deben utilizar `@libs`.
- Las importaciones de componentes deben utilizar `@components`.
- Las pruebas deben utilizar `@test` cuando accedan a recursos de testing.
- No deben introducirse rutas relativas con múltiples niveles para conectar
  módulos principales.
- Toda nueva implementación debe respetar estas convenciones.

Elimina las instrucciones antiguas que contradigan estas reglas.

## 9. Validaciones obligatorias

Ejecuta:

- TypeScript.
- ESLint.
- Pruebas unitarias.
- Build de React.
- Build de Storybook.

Verifica también mediante búsquedas que:

- No existen aliases antiguos.
- No existen imports obsoletos.
- Los módulos de `libs` no utilizan rutas relativas para importar otros módulos
  principales.
- Los componentes utilizan los aliases correctos.
- Los tests están exclusivamente en `test`.
- Todos los aliases funcionan en los distintos entornos.

## 10. Resultado esperado

La librería debe tener una arquitectura coherente y todas sus importaciones
deben respetar la misma convención.

No basta con modificar `tsconfig.json`: debes corregir las importaciones reales
de todos los archivos y comprobar que las herramientas puedan resolverlas.

Trabaja directamente sobre el repositorio, ejecuta las validaciones y corrige
los errores encontrados.

Entrega un reporte con:

- Aliases eliminados.
- Aliases definitivos.
- Cantidad de imports corregidos.
- Archivos modificados.
- Imports relativos que se conservaron y su justificación.
- Configuraciones actualizadas.
- Skills actualizadas.
- Resultados de TypeScript, ESLint, tests y builds.
