import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Kbd } from "@presentation";
import { getDropdownItemClasses } from "../utils/get-dropdown-item-classes.util";
import type { DropdownItemProps } from "../types/dropdown-item.types";

/**
 * @description Renderiza el elemento de menu con las propiedades resueltas.
 * @param props Propiedades del atomo.
 * @param props.item Elemento del menu.
 * @param props.isSelected Indica si el elemento esta seleccionado.
 * @param props.variant Variante de color.
 * @param props.className Clases adicionales configuradas.
 * @param props.onSelect Callback ejecutado al seleccionar el elemento.
 * @returns Elemento de menu listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const DropdownItemView = memo(function DropdownItemView({
  item,
  isSelected,
  variant,
  className,
  onSelect,
}: Required<
  Pick<DropdownItemProps, "item" | "isSelected" | "variant" | "className">
> &
  Pick<DropdownItemProps, "onSelect">): JSX.Element {
  const handleSelect = useCallback((): void => {
    onSelect?.(item.id);
  }, [item.id, onSelect]);

  return (
    <button
      aria-selected={isSelected}
      className={`${getDropdownItemClasses({ isSelected: isSelected, variant: variant })} ${className}`.trim()}
      onClick={handleSelect}
      role="option"
      type="button"
    >
      <span className="min-w-0 truncate">{item.label}</span>

      {item.shortcut !== undefined && <Kbd size="sm">{item.shortcut}</Kbd>}
    </button>
  );
});

/**
 * @description Elemento de menu desplegable con etiqueta, atajo de teclado
 * opcional que compone el atomo Kbd, estado de seleccion y clases
 * responsive de Tailwind.
 * @param props Propiedades del atomo.
 * @param props.item Elemento del menu con identificador y etiqueta.
 * @param props.isSelected Indica si el elemento esta seleccionado.
 * @param props.variant Variante de color.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onSelect Callback ejecutado al seleccionar el elemento.
 * @returns Elemento de menu listo para renderizar.
 * @example
 * <DropdownItem
 *   item={{ id: "copy", label: t("menu.copy"), shortcut: "Ctrl+C" }}
 *   onSelect={runCommand}
 * />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const DropdownItem: FC<DropdownItemProps> = memo(
  function DropdownItem(props): JSX.Element {
    return (
      <DropdownItemView
        className={props.className ?? ""}
        isSelected={props.isSelected ?? false}
        item={props.item}
        onSelect={props.onSelect}
        variant={props.variant ?? "neutral"}
      />
    );
  },
);

export default DropdownItem;
