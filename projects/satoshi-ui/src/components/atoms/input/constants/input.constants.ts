import type { InputVariant, InputSize } from "../types/input.types";

/**
 * @description Define las clases de DaisyUI por variante del input.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_VARIANT_CLASSES: Record<InputVariant, string> = {
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  neutral: "input-neutral",
  ghost: "input-ghost",
};

/**
 * @description Define las clases de DaisyUI por tamano del input.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_SIZE_CLASSES: Record<InputSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "",
  lg: "input-lg",
};

/**
 * @description Define la clase base compartida por todos los inputs.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_BASE_CLASS = "input w-full rounded-xl";
