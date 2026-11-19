import {
  PAGINATION_ACTIVE_CLASS,
  PAGINATION_BASE_CLASS,
  PAGINATION_SIZE_CLASSES,
  PAGINATION_VARIANT_CLASSES,
} from "../constants/pagination.constants";
import type { PaginationClassOptions } from "../types/pagination.types";

/**
 * @description Compone las clases de la paginacion.
 * @param options Opciones visuales de la paginacion.
 * @param options.variant Variante visual.
 * @param options.size Tamano de los botones.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getPaginationClasses(options: PaginationClassOptions): string {
  const classes: readonly string[] = [
    PAGINATION_BASE_CLASS,
    PAGINATION_VARIANT_CLASSES[options.variant],
    PAGINATION_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}

/**
 * @description Compone las clases de un boton de pagina.
 * @param options Opciones visuales de la paginacion.
 * @param options.size Tamano de los botones.
 * @param options.isActive Indica si la pagina es la actual.
 * @returns Clases del boton de pagina.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getPaginationPageClasses(
  options: Pick<PaginationClassOptions, "size"> & {
    readonly isActive: boolean;
  },
): string {
  const classes: readonly string[] = [
    "btn join-item",
    PAGINATION_SIZE_CLASSES[options.size],
    options.isActive ? PAGINATION_ACTIVE_CLASS : "",
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
