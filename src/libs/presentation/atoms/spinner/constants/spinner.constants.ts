import type { SpinnerVariant, SpinnerSize } from "../types/spinner.types";

/**
 * @description Define las clases de DaisyUI por variante del spinner.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SPINNER_VARIANT_CLASSES: Record<SpinnerVariant, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
};

/**
 * @description Define las clases de DaisyUI por tamano del spinner.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SPINNER_SIZE_CLASSES: Record<SpinnerSize, string> = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: "",
  lg: "loading-lg",
};

/**
 * @description Define la clase base compartida por todos los spinners.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SPINNER_BASE_CLASS = "";
