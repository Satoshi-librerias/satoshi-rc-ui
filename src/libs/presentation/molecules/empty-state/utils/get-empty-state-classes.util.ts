import { EMPTY_STATE_BASE_CLASS } from "../constants/empty-state.constants";
import type { EmptyStateClassOptions } from "../types/empty-state.types";

/**
 * @description Compone las clases del estado vacio.
 * @param options Opciones visuales del estado vacio.
 * @param options.className Clases adicionales configuradas por el consumidor.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getEmptyStateClasses(options: EmptyStateClassOptions): string {
  const classes: readonly string[] = [
    EMPTY_STATE_BASE_CLASS,
    options.className,
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
