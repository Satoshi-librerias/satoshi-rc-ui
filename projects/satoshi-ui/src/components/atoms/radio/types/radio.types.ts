/**
 * @description Define las variantes visuales disponibles para el radio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type RadioVariant = "primary" | "secondary" | "accent" | "neutral";

/**
 * @description Define los tamanos disponibles para el radio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type RadioSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define las propiedades del radio reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface RadioProps {
  readonly name: string;
  readonly value?: string;
  readonly isChecked?: boolean;
  readonly disabled?: boolean;
  readonly ariaLabel?: string;
  readonly onChange?: (value: string) => void;
  readonly variant?: RadioVariant;
  readonly size?: RadioSize;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del radio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface RadioClassOptions {
  readonly variant: NonNullable<RadioProps["variant"]>;
  readonly size: NonNullable<RadioProps["size"]>;
}
