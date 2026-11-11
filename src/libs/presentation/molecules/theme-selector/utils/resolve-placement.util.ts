import type { ThemeSelectorPlacement } from "@presentation";

/**
 * @description Define los datos del contenedor para calcular la colocacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ResolvePlacementOptions {
  readonly container: DOMRect;
  readonly viewport: {
    readonly width: number;
    readonly height: number;
  };
}

/**
 * @description Define el espacio minimo requerido para mostrar el panel.
 * @author Steveen Cues
 * @version 1.0.0
 */
const MIN_PANEL_HEIGHT = 160;

/**
 * @description Define la separacion entre el activador y el panel.
 * @author Steveen Cues
 * @version 1.0.0
 */
const PANEL_GAP = 8;

/**
 * @description Define la altura maxima por defecto del panel desplegado.
 * @author Steveen Cues
 * @version 1.0.0
 */
const MAX_PANEL_HEIGHT = 448;

/**
 * @description Define el ancho maximo y margen lateral del panel.
 * @author Steveen Cues
 * @version 1.0.0
 */
const MAX_PANEL_WIDTH = 320;

/**
 * @description Define el margen minimo del panel respecto al viewport.
 * @author Steveen Cues
 * @version 1.0.0
 */
const VIEWPORT_MARGIN = 16;

/**
 * @description Calcula la colocacion del panel segun el espacio disponible.
 * Prioriza abrir hacia abajo y alinear a la derecha; invierte la direccion
 * cuando el panel quedaria fuera del viewport.
 * @param options Rectangulo del contenedor y dimensiones del viewport.
 * @param options.container Rectangulo del contenedor del selector.
 * @param options.viewport Dimensiones actuales del viewport.
 * @returns Colocacion vertical, horizontal y altura maxima del panel.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const resolveThemeSelectorPlacement = ({
  container,
  viewport,
}: ResolvePlacementOptions): ThemeSelectorPlacement => {
  const spaceBelow = viewport.height - container.bottom;
  const spaceAbove = container.top;
  const openUpwards = spaceBelow < MIN_PANEL_HEIGHT && spaceAbove > spaceBelow;

  const maxHeight = Math.max(
    MIN_PANEL_HEIGHT,
    Math.min(
      openUpwards ? spaceAbove - PANEL_GAP : spaceBelow - PANEL_GAP,
      MAX_PANEL_HEIGHT,
    ),
  );

  const panelWidth = Math.min(
    MAX_PANEL_WIDTH,
    viewport.width - VIEWPORT_MARGIN - VIEWPORT_MARGIN,
  );
  const overflowWhenRightAligned = Math.max(0, panelWidth - container.right);
  const overflowWhenLeftAligned = Math.max(
    0,
    container.left + panelWidth - viewport.width,
  );
  const alignLeft =
    overflowWhenRightAligned > 0 &&
    overflowWhenLeftAligned <= overflowWhenRightAligned;

  return {
    vertical: openUpwards ? "top" : "bottom",
    horizontal: alignLeft ? "left" : "right",
    maxHeight,
  };
};
