import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import {
  getButtonGroupClasses,
  getButtonGroupItemClasses,
} from "../utils/get-button-group-classes.util";
import type { ButtonGroupProps } from "../types/button-group.types";

/**
 * @description Renderiza el grupo de botones con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.items Botones configurados.
 * @param props.selectedId Identificador del boton seleccionado.
 * @param props.variant Variante visual.
 * @param props.size Tamano de los botones.
 * @param props.ariaLabel Etiqueta accesible del grupo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onSelect Callback ejecutado al seleccionar un boton.
 * @returns Grupo de botones listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ButtonGroupView = memo(function ButtonGroupView({
  items,
  selectedId,
  variant,
  size,
  ariaLabel,
  className,
  onSelect,
}: Required<Pick<ButtonGroupProps, "variant" | "size" | "className">> &
  Pick<
    ButtonGroupProps,
    "items" | "selectedId" | "ariaLabel" | "onSelect"
  >): JSX.Element {
  const handleSelect = useCallback(
    (id: string): void => {
      onSelect?.(id);
    },
    [onSelect],
  );

  return (
    <div aria-label={ariaLabel} className={className} role="group">
      <div className={getButtonGroupClasses({ size: size })}>
        {items.map((item) => (
          <button
            aria-pressed={item.id === selectedId}
            className={getButtonGroupItemClasses({
              isActive: item.id === selectedId,
              size: size,
              variant: variant,
            })}
            key={item.id}
            onClick={(): void => handleSelect(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
});

/**
 * @description Grupo de botones unidos con seleccion, variantes y tamanos
 * DaisyUI y clases responsive de Tailwind.
 * @param props Propiedades de la molecula.
 * @param props.items Botones configurados.
 * @param props.selectedId Identificador del boton seleccionado.
 * @param props.variant Variante visual.
 * @param props.size Tamano de los botones.
 * @param props.ariaLabel Etiqueta accesible del grupo.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onSelect Callback ejecutado al seleccionar un boton.
 * @returns Grupo de botones listo para renderizar.
 * @example
 * <ButtonGroup
 *   items={[
 *     { id: "day", label: t("filters.day") },
 *     { id: "week", label: t("filters.week") },
 *   ]}
 *   selectedId={range}
 *   onSelect={setRange}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ButtonGroup: FC<ButtonGroupProps> = memo(
  function ButtonGroup(props): JSX.Element {
    return (
      <ButtonGroupView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        items={props.items}
        onSelect={props.onSelect}
        selectedId={props.selectedId}
        size={props.size ?? "md"}
        variant={props.variant ?? "neutral"}
      />
    );
  },
);

export default ButtonGroup;
