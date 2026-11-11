import {
  STAT_BASE_CLASS,
  STAT_VARIANT_CLASSES,
} from "../constants/stat.constants";
import type { StatClassOptions } from "../types/stat.types";

/**
 * @description Compone las clases de la estadistica.
 * @param options Opciones visuales de la estadistica.
 * @param options.variant Variante de color del valor.
 * @param options.className Clases adicionales configuradas por el consumidor.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.1.0
 */
export function getStatClasses(options: StatClassOptions): string {
  const classes: readonly string[] = [
    STAT_BASE_CLASS,
    STAT_VARIANT_CLASSES[options.variant],
    options.className,
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
