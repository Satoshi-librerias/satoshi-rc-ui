import { memo } from "react";
import type { FC, JSX } from "react";
import { getEmptyStateClasses } from "../utils/get-empty-state-classes.util";
import {
  EMPTY_STATE_DESCRIPTION_CLASS,
  EMPTY_STATE_TITLE_CLASS,
} from "../constants/empty-state.constants";
import type { EmptyStateProps } from "../types/empty-state.types";

/**
 * @description Renderiza el estado vacio con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo del estado vacio.
 * @param props.description Descripcion opcional.
 * @param props.icon Icono opcional.
 * @param props.action Accion opcional.
 * @param props.className Clases adicionales configuradas.
 * @returns Estado vacio listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const EmptyStateView = memo(function EmptyStateView({
  title,
  description,
  icon,
  action,
  className,
}: Required<Pick<EmptyStateProps, "title" | "className">> &
  Pick<EmptyStateProps, "description" | "icon" | "action">): JSX.Element {
  return (
    <div
      className={getEmptyStateClasses({ className: className })}
      role="status"
    >
      {icon !== undefined && <div aria-hidden="true">{icon}</div>}

      <p className={EMPTY_STATE_TITLE_CLASS}>{title}</p>

      {description !== undefined && (
        <p className={EMPTY_STATE_DESCRIPTION_CLASS}>{description}</p>
      )}

      {action !== undefined && <div className="mt-2">{action}</div>}
    </div>
  );
});

/**
 * @description Estado vacio con titulo, descripcion, icono y accion
 * opcional, mediante DaisyUI y clases responsive de Tailwind.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo del estado vacio.
 * @param props.description Descripcion opcional.
 * @param props.icon Icono opcional.
 * @param props.action Accion opcional, normalmente un Button.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Estado vacio listo para renderizar.
 * @example
 * <EmptyState
 *   title={t("empty.title")}
 *   description={t("empty.description")}
 *   action={<Button>{t("empty.create")}</Button>}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const EmptyState: FC<EmptyStateProps> = memo(
  function EmptyState(props): JSX.Element {
    return (
      <EmptyStateView
        action={props.action}
        className={props.className ?? ""}
        description={props.description}
        icon={props.icon}
        title={props.title}
      />
    );
  },
);

export default EmptyState;
