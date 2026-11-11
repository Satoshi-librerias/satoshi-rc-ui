import {
  INPUT_BASE_CLASS,
  INPUT_VARIANT_CLASSES,
  INPUT_SIZE_CLASSES,
} from "../constants/input.constants";
import type { InputProps } from "../types/input.types";

/**
 * @description Define las opciones para resolver las clases del input.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface InputClassOptions {
  readonly variant: NonNullable<InputProps["variant"]>;
  readonly size: NonNullable<InputProps["size"]>;
}

/**
 * @description Compone las clases del input segun su configuracion.
 * @param options Opciones visuales del input.
 * @param options.variant Variante visual.
 * @param options.size Tamano del input.@returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getInputClasses(options: InputClassOptions): string {
  const classes: readonly string[] = [
    INPUT_BASE_CLASS,
    INPUT_VARIANT_CLASSES[options.variant],
    INPUT_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
