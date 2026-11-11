import {
  TOOLBAR_BASE_CLASS,
  TOOLBAR_VARIANT_CLASSES,
} from "../constants/toolbar.constants";
import type { ToolbarClassOptions } from "../types/toolbar.types";

/**
 * @description Compone las clases de la barra de herramientas.
 * @param options Opciones visuales de la barra.
 * @param options.variant Variante visual.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getToolbarClasses(options: ToolbarClassOptions): string {
  const classes: readonly string[] = [
    TOOLBAR_BASE_CLASS,
    TOOLBAR_VARIANT_CLASSES[options.variant],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
