import {
  BADGE_BASE_CLASS,
  BADGE_OUTLINED_CLASS,
  BADGE_SIZE_CLASSES,
  BADGE_VARIANT_CLASSES,
} from "../constants/badge.constants";
import type { BadgeProps } from "../types/badge.types";

/**
 * @description Define las opciones para resolver las clases del badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface BadgeClassOptions {
  readonly variant: NonNullable<BadgeProps["variant"]>;
  readonly size: NonNullable<BadgeProps["size"]>;
  readonly isOutlined: boolean;
}

/**
 * @description Compone las clases del badge segun su configuracion.
 * @param options Opciones visuales del badge.
 * @param options.variant Variante visual.
 * @param options.size Tamano del badge.
 * @param options.isOutlined Indica si usa el estilo con borde.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getBadgeClasses(options: BadgeClassOptions): string {
  const classes: readonly string[] = [
    BADGE_BASE_CLASS,
    BADGE_VARIANT_CLASSES[options.variant],
    BADGE_SIZE_CLASSES[options.size],
    options.isOutlined ? BADGE_OUTLINED_CLASS : "",
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
