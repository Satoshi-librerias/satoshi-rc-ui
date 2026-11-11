import {
  SPINNER_BASE_CLASS,
  SPINNER_VARIANT_CLASSES,
  SPINNER_SIZE_CLASSES,
} from "../constants/spinner.constants";
import type { SpinnerProps } from "../types/spinner.types";

/**
 * @description Define las opciones para resolver las clases del spinner.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SpinnerClassOptions {
  readonly variant: NonNullable<SpinnerProps["variant"]>;
  readonly size: NonNullable<SpinnerProps["size"]>;
}

/**
 * @description Compone las clases del spinner segun su configuracion.
 * @param options Opciones visuales del spinner.
 * @param options.variant Variante visual.
 * @param options.size Tamano del spinner.@returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getSpinnerClasses(options: SpinnerClassOptions): string {
  const classes: readonly string[] = [
    SPINNER_BASE_CLASS,
    SPINNER_VARIANT_CLASSES[options.variant],
    SPINNER_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
