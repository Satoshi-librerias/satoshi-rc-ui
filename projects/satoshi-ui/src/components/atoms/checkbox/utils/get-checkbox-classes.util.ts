import {
  CHECKBOX_BASE_CLASS,
  CHECKBOX_VARIANT_CLASSES,
  CHECKBOX_SIZE_CLASSES,
} from "../constants/checkbox.constants";
import type { CheckboxProps } from "../types/checkbox.types";

/**
 * @description Define las opciones para resolver las clases del checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CheckboxClassOptions {
  readonly variant: NonNullable<CheckboxProps["variant"]>;
  readonly size: NonNullable<CheckboxProps["size"]>;
}

/**
 * @description Compone las clases del checkbox segun su configuracion.
 * @param options Opciones visuales del checkbox.
 * @param options.variant Variante visual.
 * @param options.size Tamano del checkbox.@returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getCheckboxClasses(options: CheckboxClassOptions): string {
  const classes: readonly string[] = [
    CHECKBOX_BASE_CLASS,
    CHECKBOX_VARIANT_CLASSES[options.variant],
    CHECKBOX_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
