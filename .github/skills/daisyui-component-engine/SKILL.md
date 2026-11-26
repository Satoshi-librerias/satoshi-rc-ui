---
name: daisyui-component-engine
description:
  "Use when: creating or modifying satoshi-rc-ui components, choosing visual
  classes or theme tokens, deciding whether to build from scratch, or adapting
  DaisyUI primitives to project needs in projects/satoshi-ui."
---

# DaisyUI Component Engine

DaisyUI es el motor de componentes de la libreria: el nucleo visual de cada
componente debe partir de sus clases y tokens semanticos. Nosotros no
reimplementamos lo que DaisyUI ya cubre; solo adaptamos el componente a las
necesidades del proyecto (props, accesibilidad, responsive, i18n).

## Regla de origen

1. Antes de crear un componente, identifica el primitivo DaisyUI equivalente
   (`btn`, `card`, `modal`, `input`, `badge`, `progress`, `menu`, `tooltip`,
   `drawer`, `tabs`, etc.) y construye sobre el.
2. Crea de cero solo si DaisyUI no cubre la pieza (por ejemplo `GuidedTour` o
   `HeaderSpacer`); incluso entonces reutiliza tokens y utilidades de Tailwind.
3. Nunca copies estilos de un primitivo DaisyUI en CSS propio: eso rompe la
   coherencia de temas y duplica mantenimiento.

## Tokens semanticos, no colores fijos

- Usa tokens de tema DaisyUI: `base-100`, `base-200`, `base-content`, `primary`,
  `primary-content`, `secondary`, `accent`, `neutral`, `info`, `success`,
  `warning`, `error`.
- Prohibido hardcodear hex/rgb o clases de color arbitrarias (`bg-blue-500`) en
  componentes de la libreria: el consumidor elige el tema.
- Verifica contraste en los temas que el consumidor expone (light, dark,
  corporate en el portafolio Satoshi).

## Adaptacion del primitivo

- El componente publico expone la API del proyecto (props tipadas, sin `any`);
  internamente renderiza el primitivo DaisyUI con sus clases.
- Anade lo que DaisyUI no trae: accesibilidad ARIA, control controlado/no
  controlado, i18n via contexto de traduccion, responsive (`sm:`, `md:`, `lg:`)
  y estados del consumidor.
- Modificadores DaisyUI (`btn-outline`, `card-bordered`, `modal-open`) se
  activan con props, no con strings magicas del consumidor.
- Si un primitivo necesita comportamiento que DaisyUI no implementa (focus trap,
  scroll lock, progreso semantico), implementalo en el componente y documentalo
  como aprendizaje verificado en la skill de QA.

## Estilos

- Unica fuente de estilos: `src/libs/styles/index.css` (Tailwind 4 + DaisyUI).
  Sus `@source` deben cubrir la libreria y `stories/` para que el escaneo
  estatico emita las clases usadas (incluye pares responsive completos).
- Sin CSS inline salvo estilos que el componente toca y restaura del DOM
  (overlays, tour); sin hojas de estilo por componente.

## Validacion

- Pruebas unitarias en `projects/satoshi-ui/test/` espejando `src/`; assert
  comportamiento y salida accesible, no strings de clase.
- `npm test`, `npm run lint`, `npm run format:check`, `npm run build:lib` y
  `npm run build:storybook` antes de cerrar.
- QA visual en mobile y desktop (320/390, 1024/1440; 768 tablet) revisando
  overflow, contraste y temas; ver skill `shared-component-ux-responsive-qa`.
