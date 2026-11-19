import type { CheckboxVariant, CheckboxSize } from "../types/checkbox.types";

/**
 * @description Define las clases de DaisyUI por variante del checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CHECKBOX_VARIANT_CLASSES: Record<CheckboxVariant, string> = {
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
  neutral: "checkbox-neutral",
};

/**
 * @description Define las clases de DaisyUI por tamano del checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CHECKBOX_SIZE_CLASSES: Record<CheckboxSize, string> = {
  xs: "checkbox-xs",
  sm: "checkbox-sm",
  md: "",
  lg: "checkbox-lg",
};

/**
 * @description Define la clase base compartida por todos los checkboxs.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CHECKBOX_BASE_CLASS = "checkbox";
