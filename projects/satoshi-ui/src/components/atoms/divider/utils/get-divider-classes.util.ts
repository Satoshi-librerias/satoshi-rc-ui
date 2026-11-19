import {
  DIVIDER_BASE_CLASS,
  DIVIDER_VARIANT_CLASSES,
} from "../constants/divider.constants";
import type { DividerProps } from "../types/divider.types";

/**
 * @description Define la clase de orientacion vertical del separador.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DIVIDER_VERTICAL_CLASS = "divider-vertical";

/**
 * @description Define las opciones para resolver las clases del separador.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface DividerClassOptions {
  readonly variant: NonNullable<DividerProps["variant"]>;
  readonly orientation: NonNullable<DividerProps["orientation"]>;
}

/**
 * @description Compone las clases del separador segun su configuracion.
 * @param options Opciones visuales del separador.
 * @param options.variant Variante visual.
 * @param options.orientation Orientacion del separador.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getDividerClasses(options: DividerClassOptions): string {
  const classes: readonly string[] = [
    DIVIDER_BASE_CLASS,
    DIVIDER_VARIANT_CLASSES[options.variant],
    options.orientation === "vertical" ? DIVIDER_VERTICAL_CLASS : "",
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
