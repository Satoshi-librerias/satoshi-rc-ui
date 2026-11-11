/**
 * @description Define las propiedades de la molecula estado vacio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface EmptyStateProps {
  readonly title: string;
  readonly description?: string;
  readonly icon?: React.ReactNode;
  readonly action?: React.ReactNode;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del estado vacio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface EmptyStateClassOptions {
  readonly className: string;
}
