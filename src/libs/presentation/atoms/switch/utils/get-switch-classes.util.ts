import {
  SWITCH_BASE_CLASS,
  SWITCH_SIZE_CLASSES,
  SWITCH_VARIANT_CLASSES,
} from "../constants/switch.constants";
import type { SwitchClassOptions } from "../types/switch.types";

/**
 * @description Compone las clases del switch segun su configuracion.
 * @param options Opciones visuales del switch.
 * @param options.variant Variante visual.
 * @param options.size Tamano del switch.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getSwitchClasses(options: SwitchClassOptions): string {
  const classes: readonly string[] = [
    SWITCH_BASE_CLASS,
    SWITCH_VARIANT_CLASSES[options.variant],
    SWITCH_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
