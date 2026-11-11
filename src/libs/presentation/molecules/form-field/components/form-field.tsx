import { memo, useId } from "react";
import type { FC, JSX } from "react";
import { Input } from "@presentation";
import { getFormFieldClasses } from "../utils/get-form-field-classes.util";
import {
  FORM_FIELD_ERROR_CLASS,
  FORM_FIELD_HINT_CLASS,
  FORM_FIELD_LABEL_CLASS,
  FORM_FIELD_WRAPPER_CLASS,
} from "../constants/form-field.constants";
import type { FormFieldProps } from "../types/form-field.types";

/**
 * @description Renderiza el campo de formulario con etiqueta y error.
 * @param props Propiedades de la molecula.
 * @param props.label Etiqueta visible del campo.
 * @param props.value Valor controlado del campo.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.type Tipo del campo.
 * @param props.hint Texto de ayuda adicional.
 * @param props.errorMessage Mensaje de error del campo.
 * @param props.disabled Indica si el campo esta deshabilitado.
 * @param props.required Indica si el campo es obligatorio.
 * @param props.variant Variante visual del campo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Campo de formulario listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const FormFieldView = memo(function FormFieldView({
  label,
  value,
  placeholder,
  type,
  hint,
  errorMessage,
  disabled,
  required,
  variant,
  className,
  onChange,
}: Required<
  Pick<FormFieldProps, "label" | "variant" | "disabled" | "className">
> &
  Pick<
    FormFieldProps,
    | "value"
    | "placeholder"
    | "type"
    | "hint"
    | "errorMessage"
    | "required"
    | "onChange"
  >): JSX.Element {
  const fieldId = useId();
  const hasError = typeof errorMessage === "string" && errorMessage.length > 0;

  return (
    <div className={`${FORM_FIELD_WRAPPER_CLASS} ${className}`.trim()}>
      <label className={FORM_FIELD_LABEL_CLASS} htmlFor={fieldId}>
        {label}
      </label>

      <Input
        ariaLabel={label}
        className={getFormFieldClasses({ hasError: hasError })}
        disabled={disabled}
        id={fieldId}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        variant={variant}
      />

      {hint !== undefined && !hasError && (
        <p className={FORM_FIELD_HINT_CLASS}>{hint}</p>
      )}

      {hasError && (
        <p
          className={`${FORM_FIELD_HINT_CLASS} ${FORM_FIELD_ERROR_CLASS}`.trim()}
          id={`${fieldId}-error`}
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
});

/**
 * @description Campo de formulario accesible que compone el atomo Input
 * con etiqueta y mensajes de ayuda o error, con variantes DaisyUI y clases
 * responsive de Tailwind. Requiere TranslateProvider para los textos que
 * el consumidor traduce mediante useLanguage.
 * @param props Propiedades de la molecula.
 * @param props.label Etiqueta visible del campo.
 * @param props.value Valor controlado del campo.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.type Tipo del campo (text, email, password, number).
 * @param props.hint Texto de ayuda adicional.
 * @param props.errorMessage Mensaje de error; su presencia marca el error.
 * @param props.disabled Indica si el campo esta deshabilitado.
 * @param props.required Indica si el campo es obligatorio.
 * @param props.variant Variante visual del campo.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Campo de formulario listo para renderizar.
 * @example
 * <FormField
 *   label={t("forms.email")}
 *   type="email"
 *   errorMessage={errors.email}
 *   onChange={setEmail}
 * />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const FormField: FC<FormFieldProps> = memo(
  function FormField(props): JSX.Element {
    return (
      <FormFieldView
        className={props.className ?? ""}
        disabled={props.disabled ?? false}
        errorMessage={props.errorMessage}
        hint={props.hint}
        label={props.label}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type ?? "text"}
        value={props.value}
        required={props.required ?? false}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default FormField;
