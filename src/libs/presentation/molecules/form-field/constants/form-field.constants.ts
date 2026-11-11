import type { FormFieldVariant } from "../types/form-field.types";

/**
 * @description Define las clases de DaisyUI por variante del campo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const FORM_FIELD_VARIANT_CLASSES: Record<FormFieldVariant, string> = {
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  ghost: "input-ghost",
};

/**
/**
 * @description Define la clase del contenedor del campo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const FORM_FIELD_WRAPPER_CLASS = "w-full";

/**
 * @description Define la clase de la etiqueta del campo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const FORM_FIELD_LABEL_CLASS = "mb-1 block text-sm font-medium";

/**
 * @description Define la clase de los mensajes de ayuda o error.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const FORM_FIELD_HINT_CLASS = "mt-1 text-xs";

/**
 * @description Define la clase del mensaje de error del campo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const FORM_FIELD_ERROR_CLASS = "text-error";
