import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { getAccordionItemClasses } from "../utils/get-accordion-item-classes.util";
import {
  ACCORDION_ITEM_CONTENT_CLASS,
  ACCORDION_ITEM_TITLE_CLASS,
} from "../constants/accordion-item.constants";
import type { AccordionItemProps } from "../types/accordion-item.types";

/**
 * @description Renderiza el elemento de acordeon con las propiedades
 * resueltas.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo del acordeon.
 * @param props.children Contenido colapsable.
 * @param props.isOpen Indica si el acordeon esta abierto.
 * @param props.isDisabled Indica si el acordeon esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del acordeon.
 * @param props.className Clases adicionales configuradas.
 * @param props.onToggle Callback ejecutado al cambiar el estado.
 * @returns Elemento de acordeon listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const AccordionItemView = memo(function AccordionItemView({
  title,
  children,
  isOpen,
  isDisabled,
  ariaLabel,
  className,
  onToggle,
}: Required<
  Pick<AccordionItemProps, "title" | "isOpen" | "isDisabled" | "className">
> &
  Pick<
    AccordionItemProps,
    "children" | "ariaLabel" | "onToggle"
  >): JSX.Element {
  const handleToggle = useCallback(
    (nextIsOpen: boolean): void => {
      onToggle?.(nextIsOpen);
    },
    [onToggle],
  );

  return (
    <div
      aria-label={ariaLabel}
      className={`${getAccordionItemClasses({ isOpen: isOpen, isDisabled: isDisabled })} ${className}`.trim()}
    >
      <input
        aria-expanded={isOpen}
        checked={isOpen}
        disabled={isDisabled}
        onChange={(event): void => handleToggle(event.target.checked)}
        type="checkbox"
      />

      <div className={ACCORDION_ITEM_TITLE_CLASS}>{title}</div>

      <div className={ACCORDION_ITEM_CONTENT_CLASS}>{children}</div>
    </div>
  );
});

/**
 * @description Elemento de acordeon accesible que colapsa contenido bajo
 * un titulo, con estado controlado o no controlado mediante DaisyUI y
 * clases responsive de Tailwind.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo visible del acordeon.
 * @param props.children Contenido colapsable.
 * @param props.isOpen Estado controlado del acordeon; por defecto cerrado.
 * @param props.isDisabled Indica si el acordeon no puede abrirse.
 * @param props.ariaLabel Etiqueta accesible del acordeon.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onToggle Callback ejecutado al cambiar el estado.
 * @returns Elemento de acordeon listo para renderizar.
 * @example
 * <AccordionItem
 *   title={t("faq.shipping")}
 *   isOpen={openId === "shipping"}
 *   onToggle={(isOpen): void => setOpenId(isOpen ? "shipping" : undefined)}
 * >
 *   {t("faq.shippingAnswer")}
 * </AccordionItem>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AccordionItem: FC<AccordionItemProps> = memo(
  function AccordionItem(props): JSX.Element {
    return (
      <AccordionItemView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        isDisabled={props.isDisabled ?? false}
        isOpen={props.isOpen ?? false}
        onToggle={props.onToggle}
        title={props.title}
      >
        {props.children}
      </AccordionItemView>
    );
  },
);

export default AccordionItem;
