/**
 * @description Define las variantes visuales disponibles para el input.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type InputVariant =
  "primary" | "secondary" | "accent" | "neutral" | "ghost";

/**
 * @description Define los tamanos disponibles para el input.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type InputSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define las propiedades del input reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface InputProps {
  readonly id?: string;
  readonly value?: string;
  readonly placeholder?: string;
  readonly type?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly ariaLabel?: string;
  readonly onChange?: (value: string) => void;
  readonly variant?: InputVariant;
  readonly size?: InputSize;
  readonly className?: string;
}
