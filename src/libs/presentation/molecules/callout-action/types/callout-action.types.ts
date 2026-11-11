/**
 * @description Define las variantes visuales del aviso con accion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type CalloutActionVariant =
  "info" | "success" | "warning" | "error" | "neutral";

/**
 * @description Define las propiedades de la molecula aviso con accion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CalloutActionProps {
  readonly message: string;
  readonly actionLabel: string;
  readonly variant?: CalloutActionVariant;
  readonly className?: string;
  readonly onAction?: () => void;
}

/**
 * @description Define las opciones para resolver las clases del aviso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CalloutActionClassOptions {
  readonly variant: NonNullable<CalloutActionProps["variant"]>;
}
