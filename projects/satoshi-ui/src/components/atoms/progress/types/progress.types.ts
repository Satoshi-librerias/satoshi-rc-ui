/**
 * @description Define las variantes visuales disponibles para el progress.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ProgressVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "error";

/**
 * @description Define las propiedades del progress reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ProgressProps {
  readonly value?: number;
  readonly max?: number;
  readonly variant?: ProgressVariant;
  readonly ariaLabel?: string;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del progress.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ProgressClassOptions {
  readonly variant: NonNullable<ProgressProps["variant"]>;
}
