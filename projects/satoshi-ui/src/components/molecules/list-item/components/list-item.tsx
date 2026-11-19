import { memo, useCallback } from "react";
import type { FC, JSX, KeyboardEvent } from "react";
import { getListItemClasses } from "../utils/get-list-item-classes.util";
import {
  LIST_ITEM_DESCRIPTION_CLASS,
  LIST_ITEM_TITLE_CLASS,
} from "../constants/list-item.constants";
import type { ListItemProps } from "../types/list-item.types";

/**
 * @description Define las propiedades visuales resueltas del elemento.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface ListItemViewProps {
  readonly title: string;
  readonly description: string | undefined;
  readonly start: React.ReactNode;
  readonly end: React.ReactNode;
  readonly isDisabled: boolean;
  readonly ariaLabel: string | undefined;
  readonly className: string;
  readonly isInteractive: boolean;
  readonly handleClick: () => void;
}

/**
 * @description Responde a Enter y Espacio en el elemento interactivo.
 * @param event Evento de teclado.
 * @param activate Accion ejecutada al activar el elemento.
 * @author Steveen Cues
 * @version 1.0.0
 */
function handleKeyDown(
  event: KeyboardEvent<HTMLDivElement>,
  activate: () => void,
): void {
  if (event.key === "Enter" || event.key === " ") {
    activate();
  }
}

/**
 * @description Resuelve los atributos interactivos del elemento de lista.
 * @param isFocusable Indica si el elemento es enfocable y activable.
 * @param activate Accion ejecutada al activar el elemento.
 * @returns Propiedades de interaccion para el contenedor.
 * @author Steveen Cues
 * @version 1.0.0
 */
function getInteractiveProps(
  isFocusable: boolean,
  activate: () => void,
): {
  onClick: (() => void) | undefined;
  onKeyDown: ((event: KeyboardEvent<HTMLDivElement>) => void) | undefined;
  tabIndex: number | undefined;
} {
  if (!isFocusable) {
    return { onClick: undefined, onKeyDown: undefined, tabIndex: undefined };
  }

  return {
    onClick: activate,
    onKeyDown: (event): void => handleKeyDown(event, activate),
    tabIndex: 0,
  };
}

/**
 * @description Renderiza el elemento de lista con las propiedades
 * resueltas.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo del elemento.
 * @param props.description Descripcion opcional.
 * @param props.start Contenido inicial, normalmente un Avatar o Icono.
 * @param props.end Contenido final, normalmente una accion o Badge.
 * @param props.isDisabled Indica si el elemento esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del elemento.
 * @param props.className Clases adicionales configuradas.
 * @param props.isInteractive Indica si el elemento responde al clic.
 * @param props.handleClick Accion ejecutada al activar el elemento.
 * @returns Elemento de lista listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ListItemView = memo(function ListItemView({
  title,
  description,
  start,
  end,
  isDisabled,
  ariaLabel,
  className,
  isInteractive,
  handleClick,
}: ListItemViewProps): JSX.Element {
  const isFocusable = isInteractive && !isDisabled;
  const interactiveProps = getInteractiveProps(isFocusable, handleClick);

  return (
    <div
      aria-disabled={isDisabled || undefined}
      aria-label={ariaLabel}
      className={`${getListItemClasses({ isDisabled: isDisabled, isInteractive: isInteractive })} ${className}`.trim()}
      role={isInteractive ? "button" : undefined}
      {...interactiveProps}
    >
      {start !== undefined && <div className="shrink-0">{start}</div>}

      <div className="min-w-0 flex-1">
        <p className={LIST_ITEM_TITLE_CLASS}>{title}</p>

        {description !== undefined && (
          <p className={LIST_ITEM_DESCRIPTION_CLASS}>{description}</p>
        )}
      </div>

      {end !== undefined && <div className="shrink-0">{end}</div>}
    </div>
  );
});

/**
 * @description Fila generica de lista accesible con titulo, descripcion y
 * ranuras para contenido inicial y final; compone atoms como Avatar,
 * Badge o Button en sus ranuras. Incluye clases responsive de Tailwind.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo del elemento.
 * @param props.description Descripcion opcional bajo el titulo.
 * @param props.start Contenido inicial, normalmente un Avatar o Icono.
 * @param props.end Contenido final, normalmente una accion o Badge.
 * @param props.isDisabled Indica si el elemento esta deshabilitado.
 * @param props.ariaLabel Etiqueta accesible del elemento.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onClick Callback ejecutado al hacer clic; su presencia
 * hace el elemento interactivo y enfocable por teclado.
 * @returns Elemento de lista listo para renderizar.
 * @example
 * <ListItem
 *   title={t("users.name")}
 *   description={t("users.lastSeen")}
 *   start={<Avatar initials="SC" />}
 *   end={<Badge variant="success">{t("users.active")}</Badge>}
 *   onClick={openProfile}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ListItem: FC<ListItemProps> = memo(
  function ListItem(props): JSX.Element {
    const { onClick } = props;
    const isInteractive = onClick !== undefined;

    const handleClick = useCallback((): void => {
      onClick?.();
    }, [onClick]);

    return (
      <ListItemView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        description={props.description}
        end={props.end}
        handleClick={handleClick}
        isDisabled={props.isDisabled ?? false}
        isInteractive={isInteractive}
        start={props.start}
        title={props.title}
      />
    );
  },
);

export default ListItem;
