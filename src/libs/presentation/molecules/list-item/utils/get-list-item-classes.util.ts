import {
  LIST_ITEM_BASE_CLASS,
  LIST_ITEM_DISABLED_CLASS,
  LIST_ITEM_INTERACTIVE_CLASS,
} from "../constants/list-item.constants";
import type { ListItemClassOptions } from "../types/list-item.types";

/**
 * @description Compone las clases del elemento de lista.
 * @param options Opciones visuales del elemento.
 * @param options.isDisabled Indica si el elemento esta deshabilitado.
 * @param options.isInteractive Indica si el elemento responde al clic.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getListItemClasses(options: ListItemClassOptions): string {
  const classes: readonly string[] = [
    LIST_ITEM_BASE_CLASS,
    options.isInteractive && !options.isDisabled
      ? LIST_ITEM_INTERACTIVE_CLASS
      : "",
    options.isDisabled ? LIST_ITEM_DISABLED_CLASS : "",
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
