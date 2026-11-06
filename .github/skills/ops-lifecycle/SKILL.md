---
name: ops-lifecycle
description: Ops lifecycle governance: plans, specs, ADRs, releases, handoff.
---

# ops-lifecycle

Gobierno del ciclo de vida de software en `.ops` (formato OKF 0.2). Usa la
plantilla que toque, nunca inventes estructura. Al trabajar en un repo con
`.ops`, aplica las reglas de la seccion "Reglas duras" sin releerlas de los
documentos.

## Referencias

- `reference/templates/base.md` - contrato OKF 0.2: vocabularios de estado,
  mapeo status, actores y confianza (leer una vez por sesion si vas a editar
  documentos).
- `reference/templates/` - plantillas por tipo de documento.
- `reference/tree/` - esqueletos de documentacion: README por arbol, handoff y
  modelo de README.

## Reglas duras de .ops

Estas reglas viven SOLO aqui; los documentos de `.ops` las aplican, no las
repiten. Cuando una plantilla o documento cite una de estas reglas, cita su
texto corto (p. ej. "el agente nunca escribe `verified`"), nunca su numero: la
numeracion puede reordenarse y la cita quedaria rota.

1. Estado: solo el vocabulario de `templates/base.md` para el tipo de documento.
   El agente nunca asigna `verificado`/`verified` a si mismo: lo pone un humano
   (rol:propietario o rol:funcional) tras revisar evidencia real (salida de
   comando, resultado de prueba); si la evidencia no existe, el estado no sube.
2. Un documento = un archivo con `id` unico en frontmatter; los registros
   extensos (DEC, RSK, BUG, QT, VULN, RUN, MIG, REL) se abren como archivos y se
   listan en el README de su arbol.
3. Toda cita de requisitos referencia el rulebook del proyecto (AGENTS.md,
   README u otro documento de reglas; si no hay, la fuente real de donde deriva)
   por seccion; `.ops` no parafrasea requisitos como reglas nuevas.
4. Frontmatter: se copia de la plantilla y solo se editan `id`, `title`,
   `description`, `relaciona` y el vocabulario de `estado`. `status` se deriva
   de `estado` segun el mapeo de `templates/base.md`; nunca se reescribe a mano.
5. Antes de mover o renombrar documentos, consultar
   `governance/change-control.md` del repo.
6. Enlaces: entre documentos de `.ops`, usar rutas relativas dentro del arbol (o
   `../` hacia otro arbol). Nunca enlaces absolutos tipo `C:\...` ni rutas con
   nombre de usuario.

## Convenciones de codigo y documentacion del proyecto

Al documentar implementaciones en `.ops` o crear codigo en repos que adoptan el
kit, aplica las convenciones del rulebook del proyecto. Las comunes del kit:

- Componentes y estilos: Tailwind CSS responsive (breakpoints `sm:`, `md:`,
  `lg:`), respetando la estructura de capas del proyecto (presentation/
  aplicacion/domain/infraestructura).
- Toda pieza nueva o modificada exige pruebas unitarias; registra su resultado
  como evidencia en los documentos de `.ops`.
- La documentacion de codigo se genera con JSDoc (`@description`, `@param`,
  `@returns`, `@version`, `@author`) y sin caracteres especiales (acentos, enes,
  signos de apertura); los linters del proyecto lo validan.

## Trazabilidad y numeracion

- Cadena: REQ -> BL -> IMPL -> QT; cada QT se mapea a los IMPL/BL/REQ que
  verifica. Las decisiones se registran como DEC; los riesgos como RSK.
- Numeracion: REQ-NNN, BL-NNN, QT-NNN, DEC-NNN, RSK-NNN, BUG-NNN, VULN-NNN,
  RUN-NNN, MIG-NNN y REL-NNN son secuenciales globales del repo, no se reinician
  por fase.
- IMPL usa dos formatos segun el documento:
  - **IMPL-NNN-`<slug>`** - un documento por tarea concreta e implementable
    (archivo `IMPL-NNN-<slug>.md`); el numero es global del repo.
  - **fase-N** - un documento agregador por fase (alcance, criterio de salida,
    indice de sus IMPL, estado de verificacion de la fase); no compite con los
    IMPL: los indexa.
  - Si el repo ya usa solo `fase-N` con tareas dentro, respeta su convencion y
    plantea migrar en una DEC antes de mezclar formatos.
- El log de avance es `PROGRESS.md` en la raiz del repo: detalle dia a dia. Los
  documentos de `.ops` registran estados y decisiones, no narrativa; nunca lo
  duplican ni lo sustituyen.

## Handoff de sesion

Toda sesion de desarrollo deja rastro en `.ops`: los hallazgos por rol se
registran en los documentos del arbol correspondiente (BUG, DEC, RSK, VULN,
RUN...), el avance en `PROGRESS.md` y el contexto para la siguiente sesion en el
handoff. Al cerrar una tarea significativa, actualiza `PROGRESS.md` y la seccion
"Historial de sesiones" de `.ops/project/handoff.md`. Estructura del handoff (8
secciones, ver `reference/tree/project/handoff.md`): header blockquote (fecha,
rama, hashes) / estado del producto / como usarlo / entorno local / como
levantar y verificar / mapa de documentos / trabajo en curso / historial de
sesiones. Resumen, no duplica el detalle.

## Cierre de defectos y decisiones

- BUG: estado de `templates/defect.md`; el fix exige evidencia de ejecucion
  real; el estado `verificado` lo pone un humano.
- DEC: una pregunta por documento, estado abierta -> tomada/rechazada; la
  resolucion la toma el propietario, el agente documenta y nunca la cierra por
  si mismo.

## Mini-examples

- REQ nuevo: copia `reference/templates/requirement.md`, `id: REQ-011`
  (siguiente global), cita la seccion del rulebook, `estado: borrador`.
- Fase que arranca: crea/actualiza `fase-3.md` con alcance y criterio de salida;
  desglosa tareas como `IMPL-021-api-auth.md` e `IMPL-022-token-refresh.md`;
  indexa ambas en la fase.
- Cierre de fase: checklist del DoD en la especificacion de fase; avanza estados
  con evidencia; actualiza `PROGRESS.md`.

## Bootstrap de un repo nuevo

1. `mkdir -p .ops/product .ops/project/backlog .ops/architecture .ops/decisions .ops/governance .ops/qa .ops/implementations .ops/ux-and-interfaces .ops/security .ops/operations .ops/data .ops/development`
2. Copia `reference/templates/base.md` a `.ops/templates/base.md` y el README
   del arbol a cada `.ops/<arbol>/README.md` (fuente: `reference/tree/`).
3. Copia `reference/tree/project/handoff.md` a `.ops/project/` y rellena las
   secciones 2-8 con el estado real del repo.
4. Si el README de un arbol lista plantillas, copialas desde
   `reference/templates/`.
5. Crea `PROGRESS.md` en la raiz si no existe (no es parte de `.ops`).
