/**
 * @description Define las variantes visuales disponibles para el divider.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type DividerVariant = "primary" | "secondary" | "accent" | "neutral";

/**
 * @description Define las propiedades del divider reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface DividerProps {
  readonly children?: React.ReactNode;
  readonly orientation?: "horizontal" | "vertical";
  readonly variant?: DividerVariant;
  readonly className?: string;
}
