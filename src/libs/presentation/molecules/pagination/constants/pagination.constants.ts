import type {
  PaginationSize,
  PaginationVariant,
} from "../types/pagination.types";

/**
 * @description Define las clases de DaisyUI por variante de la paginacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PAGINATION_VARIANT_CLASSES: Record<PaginationVariant, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
};

/**
 * @description Define las clases de DaisyUI por tamano de la paginacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PAGINATION_SIZE_CLASSES: Record<PaginationSize, string> = {
  xs: "join-item btn-xs",
  sm: "join-item btn-sm",
  md: "join-item btn-md",
  lg: "join-item btn-lg",
};

/**
 * @description Define la clase base de la paginacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PAGINATION_BASE_CLASS = "join";

/**
 * @description Define la clase del boton de pagina activa.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PAGINATION_ACTIVE_CLASS = "btn-active";

/**
 * @description Define el limite de hermanos visibles por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PAGINATION_DEFAULT_SIBLINGS = 1;
