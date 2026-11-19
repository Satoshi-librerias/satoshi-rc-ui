import type { FC, JSX } from "react";
import { getDividerClasses } from "../utils/get-divider-classes.util";
import type { DividerProps } from "../types/divider.types";

/**
 * @description Renderiza el separador con las propiedades ya resueltas.
 * @param props Propiedades del separador.
 * @param props.children Texto opcional centrado en el separador.
 * @param props.orientation Orientacion del separador.
 * @param props.className Clases adicionales configuradas.
 * @returns Separador listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
function DividerView({
  children,
  orientation,
  className,
}: Required<Pick<DividerProps, "orientation" | "className">> &
  Pick<DividerProps, "children">): JSX.Element {
  const classes = getDividerClasses({
    orientation: orientation,
    variant: "neutral",
  });

  return (
    <div
      aria-orientation={orientation}
      className={`${classes} ${className}`.trim()}
      role="separator"
    >
      {children}
    </div>
  );
}

/**
 * @description Separador horizontal o vertical con texto opcional y clases
 * responsive de Tailwind.
 * @param props Propiedades del separador.
 * @param props.children Texto opcional centrado en el separador.
 * @param props.orientation Orientacion del separador.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Separador listo para renderizar.
 * @example
 * <Divider>o</Divider>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Divider: FC<DividerProps> = (props): JSX.Element => {
  return (
    <DividerView
      className={props.className ?? ""}
      orientation={props.orientation ?? "horizontal"}
    >
      {props.children}
    </DividerView>
  );
};

export default Divider;
