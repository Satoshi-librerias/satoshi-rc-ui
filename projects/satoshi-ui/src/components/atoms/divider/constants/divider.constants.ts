import type { DividerVariant } from "../types/divider.types";

/**
 * @description Define las clases de DaisyUI por variante del divider.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DIVIDER_VARIANT_CLASSES: Record<DividerVariant, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
};

/**
 * @description Define la clase base compartida por todos los dividers.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DIVIDER_BASE_CLASS = "divider";
