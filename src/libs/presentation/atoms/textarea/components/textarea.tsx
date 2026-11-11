import { memo, useCallback, useId } from "react";
import type { ChangeEvent, FC, JSX } from "react";
import { getTextareaClasses } from "../utils/get-textarea-classes.util";
import { TEXTAREA_DEFAULT_ROWS } from "../constants/textarea.constants";
import type { TextareaProps } from "../types/textarea.types";

/**
 * @description Renderiza el area de texto con las propiedades resueltas.
 * @param props Propiedades del area de texto.
 * @param props.value Valor controlado del area.
 * @param props.placeholder Texto de ayuda del area.
 * @param props.variant Variante visual del area.
 * @param props.size Tamano del area.
 * @param props.rows Numero de filas visibles.
 * @param props.disabled Indica si el area esta deshabilitada.
 * @param props.required Indica si el area es obligatoria.
 * @param props.ariaLabel Etiqueta accesible del area.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Area de texto lista para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const TextareaView = memo(function TextareaView({
  value,
  placeholder,
  variant,
  size,
  rows,
  disabled,
  required,
  ariaLabel,
  className,
  onChange,
}: Required<
  Pick<TextareaProps, "variant" | "size" | "rows" | "disabled" | "className">
> &
  Pick<
    TextareaProps,
    "value" | "placeholder" | "required" | "ariaLabel" | "onChange"
  >): JSX.Element {
  const classes = getTextareaClasses({ variant: variant, size: size });
  const textareaId = useId();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>): void => {
      onChange?.(event.target.value);
    },
    [onChange],
  );

  return (
    <textarea
      aria-label={ariaLabel}
      className={`${classes} ${className}`.trim()}
      disabled={disabled}
      id={textareaId}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      value={value}
    />
  );
});

/**
 * @description Area de texto multilinea con variantes y tamanos DaisyUI,
 * admite clases responsive de Tailwind.
 * @param props Propiedades del area de texto.
 * @param props.value Valor controlado del area.
 * @param props.placeholder Texto de ayuda del area.
 * @param props.variant Variante visual del area.
 * @param props.size Tamano del area.
 * @param props.rows Numero de filas visibles.
 * @param props.disabled Indica si el area esta deshabilitada.
 * @param props.required Indica si el area es obligatoria.
 * @param props.ariaLabel Etiqueta accesible del area.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onChange Callback ejecutado al cambiar el valor.
 * @returns Area de texto lista para renderizar.
 * @example
 * <Textarea rows={4} placeholder="Comentario" onChange={setValue} />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Textarea: FC<TextareaProps> = memo(
  function Textarea(props): JSX.Element {
    return (
      <TextareaView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        disabled={props.disabled ?? false}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required ?? false}
        rows={props.rows ?? TEXTAREA_DEFAULT_ROWS}
        size={props.size ?? "md"}
        value={props.value}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default Textarea;
