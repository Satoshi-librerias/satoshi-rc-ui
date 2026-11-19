import {
  CALLOUT_ACTION_BASE_CLASS,
  CALLOUT_ACTION_VARIANT_CLASSES,
} from "../constants/callout-action.constants";
import type { CalloutActionClassOptions } from "../types/callout-action.types";

/**
 * @description Compone las clases del aviso con accion.
 * @param options Opciones visuales del aviso.
 * @param options.variant Variante semantica del aviso.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getCalloutActionClasses(
  options: CalloutActionClassOptions,
): string {
  const classes: readonly string[] = [
    CALLOUT_ACTION_BASE_CLASS,
    CALLOUT_ACTION_VARIANT_CLASSES[options.variant],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
