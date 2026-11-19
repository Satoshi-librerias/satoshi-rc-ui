import type { KbdSize, KbdVariant } from "../types/kbd.types";

/**
 * @description Define las clases de DaisyUI por variante del kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const KBD_VARIANT_CLASSES: Record<KbdVariant, string> = {
  primary: "kbd-primary",
  secondary: "kbd-secondary",
  accent: "kbd-accent",
  neutral: "kbd-neutral",
};

/**
 * @description Define las clases de DaisyUI por tamano del kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const KBD_SIZE_CLASSES: Record<KbdSize, string> = {
  xs: "kbd-xs",
  sm: "kbd-sm",
  md: "",
  lg: "kbd-lg",
};

/**
 * @description Define la clase base compartida por todos los kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const KBD_BASE_CLASS = "kbd";
