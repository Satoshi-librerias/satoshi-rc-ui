import {
  SKELETON_BASE_CLASS,
  SKELETON_VARIANT_CLASSES,
} from "../constants/skeleton.constants";
import type { SkeletonClassOptions } from "../types/skeleton.types";

/**
 * @description Compone las clases del skeleton segun su configuracion.
 * @param options Opciones visuales del skeleton.
 * @param options.variant Variante de forma del placeholder.
 * @param options.className Clases adicionales configuradas por el consumidor.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getSkeletonClasses(options: SkeletonClassOptions): string {
  const classes: readonly string[] = [
    SKELETON_BASE_CLASS,
    SKELETON_VARIANT_CLASSES[options.variant],
    options.className,
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
