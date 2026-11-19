/**
 * @description Define las variantes visuales disponibles para el alert.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type AlertVariant = "info" | "success" | "warning" | "error" | "neutral";

/**
 * @description Define las propiedades del alert reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AlertProps {
  readonly children: React.ReactNode;
  readonly isDismissible?: boolean;
  readonly variant?: AlertVariant;
  readonly className?: string;
}
