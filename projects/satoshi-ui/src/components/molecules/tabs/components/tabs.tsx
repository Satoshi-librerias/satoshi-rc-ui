import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { getTabClasses, getTabsClasses } from "../utils/get-tabs-classes.util";
import type { TabsProps } from "../types/tabs.types";

/**
 * @description Renderiza las pestanas con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.items Pestanas configuradas.
 * @param props.activeId Identificador de la pestana activa.
 * @param props.variant Variante visual.
 * @param props.size Tamano de las pestanas.
 * @param props.ariaLabel Etiqueta accesible del grupo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar de pestana.
 * @returns Pestanas listas para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const TabsView = memo(function TabsView({
  items,
  activeId,
  variant,
  size,
  ariaLabel,
  className,
  onChange,
}: Required<Pick<TabsProps, "variant" | "size" | "className">> &
  Pick<
    TabsProps,
    "items" | "activeId" | "ariaLabel" | "onChange"
  >): JSX.Element {
  const handleSelect = useCallback(
    (id: string): void => {
      onChange?.(id);
    },
    [onChange],
  );

  return (
    <div
      aria-label={ariaLabel}
      className={getTabsClasses({
        className: className,
        size: size,
        variant: variant,
      })}
      role="tablist"
    >
      {items.map((item) => (
        <button
          aria-selected={item.id === activeId}
          className={getTabClasses({
            isActive: item.id === activeId,
            size: size,
          })}
          key={item.id}
          onClick={(): void => handleSelect(item.id)}
          role="tab"
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
});

/**
 * @description Grupo de pestanas accesible con variantes y tamanos DaisyUI
 * y clases responsive de Tailwind.
 * @param props Propiedades de la molecula.
 * @param props.items Pestanas configuradas.
 * @param props.activeId Identificador de la pestana activa.
 * @param props.variant Variante visual (boxed, lifted, bordered, default).
 * @param props.size Tamano de las pestanas.
 * @param props.ariaLabel Etiqueta accesible del grupo.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onChange Callback ejecutado al cambiar de pestana.
 * @returns Pestanas listas para renderizar.
 * @example
 * <Tabs
 *   items={[
 *     { id: "general", label: t("settings.general") },
 *     { id: "security", label: t("settings.security") },
 *   ]}
 *   activeId={tab}
 *   onChange={setTab}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Tabs: FC<TabsProps> = memo(function Tabs(props): JSX.Element {
  const firstItem = props.items.at(0);
  const defaultActiveId = firstItem?.id ?? "";

  return (
    <TabsView
      activeId={props.activeId ?? defaultActiveId}
      ariaLabel={props.ariaLabel}
      className={props.className ?? ""}
      items={props.items}
      onChange={props.onChange}
      size={props.size ?? "md"}
      variant={props.variant ?? "boxed"}
    />
  );
});

export default Tabs;
