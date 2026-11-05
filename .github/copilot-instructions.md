# Copilot: reglas del repositorio

## Proposito de estas instrucciones

Reglas universales de trabajo y quirks del entorno. Lo especifico del proyecto
(stack, comandos, puertos, convenciones de codigo) se documenta en el repo:
preferiblemente en su `AGENTS.md` (u otro rulebook equivalente si el repo no lo
usa) y en la documentacion propia; si algo de eso falta aqui, se anade alli, no
en este archivo.

## Documentacion de operaciones

Usa la skill `ops-lifecycle` para crear, verificar o actualizar los documentos
de `.ops/`: define plantillas, estados y trazabilidad. Si el repo no tiene
`.ops/`, ejecuta su bootstrap antes de la primera tarea de desarrollo: `.ops` es
donde se registra lo encontrado por cada rol en cada sesion agentica; sin `.ops`
no queda documentado nada. Este archivo no repite sus reglas.

## Idioma

- **Respuestas al usuario:** responde en el idioma del ultimo mensaje del
  usuario.
- **Artefactos tecnicos:** codigo, identificadores, comentarios de codigo,
  mensajes de commit, logs y documentacion de operaciones (`.ops/`) se escriben
  en ASCII sin diacriticos: evita acentos, enes y signos de apertura. Razon: el
  collate y las herramientas de la plataforma danan los caracteres no ASCII
  (ordenan mal, rompen diffs y generan mojibake en terminales Windows). La UI
  del producto y el contenido dirigido a usuarios finales siguen la convencion
  del proyecto.
- Documentacion general en Markdown sigue la convencion del repo si existe; por
  defecto, sin diacriticos para mantener diffs y buscadores estables.

## Gotchas del entorno (aplican siempre)

- **Shell:** bash preferente. En Windows usa Git Bash; si no esta disponible,
  baja a PowerShell. En Linux/Mac, el shell del sistema. La sintaxis POSIX
  (`&&`, `||`, pipes, comillas simples) funciona igual en los tres.
- **CRLF/LF:** al crear scripts, respeta los finales de linea que ya usa el
  repo; no mezcles.
- **curl:** con Git Bash es el curl de siempre: JSON entre comillas simples, o
  `--data @archivo.json` si el escape se complica (en PowerShell, curl.exe).

## Politica de sesion

Sesiones cortas y enfocadas: un objetivo por sesion, verificado antes de cerrar.
Si la tarea no cabe, divide y deja el contexto en `PROGRESS.md` y
`.ops/project/handoff.md` (ver skill `ops-lifecycle`). No migres trabajo a
medias sin dejar rastro escrito. **Al abrir sesion en un repo con `.ops` (o
`PROGRESS.md`), lee `PROGRESS.md` y `.ops/project/handoff.md` antes de actuar.**

## Comunicacion

- Respuestas breves: lo que se hizo, la evidencia, y el siguiente paso. Sin
  relleno.
- Explica decisiones no obvias en una linea; los detalles van al documento
  correspondiente.
- Nunca marques algo como verificado sin evidencia real de ejecucion.

## Reglas de trabajo

1. Lee antes de escribir: entiende la zona afectada antes de proponer cambios.
2. Cambios minimos y completos: nada de refactorizaciones colaterales ni TODOs
   pendientes.
3. Valida siempre: compila, prueba o ejecuta el camino minimo que cubre tu
   cambio.
4. Si algo no funciona, prueba una alternativa antes de declararlo imposible.

## Commits

- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`,
  `test:`.
- Un commit = un cambio coherente; sin artefactos generados ni secretos.
- Mensajes en ASCII sin diacriticos (regla de idioma de arriba).

## Adopcion

Este kit es generico. Para adoptarlo en un repo: copia `copilot-instructions.md`
a `.github/copilot-instructions.md`, la carpeta de skill a `.github/skills/`, y
el flujo de trabajo a `.github/workflows/` (ver README del kit). Lo especifico
del proyecto va en su rulebook (preferiblemente `AGENTS.md`; si el repo no lo
usa, README o documentacion equivalente). Ningun paso de instalacion depende de
que exista: el kit funciona sin el.
