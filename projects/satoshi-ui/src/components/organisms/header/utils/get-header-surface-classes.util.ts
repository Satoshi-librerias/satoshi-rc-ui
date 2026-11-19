import type {
  HeaderPosition,
  HeaderSurface,
} from "../types/header-layout.types";

/**
 * @description Define las clases base compartidas por todas las superficies.
 * @author Steveen Cues
 * @version 1.0.0
 */
const HEADER_BASE_CLASSES = "z-40 border-b border-base-300";

/**
 * @description Define las clases por posicion del Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
const HEADER_POSITION_CLASSES: Record<HeaderPosition, string> = {
  fixed: "fixed inset-x-0 top-0",
  sticky: "sticky top-0",
  static: "",
};

/**
 * @description Define las clases por superficie del Header. La superficie
 * transparente difumina el contenido detras manteniendo legibilidad con
 * tokens semanticos del tema activo.
 * @author Steveen Cues
 * @version 1.0.0
 */
const HEADER_SURFACE_CLASSES: Record<HeaderSurface, string> = {
  solid: "bg-base-100",
  transparent: "bg-base-100/70 shadow-md backdrop-blur-md",
};

/**
 * @description Resuelve las clases del Header segun posicion y superficie.
 * @param position Posicion configurada del Header.
 * @param surface Superficie configurada del Header.
 * @returns Clasess Tailwind del Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getHeaderSurfaceClasses(
  position: HeaderPosition,
  surface: HeaderSurface,
): string {
  return `${HEADER_BASE_CLASSES} ${HEADER_POSITION_CLASSES[position]} ${HEADER_SURFACE_CLASSES[surface]}`
    .trim()
    .replace(/\s+/g, " ");
}

export default getHeaderSurfaceClasses;
