import {
  AVATAR_GROUP_BASE_CLASS,
  AVATAR_GROUP_SIZE_CLASSES,
} from "../constants/avatar-group.constants";
import type { AvatarGroupClassOptions } from "../types/avatar-group.types";

/**
 * @description Compone las clases del grupo de avatares.
 * @param options Opciones visuales del grupo.
 * @param options.size Tamano de los avatares.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getAvatarGroupClasses(
  options: AvatarGroupClassOptions,
): string {
  const classes: readonly string[] = [
    AVATAR_GROUP_BASE_CLASS,
    AVATAR_GROUP_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
