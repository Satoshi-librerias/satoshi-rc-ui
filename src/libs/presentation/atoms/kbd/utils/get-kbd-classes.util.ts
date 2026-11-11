import {
  KBD_BASE_CLASS,
  KBD_SIZE_CLASSES,
  KBD_VARIANT_CLASSES,
} from "../constants/kbd.constants";
import type { KbdClassOptions } from "../types/kbd.types";

/**
 * @description Compone las clases del kbd segun su configuracion.
 * @param options Opciones visuales del kbd.
 * @param options.variant Variante visual.
 * @param options.size Tamano del kbd.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getKbdClasses(options: KbdClassOptions): string {
  const classes: readonly string[] = [
    KBD_BASE_CLASS,
    KBD_VARIANT_CLASSES[options.variant],
    KBD_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
