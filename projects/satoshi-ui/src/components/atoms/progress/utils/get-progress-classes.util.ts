import {
  PROGRESS_BASE_CLASS,
  PROGRESS_VARIANT_CLASSES,
} from "../constants/progress.constants";
import type { ProgressClassOptions } from "../types/progress.types";

/**
 * @description Compone las clases del progress segun su configuracion.
 * @param options Opciones visuales del progress.
 * @param options.variant Variante visual.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getProgressClasses(options: ProgressClassOptions): string {
  const classes: readonly string[] = [
    PROGRESS_BASE_CLASS,
    PROGRESS_VARIANT_CLASSES[options.variant],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
