import { memo } from "react";
import type { FC, JSX } from "react";
import { getBadgeClasses } from "../utils/get-badge-classes.util";
import type { BadgeProps } from "../types/badge.types";

/**
 * @description Renderiza el badge con las propiedades ya resueltas.
 * @param props Propiedades del badge.
 * @param props.children Contenido del badge.
 * @param props.variant Variante visual del badge.
 * @param props.size Tamano del badge.
 * @param props.isOutlined Indica si usa el estilo con borde.
 * @param props.ariaLabel Etiqueta accesible del badge.
 * @param props.className Clases adicionales configuradas.
 * @returns Badge listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const BadgeView = memo(function BadgeView({
  children,
  variant,
  size,
  isOutlined,
  ariaLabel,
  className,
}: Required<Pick<BadgeProps, "variant" | "size" | "isOutlined" | "className">> &
  Pick<BadgeProps, "children" | "ariaLabel">): JSX.Element {
  const classes = getBadgeClasses({
    variant: variant,
    size: size,
    isOutlined: isOutlined,
  });

  return (
    <span aria-label={ariaLabel} className={`${classes} ${className}`.trim()}>
      {children}
    </span>
  );
});

/**
 * @description Etiqueta compacta para estados, contadores y categorias con
 * variantes visuales de DaisyUI y clases responsive adicionales.
 * @param props Propiedades del badge.
 * @param props.children Contenido del badge.
 * @param props.variant Variante visual del badge.
 * @param props.size Tamano del badge.
 * @param props.isOutlined Indica si usa el estilo con borde.
 * @param props.ariaLabel Etiqueta accesible del badge.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Badge listo para renderizar.
 * @example
 * <Badge variant="success" size="sm">Activo</Badge>
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Badge: FC<BadgeProps> = memo(function Badge(props): JSX.Element {
  return (
    <BadgeView
      ariaLabel={props.ariaLabel}
      className={props.className ?? ""}
      isOutlined={props.isOutlined ?? false}
      size={props.size ?? "md"}
      variant={props.variant ?? "primary"}
    >
      {props.children}
    </BadgeView>
  );
});

export default Badge;
