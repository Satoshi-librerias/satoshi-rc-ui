import type { InputGroupVariant } from "../types/input-group.types";

/**
 * @description Define las clases de DaisyUI por variante del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_GROUP_VARIANT_CLASSES: Record<InputGroupVariant, string> = {
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  ghost: "input-ghost",
};

/**
 * @description Define la clase base del grupo de entrada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_GROUP_BASE_CLASS = "join";

/**
 * @description Define la clase que une el campo al grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_GROUP_JOIN_CLASS = "join-item";

/**
 * @description Define la clase de la etiqueta del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_GROUP_LABEL_CLASS = "mb-1 block text-sm font-medium";

/**
 * @description Define la clase de los textos prefijo y sufijo unidos al
 * campo de entrada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const INPUT_GROUP_SIDE_CLASS = "btn join-item bg-base-200";
