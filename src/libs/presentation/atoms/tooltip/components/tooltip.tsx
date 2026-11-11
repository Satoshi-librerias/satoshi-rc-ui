import { memo } from "react";
import type { FC, JSX } from "react";
import { getTooltipClasses } from "../utils/get-tooltip-classes.util";
import type { TooltipProps } from "../types/tooltip.types";

const PLACEMENT_CLASSES = {
  top: "tooltip-top",
  bottom: "tooltip-bottom",
  left: "tooltip-left",
  right: "tooltip-right",
} as const;

/**
 * @description Renderiza el tooltip con las propiedades ya resueltas.
 * @param props Propiedades del tooltip.
 * @param props.children Contenido que activa el tooltip.
 * @param props.message Mensaje mostrado al activar el tooltip.
 * @param props.placement Posicion del tooltip.
 * @param props.variant Variante visual del tooltip.
 * @param props.className Clases adicionales configuradas.
 * @returns Tooltip listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const TooltipView = memo(function TooltipView({
  children,
  message,
  placement,
  variant,
  className,
}: Required<Pick<TooltipProps, "placement" | "variant" | "className">> &
  Pick<TooltipProps, "children" | "message">): JSX.Element {
  const classes = getTooltipClasses({ variant: variant });

  return (
    <div
      className={`${classes} ${PLACEMENT_CLASSES[placement]} ${className}`.trim()}
      data-tip={message}
    >
      {children}
    </div>
  );
});

/**
 * @description Mensaje flotante al mantener el cursor sobre el contenido con
 * variantes DaisyUI y clases responsive de Tailwind.
 * @param props Propiedades del tooltip.
 * @param props.children Contenido que activa el tooltip.
 * @param props.message Mensaje mostrado al activar el tooltip.
 * @param props.placement Posicion del tooltip.
 * @param props.variant Variante visual del tooltip.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Tooltip listo para renderizar.
 * @example
 * <Tooltip message="Guardar cambios" placement="top">
 *   <Button>Guardar</Button>
 * </Tooltip>
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Tooltip: FC<TooltipProps> = memo(
  function Tooltip(props): JSX.Element {
    return (
      <TooltipView
        className={props.className ?? ""}
        message={props.message}
        placement={props.placement ?? "top"}
        variant={props.variant ?? "neutral"}
      >
        {props.children}
      </TooltipView>
    );
  },
);

export default Tooltip;
