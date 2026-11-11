/**
 * @description Define las variantes visuales de la paginacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type PaginationVariant = "primary" | "secondary" | "accent" | "neutral";

/**
 * @description Define los tamanos disponibles de la paginacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type PaginationSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define las propiedades de la molecula paginacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface PaginationProps {
  readonly page: number;
  readonly totalPages: number;
  readonly siblingCount?: number;
  readonly ariaLabel?: string;
  readonly previousLabel?: string;
  readonly nextLabel?: string;
  readonly variant?: PaginationVariant;
  readonly size?: PaginationSize;
  readonly className?: string;
  readonly onPageChange?: (page: number) => void;
}

/**
 * @description Define las opciones para resolver las clases de la paginacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface PaginationClassOptions {
  readonly variant: NonNullable<PaginationProps["variant"]>;
  readonly size: NonNullable<PaginationProps["size"]>;
}
