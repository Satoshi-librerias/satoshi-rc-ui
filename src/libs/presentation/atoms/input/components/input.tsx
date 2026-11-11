import { memo, useCallback, useId } from "react";
import type { ChangeEvent, FC, JSX } from "react";
import { getInputClasses } from "../utils/get-input-classes.util";
import type { InputProps } from "../types/input.types";

/**
 * @description Renderiza el campo de texto con las propiedades resueltas.
 * @param props Propiedades del campo.
 * @param props.value Valor controlado del campo.
 * @param props.id Identificador del campo.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.type Tipo del campo.
 * @param props.variant Variante visual del campo.
 * @param props.size Tamano del campo.
 * @param props.disabled Indica si el campo esta deshabilitado.
 * @param props.required Indica si el campo es obligatorio.
 * @param props.ariaLabel Etiqueta accesible del campo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Campo listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const InputView = memo(function InputView({
  id,
  value,
  placeholder,
  type,
  variant,
  size,
  disabled,
  required,
  ariaLabel,
  className,
  onChange,
}: Required<
  Pick<InputProps, "type" | "variant" | "size" | "disabled" | "className">
> &
  Pick<
    InputProps,
    "id" | "value" | "placeholder" | "required" | "ariaLabel" | "onChange"
  >): JSX.Element {
  const classes = getInputClasses({ variant: variant, size: size });
  const inputId = useId();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(event.target.value);
    },
    [onChange],
  );

  return (
    <input
      aria-label={ariaLabel}
      className={`${classes} ${className}`.trim()}
      data-input-id={inputId}
      disabled={disabled}
      id={id ?? inputId}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
    />
  );
});

/**
 * @description Campo de texto con variantes y tamanos DaisyUI, admite clases
 * responsive de Tailwind para el ancho y padding. Memoizado y con
 * identificador unico estable para accesibilidad.
 * @param props Propiedades del campo.
 * @param props.value Valor controlado del campo.
 * @param props.id Identificador del campo.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.type Tipo del campo (text, email, password, number).
 * @param props.variant Variante visual del campo.
 * @param props.size Tamano del campo.
 * @param props.disabled Indica si el campo esta deshabilitado.
 * @param props.required Indica si el campo es obligatorio.
 * @param props.ariaLabel Etiqueta accesible del campo.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Campo listo para renderizar.
 * @example
 * <Input placeholder="Nombre" variant="primary" onChange={setValue} />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Input: FC<InputProps> = memo(function Input(props): JSX.Element {
  return (
    <InputView
      ariaLabel={props.ariaLabel}
      className={props.className ?? ""}
      disabled={props.disabled ?? false}
      id={props.id}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required ?? false}
      size={props.size ?? "md"}
      type={props.type ?? "text"}
      value={props.value}
      variant={props.variant ?? "primary"}
    />
  );
});

export default Input;
