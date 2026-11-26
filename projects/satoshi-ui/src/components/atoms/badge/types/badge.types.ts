/**
 * @description Define las variantes visuales disponibles para el badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type BadgeVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "error";

/**
 * @description Define los tamanos disponibles para el badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type BadgeSize = "sm" | "md" | "lg";

/**
 * @description Define las propiedades del badge reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface BadgeProps {
  readonly children: React.ReactNode;
  readonly variant?: BadgeVariant;
  readonly size?: BadgeSize;
  readonly isOutlined?: boolean;
  readonly ariaLabel?: string;
  readonly className?: string;
}
