/**
 * @description Define las variantes visuales disponibles para el checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type CheckboxVariant = "primary" | "secondary" | "accent" | "neutral";

/**
 * @description Define los tamanos disponibles para el checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type CheckboxSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define las propiedades del checkbox reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CheckboxProps {
  readonly isChecked?: boolean;
  readonly disabled?: boolean;
  readonly ariaLabel?: string;
  readonly onChange?: (checked: boolean) => void;
  readonly variant?: CheckboxVariant;
  readonly size?: CheckboxSize;
  readonly className?: string;
}
