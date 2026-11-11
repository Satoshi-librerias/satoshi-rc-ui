import type { SwitchVariant, SwitchSize } from "../types/switch.types";

/**
 * @description Define las clases de DaisyUI por variante del switch.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SWITCH_VARIANT_CLASSES: Record<SwitchVariant, string> = {
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  neutral: "toggle-neutral",
};

/**
 * @description Define las clases de DaisyUI por tamano del switch.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SWITCH_SIZE_CLASSES: Record<SwitchSize, string> = {
  xs: "toggle-xs",
  sm: "toggle-sm",
  md: "",
  lg: "toggle-lg",
};

/**
 * @description Define la clase base compartida por todos los switches.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SWITCH_BASE_CLASS = "toggle";
