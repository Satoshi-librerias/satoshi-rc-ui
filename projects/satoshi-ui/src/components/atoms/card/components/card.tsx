import { memo } from "react";
import type { FC, JSX } from "react";
import { getCardClasses } from "../utils/get-card-classes.util";
import type { CardProps } from "../types/card.types";

/**
 * @description Renderiza la tarjeta con las propiedades ya resueltas.
 * @param props Propiedades de la tarjeta.
 * @param props.children Contenido de la tarjeta.
 * @param props.variant Variante visual de la tarjeta.
 * @param props.className Clases adicionales configuradas.
 * @returns Tarjeta lista para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const CardView = memo(function CardView({
  children,
  variant,
  className,
}: Required<Pick<CardProps, "variant" | "className">> &
  Pick<CardProps, "children">): JSX.Element {
  const classes = getCardClasses({ variant: variant });

  return <div className={`${classes} ${className}`.trim()}>{children}</div>;
});

/**
 * @description Contenedor de contenido con fondo, borde y sombra DaisyUI,
 * admite clases responsive de Tailwind para el layout interno.
 * @param props Propiedades de la tarjeta.
 * @param props.children Contenido de la tarjeta.
 * @param props.variant Variante visual de la tarjeta.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Tarjeta lista para renderizar.
 * @example
 * <Card variant="base" className="p-4 md:p-6">Contenido</Card>
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Card: FC<CardProps> = memo(function Card(props): JSX.Element {
  return (
    <CardView
      className={props.className ?? ""}
      variant={props.variant ?? "base"}
    >
      {props.children}
    </CardView>
  );
});

export default Card;
