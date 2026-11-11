import { FORM_FIELD_ERROR_CLASS } from "../constants/form-field.constants";
import type { FormFieldClassOptions } from "../types/form-field.types";

/**
 * @description Compone las clases adicionales del campo de entrada sobre
 * las clases y variantes del atomo Input.
 * @param options Opciones visuales del campo.
 * @param options.hasError Indica si el campo muestra un error.
 * @returns Clases adicionales para el atomo Input.
 * @author Steveen Cues
 * @version 1.2.0
 */
export function getFormFieldClasses(options: FormFieldClassOptions): string {
  return options.hasError ? FORM_FIELD_ERROR_CLASS : "";
}
