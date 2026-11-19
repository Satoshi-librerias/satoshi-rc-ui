import {
  SECTION_HEADING_BASE_CLASS,
  SECTION_HEADING_CENTER_CLASS,
  SECTION_HEADING_START_CLASS,
} from "../constants/section-heading.constants";
import type { SectionHeadingClassOptions } from "../types/section-heading.types";

/**
 * @description Compone las clases del encabezado de seccion.
 * @param options Opciones visuales del encabezado.
 * @param options.className Clases adicionales configuradas por el consumidor.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getSectionHeadingClasses(
  options: SectionHeadingClassOptions,
): string {
  const classes: readonly string[] = [
    SECTION_HEADING_BASE_CLASS,
    options.align === "center"
      ? SECTION_HEADING_CENTER_CLASS
      : SECTION_HEADING_START_CLASS,
    options.className,
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
