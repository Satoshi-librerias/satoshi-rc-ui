import type { CardVariant } from "../types/card.types";

/**
 * @description Define las clases de DaisyUI por variante del card.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CARD_VARIANT_CLASSES: Record<CardVariant, string> = {
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
  neutral: "bg-neutral text-neutral-content",
  base: "bg-base-100",
};

/**
 * @description Define la clase base compartida por todos los cards.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CARD_BASE_CLASS = "card";
