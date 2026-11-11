import { memo, useId } from "react";
import type { FC, JSX } from "react";
import { Input } from "@presentation";
import { getInputGroupWrapperClasses } from "../utils/get-input-group-classes.util";
import {
  INPUT_GROUP_JOIN_CLASS,
  INPUT_GROUP_LABEL_CLASS,
  INPUT_GROUP_SIDE_CLASS,
} from "../constants/input-group.constants";
import type { InputGroupProps } from "../types/input-group.types";

/**
 * @description Renderiza el grupo de entrada con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.label Etiqueta accesible opcional.
 * @param props.prefix Texto prefijo del campo.
 * @param props.suffix Texto sufijo del campo.
 * @param props.value Valor controlado del campo.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.type Tipo del campo.
 * @param props.disabled Indica si el campo esta deshabilitado.
 * @param props.variant Variante visual del campo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Grupo de entrada listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const InputGroupView = memo(function InputGroupView({
  label,
  prefix,
  suffix,
  value,
  placeholder,
  type,
  disabled,
  variant,
  className,
  onChange,
}: Required<Pick<InputGroupProps, "variant" | "disabled" | "className">> &
  Pick<
    InputGroupProps,
    | "label"
    | "prefix"
    | "suffix"
    | "value"
    | "placeholder"
    | "type"
    | "onChange"
  >): JSX.Element {
  const fieldId = useId();

  return (
    <div className={`w-full ${className}`.trim()}>
      {label !== undefined && (
        <label className={INPUT_GROUP_LABEL_CLASS} htmlFor={fieldId}>
          {label}
        </label>
      )}

      <div className={getInputGroupWrapperClasses()}>
        {prefix !== undefined && (
          <span className={INPUT_GROUP_SIDE_CLASS}>{prefix}</span>
        )}

        <Input
          ariaLabel={label}
          className={INPUT_GROUP_JOIN_CLASS}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
          variant={variant}
        />

        {suffix !== undefined && (
          <span className={INPUT_GROUP_SIDE_CLASS}>{suffix}</span>
        )}
      </div>
    </div>
  );
});

/**
 * @description Campo de entrada que compone el atomo Input con prefijo y
 * sufijo unidos, mediante DaisyUI y clases responsive de Tailwind.
 * @param props Propiedades de la molecula.
 * @param props.label Etiqueta accesible opcional.
 * @param props.prefix Texto prefijo del campo, por ejemplo una moneda.
 * @param props.suffix Texto sufijo del campo, por ejemplo una unidad.
 * @param props.value Valor controlado del campo.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.type Tipo del campo (text, number, email).
 * @param props.disabled Indica si el campo esta deshabilitado.
 * @param props.variant Variante visual del campo.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Grupo de entrada listo para renderizar.
 * @example
 * <InputGroup
 *   label={t("products.price")}
 *   prefix="$"
 *   type="number"
 *   value={price}
 *   onChange={setPrice}
 * />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const InputGroup: FC<InputGroupProps> = memo(
  function InputGroup(props): JSX.Element {
    return (
      <InputGroupView
        className={props.className ?? ""}
        disabled={props.disabled ?? false}
        label={props.label}
        onChange={props.onChange}
        placeholder={props.placeholder}
        prefix={props.prefix}
        suffix={props.suffix}
        type={props.type ?? "text"}
        value={props.value}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default InputGroup;
