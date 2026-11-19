import {
  CARD_BASE_CLASS,
  CARD_VARIANT_CLASSES,
} from "../constants/card.constants";
import type { CardProps } from "../types/card.types";

/**
 * @description Define las opciones para resolver las clases del card.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CardClassOptions {
  readonly variant: NonNullable<CardProps["variant"]>;
}

/**
 * @description Compone las clases del card segun su configuracion.
 * @param options Opciones visuales del card.
 * @param options.variant Variante visual.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getCardClasses(options: CardClassOptions): string {
  const classes: readonly string[] = [
    CARD_BASE_CLASS,
    CARD_VARIANT_CLASSES[options.variant],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
