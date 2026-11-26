import type { FC, JSX } from "react";
import type { ResponsiveMenuToggleProps } from "../types/responsive-menu.types";
import { RESPONSIVE_MENU_PANEL_ID_PREFIX } from "../constants/responsive-menu.constants";

/**
 * @description Boton que alterna la visibilidad del menu movil con
 * atributos accesibles e icono animado. Usa un objetivo tactil generoso
 * con borde redondeado y estados de hover y foco visibles.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const ResponsiveMenuToggle: FC<ResponsiveMenuToggleProps> = ({
  isOpen,
  openLabel,
  closeLabel,
  onToggle,
  panelId = RESPONSIVE_MENU_PANEL_ID_PREFIX,
}): JSX.Element => {
  const label = isOpen ? closeLabel : openLabel;

  return (
    <button
      aria-controls={panelId}
      aria-expanded={isOpen}
      aria-label={label}
      className="btn btn-circle shrink-0 border border-base-300 bg-base-100/80 text-base-content shadow-sm transition-colors hover:border-primary hover:bg-base-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
      onClick={onToggle}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            d="M18 6 6 18M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
};

export default ResponsiveMenuToggle;
