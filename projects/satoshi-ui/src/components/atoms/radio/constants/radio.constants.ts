import type { RadioSize, RadioVariant } from "../types/radio.types";

/**
 * @description Define las clases de DaisyUI por variante del radio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RADIO_VARIANT_CLASSES: Record<RadioVariant, string> = {
  primary: "radio-primary",
  secondary: "radio-secondary",
  accent: "radio-accent",
  neutral: "radio-neutral",
};

/**
 * @description Define las clases de DaisyUI por tamano del radio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RADIO_SIZE_CLASSES: Record<RadioSize, string> = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: "",
  lg: "radio-lg",
};

/**
 * @description Define la clase base compartida por todos los radios.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RADIO_BASE_CLASS = "radio";
