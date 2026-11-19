import {
  ACCORDION_ITEM_BASE_CLASS,
  ACCORDION_ITEM_CLOSED_CLASS,
  ACCORDION_ITEM_DISABLED_CLASS,
  ACCORDION_ITEM_OPEN_CLASS,
} from "../constants/accordion-item.constants";
import type { AccordionItemClassOptions } from "../types/accordion-item.types";

/**
 * @description Compone las clases del elemento de acordeon.
 * @param options Opciones visuales del acordeon.
 * @param options.isOpen Indica si el acordeon esta abierto.
 * @param options.isDisabled Indica si el acordeon esta deshabilitado.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getAccordionItemClasses(
  options: AccordionItemClassOptions,
): string {
  const classes: readonly string[] = [
    ACCORDION_ITEM_BASE_CLASS,
    options.isOpen ? ACCORDION_ITEM_OPEN_CLASS : ACCORDION_ITEM_CLOSED_CLASS,
    options.isDisabled ? ACCORDION_ITEM_DISABLED_CLASS : "",
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
