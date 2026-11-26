import type { ProgressVariant } from "../types/progress.types";

/**
 * @description Define las clases de DaisyUI por variante del progress.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PROGRESS_VARIANT_CLASSES: Record<ProgressVariant, string> = {
  primary: "progress-primary",
  secondary: "progress-secondary",
  accent: "progress-accent",
  neutral: "progress-neutral",
  info: "progress-info",
  success: "progress-success",
  warning: "progress-warning",
  error: "progress-error",
};

/**
 * @description Define la clase base compartida por todos los progress.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PROGRESS_BASE_CLASS = "progress w-full";

/**
 * @description Define el valor maximo por defecto del progress.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PROGRESS_DEFAULT_MAX = 100;
