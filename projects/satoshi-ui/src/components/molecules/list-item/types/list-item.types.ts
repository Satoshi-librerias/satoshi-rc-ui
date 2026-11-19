/**
 * @description Define las propiedades de la molecula elemento de lista.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ListItemProps {
  readonly title: string;
  readonly description?: string;
  readonly start?: React.ReactNode;
  readonly end?: React.ReactNode;
  readonly isDisabled?: boolean;
  readonly ariaLabel?: string;
  readonly className?: string;
  readonly onClick?: () => void;
}

/**
 * @description Define las opciones para resolver las clases del elemento
 * de lista.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ListItemClassOptions {
  readonly isDisabled: boolean;
  readonly isInteractive: boolean;
}
