import { memo, useCallback, useId } from "react";
import type { ChangeEvent, FC, JSX } from "react";
import { getCheckboxClasses } from "../utils/get-checkbox-classes.util";
import type { CheckboxProps } from "../types/checkbox.types";

/**
 * @description Renderiza el checkbox con las propiedades ya resueltas.
 * @param props Propiedades del checkbox.
 * @param props.variant Variante visual del checkbox.
 * @param props.size Tamano del checkbox.
 * @param props.isChecked Estado marcado del checkbox.
 * @param props.disabled Indica si el checkbox esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del checkbox.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el estado.
 * @returns Checkbox listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const CheckboxView = memo(function CheckboxView({
  variant,
  size,
  isChecked,
  disabled,
  ariaLabel,
  className,
  onChange,
}: Required<
  Pick<
    CheckboxProps,
    "variant" | "size" | "isChecked" | "disabled" | "className"
  >
> &
  Pick<CheckboxProps, "ariaLabel" | "onChange">): JSX.Element {
  const classes = getCheckboxClasses({ variant: variant, size: size });
  const checkboxId = useId();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(event.target.checked);
    },
    [onChange],
  );

  return (
    <input
      aria-label={ariaLabel}
      checked={isChecked}
      className={`${classes} ${className}`.trim()}
      disabled={disabled}
      id={checkboxId}
      onChange={handleChange}
      type="checkbox"
    />
  );
});

/**
 * @description Casilla de verificacion con variantes y tamanos DaisyUI,
 * admite clases responsive de Tailwind.
 * @param props Propiedades del checkbox.
 * @param props.variant Variante visual del checkbox.
 * @param props.size Tamano del checkbox.
 * @param props.isChecked Estado marcado del checkbox.
 * @param props.disabled Indica si el checkbox esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del checkbox.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onChange Callback ejecutado al cambiar el estado.
 * @returns Checkbox listo para renderizar.
 * @example
 * <Checkbox isChecked={true} onChange={setChecked} ariaLabel="Aceptar" />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Checkbox: FC<CheckboxProps> = memo(
  function Checkbox(props): JSX.Element {
    return (
      <CheckboxView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        disabled={props.disabled ?? false}
        isChecked={props.isChecked ?? false}
        onChange={props.onChange}
        size={props.size ?? "md"}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default Checkbox;
