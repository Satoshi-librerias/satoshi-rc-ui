import { memo, useCallback, useId } from "react";
import type { ChangeEvent, FC, JSX } from "react";
import { getRadioClasses } from "../utils/get-radio-classes.util";
import type { RadioProps } from "../types/radio.types";

/**
 * @description Renderiza el boton de opcion con las propiedades resueltas.
 * @param props Propiedades del radio.
 * @param props.name Nombre del grupo de opciones.
 * @param props.value Valor de la opcion.
 * @param props.variant Variante visual del radio.
 * @param props.size Tamano del radio.
 * @param props.isChecked Estado marcado del radio.
 * @param props.disabled Indica si el radio esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del radio.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar la seleccion.
 * @returns Radio listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const RadioView = memo(function RadioView({
  name,
  value,
  variant,
  size,
  isChecked,
  disabled,
  ariaLabel,
  className,
  onChange,
}: Required<
  Pick<
    RadioProps,
    "name" | "variant" | "size" | "isChecked" | "disabled" | "className"
  >
> &
  Pick<RadioProps, "value" | "ariaLabel" | "onChange">): JSX.Element {
  const classes = getRadioClasses({ variant: variant, size: size });
  const radioId = useId();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(event.target.value);
    },
    [onChange],
  );

  return (
    <input
      aria-label={ariaLabel}
      checked={isChecked}
      className={`${classes} ${className}`.trim()}
      disabled={disabled}
      id={radioId}
      name={name}
      onChange={handleChange}
      type="radio"
      value={value}
    />
  );
});

/**
 * @description Boton de opcion con variantes y tamanos DaisyUI, admite
 * clases responsive de Tailwind.
 * @param props Propiedades del radio.
 * @param props.name Nombre del grupo de opciones.
 * @param props.value Valor de la opcion.
 * @param props.isChecked Estado marcado del radio.
 * @param props.disabled Indica si el radio esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del radio.
 * @param props.onChange Callback ejecutado al cambiar la seleccion.
 * @param props.variant Variante visual del radio.
 * @param props.size Tamano del radio.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Radio listo para renderizar.
 * @example
 * <Radio name="plan" value="pro" ariaLabel="Plan pro" onChange={setPlan} />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Radio: FC<RadioProps> = memo(function Radio(props): JSX.Element {
  return (
    <RadioView
      ariaLabel={props.ariaLabel}
      className={props.className ?? ""}
      disabled={props.disabled ?? false}
      isChecked={props.isChecked ?? false}
      name={props.name}
      onChange={props.onChange}
      size={props.size ?? "md"}
      value={props.value}
      variant={props.variant ?? "primary"}
    />
  );
});

export default Radio;
