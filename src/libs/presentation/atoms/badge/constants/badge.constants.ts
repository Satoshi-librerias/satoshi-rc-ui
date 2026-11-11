import type { BadgeSize, BadgeVariant } from "../types/badge.types";

/**
 * @description Define las clases de DaisyUI por variante del badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BADGE_VARIANT_CLASSES: Record<BadgeVariant, string> = {
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  neutral: "badge-neutral",
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
};

/**
 * @description Define las clases de DaisyUI por tamano del badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BADGE_SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: "badge-sm",
  md: "",
  lg: "badge-lg",
};

/**
 * @description Define la clase base compartida por todos los badges.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BADGE_BASE_CLASS = "badge";

/**
 * @description Define la clase que activa el estilo con borde.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BADGE_OUTLINED_CLASS = "badge-outline";
