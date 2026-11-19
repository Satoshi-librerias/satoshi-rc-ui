import type { TooltipVariant } from "../types/tooltip.types";

/**
 * @description Define las clases de DaisyUI por variante del tooltip.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TOOLTIP_VARIANT_CLASSES: Record<TooltipVariant, string> = {
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  neutral: "tooltip-neutral",
};

/**
 * @description Define la clase base compartida por todos los tooltips.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TOOLTIP_BASE_CLASS = "tooltip";
