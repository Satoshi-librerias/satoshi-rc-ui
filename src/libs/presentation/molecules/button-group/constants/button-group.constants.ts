import type {
  ButtonGroupSize,
  ButtonGroupVariant,
} from "../types/button-group.types";

/**
 * @description Define las clases de DaisyUI por variante del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_GROUP_VARIANT_CLASSES: Record<ButtonGroupVariant, string> =
  {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    neutral: "btn-neutral",
    ghost: "btn-ghost",
  };

/**
 * @description Define las clases de DaisyUI por tamano del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_GROUP_SIZE_CLASSES: Record<ButtonGroupSize, string> = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

/**
 * @description Define la clase base del grupo de botones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_GROUP_BASE_CLASS = "join";

/**
 * @description Define la clase del boton activo del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BUTTON_GROUP_ACTIVE_CLASS = "btn-active";
