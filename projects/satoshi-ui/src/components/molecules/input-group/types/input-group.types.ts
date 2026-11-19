/**
 * @description Define las variantes visuales del grupo de entrada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type InputGroupVariant = "primary" | "secondary" | "accent" | "ghost";

/**
 * @description Define las propiedades de la molecula grupo de entrada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface InputGroupProps {
  readonly label?: string;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly value?: string;
  readonly placeholder?: string;
  readonly type?: string;
  readonly disabled?: boolean;
  readonly variant?: InputGroupVariant;
  readonly className?: string;
  readonly onChange?: (value: string) => void;
}

/**
 * @description Define las opciones para resolver las clases del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface InputGroupClassOptions {
  readonly variant: NonNullable<InputGroupProps["variant"]>;
}
