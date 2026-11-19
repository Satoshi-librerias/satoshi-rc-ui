import { BREADCRUMB_BASE_CLASS } from "../constants/breadcrumb.constants";
import type { BreadcrumbClassOptions } from "../types/breadcrumb.types";

/**
 * @description Compone las clases de la ruta de navegacion.
 * @param options Opciones visuales de la ruta.
 * @param options.className Clases adicionales configuradas por el consumidor.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getBreadcrumbClasses(options: BreadcrumbClassOptions): string {
  const classes: readonly string[] = [BREADCRUMB_BASE_CLASS, options.className];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
