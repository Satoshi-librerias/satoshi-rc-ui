import type { StatVariant } from "../types/stat.types";

/**
 * @description Define las clases de DaisyUI por variante de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STAT_VARIANT_CLASSES: Record<StatVariant, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  neutral: "",
};

/**
 * @description Define la clase base de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STAT_BASE_CLASS = "stat";

/**
 * @description Define la clase del titulo de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STAT_TITLE_CLASS = "stat-title";

/**
 * @description Define la clase del valor de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STAT_VALUE_CLASS = "stat-value";

/**
 * @description Define la clase de la descripcion de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STAT_DESCRIPTION_CLASS = "stat-desc";
