/**
 * @description Define las variantes visuales disponibles para el switch.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SwitchVariant = "primary" | "secondary" | "accent" | "neutral";

/**
 * @description Define los tamanos disponibles para el switch.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SwitchSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define las propiedades del switch reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SwitchProps {
  readonly isChecked?: boolean;
  readonly disabled?: boolean;
  readonly ariaLabel?: string;
  readonly onChange?: (checked: boolean) => void;
  readonly variant?: SwitchVariant;
  readonly size?: SwitchSize;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del switch.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SwitchClassOptions {
  readonly variant: NonNullable<SwitchProps["variant"]>;
  readonly size: NonNullable<SwitchProps["size"]>;
}
