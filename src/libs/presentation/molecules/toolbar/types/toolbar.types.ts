/**
 * @description Define las variantes visuales de la barra de herramientas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ToolbarVariant = "bordered" | "filled" | "ghost";

/**
 * @description Define las propiedades de la molecula barra de herramientas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ToolbarProps {
  readonly start?: React.ReactNode;
  readonly end?: React.ReactNode;
  readonly variant?: ToolbarVariant;
  readonly ariaLabel?: string;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases de la barra.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ToolbarClassOptions {
  readonly variant: NonNullable<ToolbarProps["variant"]>;
}
