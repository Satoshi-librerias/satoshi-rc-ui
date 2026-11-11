import type { AlertVariant } from "../types/alert.types";

/**
 * @description Define las clases de DaisyUI por variante del alert.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ALERT_VARIANT_CLASSES: Record<AlertVariant, string> = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
  neutral: "alert-neutral",
};

/**
 * @description Define la clase base compartida por todos los alerts.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ALERT_BASE_CLASS = "alert";
