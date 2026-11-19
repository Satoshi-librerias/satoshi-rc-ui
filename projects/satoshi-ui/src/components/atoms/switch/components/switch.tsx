import { memo, useCallback, useId } from "react";
import type { ChangeEvent, FC, JSX } from "react";
import { getSwitchClasses } from "../utils/get-switch-classes.util";
import type { SwitchProps } from "../types/switch.types";

/**
 * @description Renderiza el interruptor con las propiedades resueltas.
 * @param props Propiedades del switch.
 * @param props.variant Variante visual del switch.
 * @param props.size Tamano del switch.
 * @param props.isChecked Estado activado del switch.
 * @param props.disabled Indica si el switch esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del switch.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el estado.
 * @returns Switch listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const SwitchView = memo(function SwitchView({
  variant,
  size,
  isChecked,
  disabled,
  ariaLabel,
  className,
  onChange,
}: Required<
  Pick<SwitchProps, "variant" | "size" | "isChecked" | "disabled" | "className">
> &
  Pick<SwitchProps, "ariaLabel" | "onChange">): JSX.Element {
  const classes = getSwitchClasses({ variant: variant, size: size });
  const switchId = useId();

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
      id={switchId}
      onChange={handleChange}
      role="switch"
      type="checkbox"
    />
  );
});

/**
 * @description Interruptor de dos estados con variantes y tamanos DaisyUI,
 * rol ARIA switch y clases responsive de Tailwind.
 * @param props Propiedades del switch.
 * @param props.isChecked Estado activado del switch.
 * @param props.disabled Indica si el switch esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del switch.
 * @param props.onChange Callback ejecutado al cambiar el estado.
 * @param props.variant Variante visual del switch.
 * @param props.size Tamano del switch.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Switch listo para renderizar.
 * @example
 * <Switch isChecked={true} onChange={setEnabled} ariaLabel="Notificaciones" />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Switch: FC<SwitchProps> = memo(
  function Switch(props): JSX.Element {
    return (
      <SwitchView
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

export default Switch;
