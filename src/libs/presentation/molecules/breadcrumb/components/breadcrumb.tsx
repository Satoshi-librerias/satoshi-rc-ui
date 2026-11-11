import { memo } from "react";
import type { FC, JSX } from "react";
import { getBreadcrumbClasses } from "../utils/get-breadcrumb-classes.util";
import { BREADCRUMB_CURRENT_CLASS } from "../constants/breadcrumb.constants";
import type { BreadcrumbProps } from "../types/breadcrumb.types";

/**
 * @description Renderiza la ruta de navegacion con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.items Elementos de la ruta.
 * @param props.ariaLabel Etiqueta accesible de la ruta.
 * @param props.className Clases adicionales configuradas.
 * @returns Ruta de navegacion lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const BreadcrumbView = memo(function BreadcrumbView({
  items,
  ariaLabel,
  className,
}: Required<Pick<BreadcrumbProps, "items" | "className">> &
  Pick<BreadcrumbProps, "ariaLabel">): JSX.Element {
  return (
    <nav
      aria-label={ariaLabel}
      className={getBreadcrumbClasses({ className: className })}
    >
      <ul>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index.toString()}`}>
              {item.href !== undefined && !isLast ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? BREADCRUMB_CURRENT_CLASS : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

/**
 * @description Ruta de navegacion jerarquica con DaisyUI y clases
 * responsive de Tailwind. El ultimo elemento se marca como pagina actual.
 * @param props Propiedades de la molecula.
 * @param props.items Elementos de la ruta con etiqueta y enlace opcional.
 * @param props.ariaLabel Etiqueta accesible de la ruta.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Ruta de navegacion lista para renderizar.
 * @example
 * <Breadcrumb
 *   items={[
 *     { label: t("nav.home"), href: "/" },
 *     { label: t("nav.settings"), href: "/settings" },
 *     { label: t("nav.profile") },
 *   ]}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Breadcrumb: FC<BreadcrumbProps> = memo(
  function Breadcrumb(props): JSX.Element {
    return (
      <BreadcrumbView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        items={props.items}
      />
    );
  },
);

export default Breadcrumb;
