# Copilot: reglas del repositorio

## Proposito de estas instrucciones

Reglas universales de trabajo y quirks del entorno. Lo especifico del proyecto
(stack, comandos, convenciones) va en su rulebook (`AGENTS.md`); si algo falta,
se anade alli, no aqui.

## Documentacion de operaciones

Usa la skill `ops-lifecycle` para crear o actualizar los documentos de `.ops/`:
define plantillas, estados y trazabilidad. Si el repo no tiene `.ops/`, ejecuta
su bootstrap antes de la primera tarea de desarrollo. No repite sus reglas.

## Idioma

- **Respuestas al usuario:** en el idioma de su ultimo mensaje.
- **Artefactos tecnicos** (codigo, identificadores, comentarios, commits, logs y
  `.ops/`): ASCII sin diacriticos. Razon: el collate y las herramientas de la
  plataforma danan los caracteres no ASCII (ordenan mal, rompen diffs y generan
  mojibake en terminales Windows). La UI del producto y el contenido dirigido a
  usuarios finales siguen la convencion del proyecto.
- Documentacion general en Markdown sigue la convencion del repo si existe; por
  defecto, sin diacriticos (diffs y buscadores estables).

## Gotchas del entorno (aplican siempre)

- **Shell:** bash preferente. En Windows usa Git Bash (o PowerShell); en
  Linux/Mac el del sistema. La sintaxis POSIX funciona igual en los tres.
- **CRLF/LF:** al crear scripts, respeta los finales de linea del repo.
- **curl:** JSON entre comillas simples o `--data @archivo.json` (en PowerShell,
  curl.exe).

## Politica de sesion

Sesiones cortas y enfocadas: un objetivo por sesion, verificado antes de cerrar.
Si la tarea no cabe, divide y deja el contexto en `PROGRESS.md` y
`.ops/project/handoff.md` (ver skill `ops-lifecycle`). Al abrir sesion en un
repo con `.ops` (o `PROGRESS.md`), leelos antes de actuar.

## Comunicacion

- Respuestas breves: lo que se hizo, la evidencia y el siguiente paso.
- Explica decisiones no obvias en una linea; los detalles van al documento.
- Nunca marques algo como verificado sin evidencia real de ejecucion.

## Reglas de trabajo

1. Lee antes de escribir: entiende la zona afectada antes de proponer cambios.
2. Cambios minimos y completos: sin refactorizaciones colaterales ni TODOs.
3. Valida siempre: compila, prueba o ejecuta el camino minimo de tu cambio.
4. Si algo no funciona, prueba una alternativa antes de declararlo imposible.

## Convenciones de codigo y UI

- Todo componente nuevo usa **Tailwind CSS responsive** (breakpoints `sm:`,
  `md:`, `lg:`), sin CSS inline ni hojas propias por componente.
- Respeta la estructura: atoms/molecules/organisms en `src/libs/presentation/`,
  logica en `aplicacion/`, tipos en `domain/`, infra en `infraestructura/`;
  exporta cada pieza por su `index.ts`.
- Toda pieza nueva o modificada lleva **pruebas unitarias** en `src/test/`
  (mismo camino que el componente); no se considera terminada sin ellas.
- La documentacion se genera con **JSDoc** (`@description`, `@param`,
  `@returns`, `@version`, `@author`) y **sin caracteres especiales** (acentos,
  enes, signos de apertura): ESLint (`jsdoc/*`) lo valida en cada commit.

## Commits

- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:` o
  `test:`.
- Un commit = un cambio coherente; sin artefactos generados ni secretos.
- Mensajes en ASCII sin diacriticos (regla de idioma de arriba).

## Adopcion

Kit generico. Para adoptarlo: copia `copilot-instructions.md` a
`.github/copilot-instructions.md`, la skill a `.github/skills/`, y el flujo de
trabajo a `.github/workflows/` (ver README del kit). Lo especifico del proyecto
va en su rulebook (preferiblemente `AGENTS.md`); el kit funciona sin que exista.
