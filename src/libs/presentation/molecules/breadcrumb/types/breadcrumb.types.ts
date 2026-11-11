/**
 * @description Define un elemento de la ruta de navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface BreadcrumbItem {
  readonly label: string;
  readonly href?: string;
}

/**
 * @description Define las propiedades de la molecula ruta de navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface BreadcrumbProps {
  readonly items: readonly BreadcrumbItem[];
  readonly ariaLabel?: string;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases de la ruta.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface BreadcrumbClassOptions {
  readonly className: string;
}
