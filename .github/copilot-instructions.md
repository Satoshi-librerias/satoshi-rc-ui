# Copilot: reglas del repositorio

## Proposito de estas instrucciones

Reglas universales de trabajo y quirks del entorno. Lo especifico del proyecto
(stack, comandos, convenciones) va en su rulebook (`AGENTS.md`).

## Documentacion de operaciones

Usa la skill `ops-lifecycle` para los documentos de `.ops/` (plantillas,
estados, trazabilidad). Si el repo no tiene `.ops/`, ejecuta su bootstrap antes
de la primera tarea de desarrollo.

## Idioma

- **Respuestas al usuario:** en el idioma de su ultimo mensaje.
- **Artefactos tecnicos** (codigo, comentarios, commits, logs, `.ops/`): ASCII
  sin diacriticos (el collate de la plataforma dana los no ASCII). La UI del
  producto sigue la convencion del proyecto.

## Gotchas del entorno

- **Shell:** bash obligatoria (Git Bash en Windows, Bash en Linux); nunca CMD,
  PowerShell, `.bat`/`.cmd` ni sintaxis exclusiva de esas shells; si falla un
  comando, resuelvelo en Bash. Prioriza `npm` sobre `npm.cmd`. **CRLF/LF:**
  respeta los finales de linea del repo. **curl:** JSON entre comillas simples o
  `--data @archivo.json`.

## Politica de sesion y comunicacion

Sesiones cortas y enfocadas; si la tarea no cabe, deja el contexto en
`PROGRESS.md` y `.ops/project/handoff.md`. Lee `.ops/` antes de actuar.
Respuestas breves con evidencia; nunca marques algo como verificado sin
ejecucion real.

## Reglas de trabajo

1. Lee antes de escribir; cambios minimos y completos, sin refactorizaciones
   colaterales ni TODOs.
2. Valida siempre: compila, prueba o ejecuta el camino minimo de tu cambio.
3. Si algo no funciona, prueba una alternativa antes de declararlo imposible.

## Arquitectura y convenciones (projects/satoshi-ui)

La libreria React vive en `projects/satoshi-ui/src`: `components/` (UI:
atoms/molecules/organisms) y `libs/` (transversal sin JSX). Reglas completas,
arbol oficial y gestion de alias en la skill `react-library-architecture`.
Resumen: alias oficiales `@components`, `@libs` y `@test` en
`tsconfig.app.json`, `vite.config.ts`, `vitest.config.ts` y `.storybook/main.ts`
(los cuatro); `tsconfig.test.json` extiende el app config e incluye `test/` para
que el IDE resuelva los alias en las pruebas; direccion `components -> libs`.

- Tailwind CSS responsive obligatorio (`sm:`, `md:`, `lg:`), sin CSS inline.
- Componentes en `components/<nivel>/<nombre>/` exportados por su barril; logica
  compartida en `libs/<modulo>/`.
- Un solo import por alias: valores y tipos (`type`) juntos en la misma
  importacion de `@libs` o `@components`; sin mezclar `@libs` con
  `@libs/<modulo>` en el mismo archivo.
- Los modulos internos de `libs` se importan entre si con `@libs/<modulo>` (por
  ejemplo `@libs/contexts`), nunca con `../`.
- Pruebas unitarias centralizadas en `projects/satoshi-ui/test/` (`*.test.tsx`
  espejando `src/`); sin ellas no esta terminada. Importan desde `@libs` /
  `@components` y usan `@test/*` para recursos de testing.
- JSDoc en espanol sin caracteres especiales (`@description`, `@param`,
  `@returns`, `@version`, `@author`); lo valida ESLint (`jsdoc/*`).

## Validacion (comandos oficiales)

`npm test` (Vitest, jsdom), `npm run lint`, `npm run format:check`,
`npm run build:lib`, `npm run build` y `npm run build:storybook`.

## Commits

Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`).
Un commit = un cambio coherente; sin artefactos generados ni secretos. Mensajes
en ASCII sin diacriticos.

## Adopcion

Kit generico: copia este archivo a `.github/copilot-instructions.md`, las skills
a `.github/skills/` y los workflows a `.github/workflows/`.
