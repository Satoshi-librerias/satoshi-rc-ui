---
name: session-context
description:
  "Use when: starting a session in this repo, resuming after a break or
  compaction, switching tasks, or when context is being lost and work must
  continue fast without re-exploring."
---

# Session Context

El contexto se pierde entre turnos y sesiones. Esta skill fija como y donde se
persiste, para reanudar rapido sin reexplorar el repositorio.

## Al iniciar una tarea

1. Lee `PROGRESS.md` (raiz) y `.ops/project/handoff.md` si existen: ahi vive el
   contexto de la sesion anterior. No reexplores el repo desde cero.
2. Escribe en `PROGRESS.md` un bloque de sesion: objetivo, archivos que vas a
   tocar, decisiones tomadas y siguiente paso concreto.

## Durante la tarea

- Tras cada avance significativo (archivo creado/editado, hallazgo, decision),
  actualiza `PROGRESS.md` en una o dos lineas. No esperes al final.
- Registra hallazgos con evidencia (comando ejecutado y resultado), no
  impresiones: "validate-kit OK (40 md)" y no "todo bien".
- Si un hallazgo cambia el plan, actualiza el objetivo antes de seguir.

## Al reanudar (nuevo turno o tras compaction)

1. Lee el ultimo bloque de `PROGRESS.md`; retoma desde el "siguiente paso"
   anotado, sin repetir busquedas ya hechas.
2. Si falta contexto, pregunta por el archivo o seccion exacta en lugar de
   reexplorar en bucle.
3. Evita releer archivos completos ya analizados: usa las notas y busca solo lo
   que falta.

## Al cerrar la tarea

- Deja en `PROGRESS.md`: que quedo hecho, que queda pendiente, comandos de
  validacion ejecutados y su resultado.
- Si el repo usa `.ops`, refleja estados y hallazgos en los documentos del arbol
  correspondiente (BUG, DEC, RUN...) y el handoff; `PROGRESS.md` es el detalle
  dia a dia, no su sustituto.

## Reglas duras

- Nunca ejecutes `git commit` ni `git push`: los cambios quedan en el working
  tree para revision humana. Si piden mensaje de commit, proponlo, no lo
  apliques.
- Un hallazgo sin evidencia ejecutada no se registra como verificado.
