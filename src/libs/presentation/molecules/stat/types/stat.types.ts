/**
 * @description Define las variantes visuales de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type StatVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "neutral";

/**
 * @description Define las propiedades de la molecula estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface StatProps {
  readonly title: string;
  readonly value: string;
  readonly description?: string;
  readonly icon?: React.ReactNode;
  readonly variant?: StatVariant;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases de la estadistica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface StatClassOptions {
  readonly variant: NonNullable<StatProps["variant"]>;
  readonly className: string;
}
