import {
  AVATAR_BASE_CLASS,
  AVATAR_VARIANT_CLASSES,
} from "../constants/avatar.constants";
import type { AvatarProps } from "../types/avatar.types";

/**
 * @description Define las opciones para resolver las clases del avatar.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AvatarClassOptions {
  readonly variant: NonNullable<AvatarProps["variant"]>;
}

/**
 * @description Compone las clases del avatar segun su configuracion.
 * @param options Opciones visuales del avatar.
 * @param options.variant Variante visual.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getAvatarClasses(options: AvatarClassOptions): string {
  const classes: readonly string[] = [
    AVATAR_BASE_CLASS,
    AVATAR_VARIANT_CLASSES[options.variant],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
