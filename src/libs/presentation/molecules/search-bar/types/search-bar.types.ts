/**
 * @description Define las variantes visuales de la barra de busqueda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SearchBarVariant = "primary" | "secondary" | "accent" | "ghost";

/**
 * @description Define los tamanos disponibles de la barra de busqueda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SearchBarSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define las propiedades de la molecula barra de busqueda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SearchBarProps {
  readonly value?: string;
  readonly placeholder?: string;
  readonly ariaLabel?: string;
  readonly disabled?: boolean;
  readonly variant?: SearchBarVariant;
  readonly size?: SearchBarSize;
  readonly className?: string;
  readonly onChange?: (value: string) => void;
  readonly onSubmit?: (value: string) => void;
}

/**
 * @description Define las opciones para resolver las clases de la barra.
 * @author Steveen Cues
 * @version 1.1.0
 */
export interface SearchBarClassOptions {
  readonly size: NonNullable<SearchBarProps["size"]>;
}
