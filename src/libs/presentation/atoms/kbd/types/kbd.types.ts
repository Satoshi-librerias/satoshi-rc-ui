/**
 * @description Define las variantes visuales disponibles para el kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type KbdVariant = "primary" | "secondary" | "accent" | "neutral";

/**
 * @description Define los tamanos disponibles para el kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type KbdSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define las propiedades del kbd reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface KbdProps {
  readonly children: React.ReactNode;
  readonly variant?: KbdVariant;
  readonly size?: KbdSize;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface KbdClassOptions {
  readonly variant: NonNullable<KbdProps["variant"]>;
  readonly size: NonNullable<KbdProps["size"]>;
}
