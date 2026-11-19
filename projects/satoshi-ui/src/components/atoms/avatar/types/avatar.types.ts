/**
 * @description Define las variantes visuales disponibles para el avatar.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type AvatarVariant = "primary" | "secondary" | "accent" | "neutral";

/**
 * @description Define las propiedades del avatar reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AvatarProps {
  readonly initials?: string;
  readonly src?: string;
  readonly alt?: string;
  readonly variant?: AvatarVariant;
  readonly className?: string;
}
