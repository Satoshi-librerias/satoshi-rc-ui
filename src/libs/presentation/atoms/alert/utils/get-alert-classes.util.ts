import {
  ALERT_BASE_CLASS,
  ALERT_VARIANT_CLASSES,
} from "../constants/alert.constants";
import type { AlertProps } from "../types/alert.types";

/**
 * @description Define las opciones para resolver las clases del alert.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AlertClassOptions {
  readonly variant: NonNullable<AlertProps["variant"]>;
}

/**
 * @description Compone las clases del alert segun su configuracion.
 * @param options Opciones visuales del alert.
 * @param options.variant Variante visual.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getAlertClasses(options: AlertClassOptions): string {
  const classes: readonly string[] = [
    ALERT_BASE_CLASS,
    ALERT_VARIANT_CLASSES[options.variant],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
