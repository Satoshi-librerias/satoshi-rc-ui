/**
 * @description Define los tamanos disponibles del grupo de avatares.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type AvatarGroupSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define un miembro del grupo de avatares.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AvatarGroupMember {
  readonly src?: string;
  readonly alt?: string;
  readonly initials?: string;
}

/**
 * @description Define las propiedades de la molecula grupo de avatares.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AvatarGroupProps {
  readonly members: readonly AvatarGroupMember[];
  readonly maxVisible?: number;
  readonly size?: AvatarGroupSize;
  readonly ariaLabel?: string;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AvatarGroupClassOptions {
  readonly size: NonNullable<AvatarGroupProps["size"]>;
}
