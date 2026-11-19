import type { CalloutActionVariant } from "../types/callout-action.types";

/**
 * @description Define las clases de DaisyUI por variante del aviso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CALLOUT_ACTION_VARIANT_CLASSES: Record<
  CalloutActionVariant,
  string
> = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
  neutral: "",
};

/**
 * @description Define la clase base del aviso con accion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CALLOUT_ACTION_BASE_CLASS = "alert";

/**
 * @description Define la clase del mensaje del aviso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CALLOUT_ACTION_MESSAGE_CLASS = "min-w-0 flex-1";

/**
 * @description Define el tamano del boton de accion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CALLOUT_ACTION_BUTTON_SIZE = "sm" as const;
