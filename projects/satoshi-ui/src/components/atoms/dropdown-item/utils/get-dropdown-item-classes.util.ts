import {
  DROPDOWN_ITEM_BASE_CLASS,
  DROPDOWN_ITEM_SELECTED_CLASS,
  DROPDOWN_ITEM_VARIANT_CLASSES,
} from "../constants/dropdown-item.constants";
import type { DropdownItemClassOptions } from "../types/dropdown-item.types";

/**
 * @description Compone las clases del elemento de menu.
 * @param options Opciones visuales del elemento.
 * @param options.variant Variante de color.
 * @param options.isSelected Indica si el elemento esta seleccionado.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.1.0
 */
export function getDropdownItemClasses(
  options: DropdownItemClassOptions,
): string {
  const classes: readonly string[] = [
    DROPDOWN_ITEM_BASE_CLASS,
    DROPDOWN_ITEM_VARIANT_CLASSES[options.variant],
    options.isSelected ? DROPDOWN_ITEM_SELECTED_CLASS : "",
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
