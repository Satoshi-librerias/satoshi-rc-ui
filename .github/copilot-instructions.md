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
  sin diacriticos; la UI del producto sigue la convencion del proyecto.

## Gotchas del entorno

- **Shell:** bash obligatoria (Git Bash en Windows, Bash en Linux); nunca CMD,
  PowerShell, `.bat`/`.cmd` ni sintaxis exclusiva de esas shells. Prioriza `npm`
  sobre `npm.cmd`. **CRLF/LF:** respeta los finales de linea del repo. **curl:**
  JSON entre comillas simples o `--data @archivo.json`.

## Contexto de sesion (skill `session-context`)

No pierdas el contexto: al iniciar escribe en `PROGRESS.md` (o
`.ops/project/handoff.md`) objetivo, archivos tocados, hallazgos y siguiente
paso; actualizalo tras cada avance y al reanudar lee las notas, no reexplores.

## Reglas de trabajo

1. Lee antes de escribir; cambios minimos y completos, sin refactorizaciones
   colaterales ni TODOs.
2. Valida siempre: compila, prueba o ejecuta el camino minimo de tu cambio.
3. Si algo no funciona, prueba una alternativa antes de declararlo imposible.
4. Nunca ejecutes `git commit` ni `git push`: deja los cambios en el working
   tree para que el humano revise y confirme.

## Arquitectura y convenciones (projects/satoshi-ui)

La libreria React vive en `projects/satoshi-ui/src`: `components/` (UI:
atoms/molecules/organisms) y `libs/` (transversal sin JSX). Reglas completas,
arbol oficial, alias oficiales (`@components`, `@libs`, `@test`) y pruebas
centralizadas en la skill `react-library-architecture`; direccion
`components -> libs`.

- Tailwind CSS responsive obligatorio (`sm:`, `md:`, `lg:`), sin CSS inline.
- **DaisyUI es el motor de componentes:** usa sus clases y tokens semanticos
  (`btn`, `card`, `base-100`); crea de cero solo lo que DaisyUI no cubre (skill
  `daisyui-component-engine`).
- Componentes en `components/<nivel>/<nombre>/` exportados por su barril; logica
  compartida en `libs/<modulo>/`.
- Un solo import por alias: valores y tipos (`type`) juntos; sin mezclar `@libs`
  con `@libs/<modulo>` en el mismo archivo. Los modulos internos de `libs` se
  importan entre si con `@libs/<modulo>`, nunca con `../`.
- Pruebas unitarias centralizadas en `projects/satoshi-ui/test/` (`*.test.tsx`
  espejando `src/`); sin ellas no esta terminada. Importan desde `@libs` /
  `@components` y usan `@test/*` para recursos de testing.
- JSDoc en espanol sin caracteres especiales (`@description`, `@param`,
  `@returns`, `@version`, `@author`); lo valida ESLint (`jsdoc/*`).

## Validacion (comandos oficiales)

`npm test` (Vitest, jsdom), `npm run lint`, `npm run format:check`,
`npm run build:lib`, `npm run build` y `npm run build:storybook`.

## Commits

El agente nunca confirma: sin `git commit` ni `git push`; el humano revisa y
confirma. Si piden mensaje, proponlo en Conventional Commits (`feat:`, `fix:`,
`docs:`, `chore:`, `refactor:`, `test:`), ASCII sin diacriticos, sin secretos.

## Adopcion

Kit generico: copia este archivo a `.github/copilot-instructions.md`, las skills
a `.github/skills/` y los workflows a `.github/workflows/`.
