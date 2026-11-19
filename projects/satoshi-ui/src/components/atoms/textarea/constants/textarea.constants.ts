import type { TextareaVariant, TextareaSize } from "../types/textarea.types";

/**
 * @description Define las clases de DaisyUI por variante del textarea.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TEXTAREA_VARIANT_CLASSES: Record<TextareaVariant, string> = {
  primary: "textarea-primary",
  secondary: "textarea-secondary",
  accent: "textarea-accent",
  neutral: "textarea-neutral",
  ghost: "textarea-ghost",
};

/**
 * @description Define las clases de DaisyUI por tamano del textarea.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TEXTAREA_SIZE_CLASSES: Record<TextareaSize, string> = {
  xs: "textarea-xs",
  sm: "textarea-sm",
  md: "",
  lg: "textarea-lg",
};

/**
 * @description Define la clase base compartida por todos los textareas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TEXTAREA_BASE_CLASS = "textarea w-full rounded-xl";

/**
 * @description Define el numero de filas por defecto del area de texto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TEXTAREA_DEFAULT_ROWS = 3;
