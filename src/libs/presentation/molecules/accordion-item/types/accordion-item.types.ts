/**
 * @description Define las propiedades de la molecula elemento de acordeon.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AccordionItemProps {
  readonly title: string;
  readonly children: React.ReactNode;
  readonly isOpen?: boolean;
  readonly isDisabled?: boolean;
  readonly ariaLabel?: string;
  readonly className?: string;
  readonly onToggle?: (isOpen: boolean) => void;
}

/**
 * @description Define las opciones para resolver las clases del acordeon.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AccordionItemClassOptions {
  readonly isOpen: boolean;
  readonly isDisabled: boolean;
}
