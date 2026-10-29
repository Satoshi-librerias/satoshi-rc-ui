import { cloneElement, isValidElement, useCallback } from "react";
import type { FC, JSX, MouseEvent as ReactMouseEvent } from "react";
import { useLanguage } from "@aplicacion";
import { ResponsiveMenuPanel } from "./responsive-menu-panel";
import { ResponsiveMenuToggle } from "./responsive-menu-toggle";
import { useResponsiveMenu } from "../hooks/use-responsive-menu.hook";
import { translateResponsiveMenuLabels } from "../utils/translate-responsive-menu-labels.util";
import type { ResponsiveMenuProps } from "../types/responsive-menu.types";

interface ToggleElementProps {
  readonly onClick?: (event: ReactMouseEvent) => void;
}

/**
 * @description Menu responsive que gestiona la navegacion en pantallas
 * pequenas y grandes. El contenido se muestra horizontal en escritorio
 * y dentro de un panel colapsable en movil. Acepta un toggle por defecto
 * o uno personalizado; en ese caso el estado puede controlarse desde
 * fuera con las propiedades isOpen y onToggle.
 * @example
 * <ResponsiveMenu
 *   isOpen={isOpen}
 *   onToggle={() => setIsOpen((open) => !open)}
 *   toggle={<button type="button">Abrir menu</button>}
 * >
 *   <Navigation items={items} orientation="vertical" />
 * </ResponsiveMenu>
 * @author Steveen Cues
 * @version 1.1.0
 */
export const ResponsiveMenu: FC<ResponsiveMenuProps> = ({
  toggle,
  children,
  labels,
  className = "",
  isOpen: controlledIsOpen,
  onToggle,
}): JSX.Element => {
  const { t } = useLanguage();
  const { isOpen: internalIsOpen, panelId, toggleMenu } = useResponsiveMenu();
  const menuLabels = translateResponsiveMenuLabels(labels, t);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleToggle = useCallback((): void => {
    if (isControlled) {
      onToggle?.();
      return;
    }

    toggleMenu();
  }, [isControlled, onToggle, toggleMenu]);

  const renderToggle = (): JSX.Element => {
    if (toggle === undefined) {
      return (
        <ResponsiveMenuToggle
          closeLabel={menuLabels.close}
          isOpen={isOpen}
          onToggle={handleToggle}
          openLabel={menuLabels.open}
          panelId={panelId}
        />
      );
    }

    if (isValidElement<ToggleElementProps>(toggle)) {
      return cloneElement(toggle, {
        onClick: (event: ReactMouseEvent): void => {
          toggle.props.onClick?.(event);
          if (event.defaultPrevented) return;
          handleToggle();
        },
      });
    }

    return <>{toggle}</>;
  };

  return (
    <div className={`w-full ${className}`.trim()}>
      {renderToggle()}

      <ResponsiveMenuPanel id={panelId} isOpen={isOpen}>
        {children}
      </ResponsiveMenuPanel>
    </div>
  );
};

export default ResponsiveMenu;
