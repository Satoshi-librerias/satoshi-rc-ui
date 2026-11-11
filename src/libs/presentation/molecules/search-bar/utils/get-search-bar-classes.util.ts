import { SEARCH_BAR_SIZE_CLASSES } from "../constants/search-bar.constants";
import type { SearchBarClassOptions } from "../types/search-bar.types";

/**
 * @description Compone las clases adicionales del campo de busqueda sobre
 * las clases y variantes del atomo Input.
 * @param options Opciones visuales de la barra.
 * @param options.size Tamano del campo.
 * @returns Clases adicionales para el atomo Input.
 * @author Steveen Cues
 * @version 1.2.0
 */
export function getSearchBarClasses(options: SearchBarClassOptions): string {
  const classes: readonly string[] = [SEARCH_BAR_SIZE_CLASSES[options.size]];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
