/**
 * @description Define las variantes visuales disponibles para el skeleton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SkeletonVariant = "circle" | "rectangle" | "text";

/**
 * @description Define las propiedades del skeleton reutilizable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SkeletonProps {
  readonly variant?: SkeletonVariant;
  readonly ariaLabel?: string;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del skeleton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SkeletonClassOptions {
  readonly variant: NonNullable<SkeletonProps["variant"]>;
  readonly className: string;
}
