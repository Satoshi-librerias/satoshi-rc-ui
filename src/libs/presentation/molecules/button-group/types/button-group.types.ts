/**
 * @description Define las variantes visuales del grupo de botones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ButtonGroupVariant =
  "primary" | "secondary" | "accent" | "neutral" | "ghost";

/**
 * @description Define los tamanos disponibles del grupo de botones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type ButtonGroupSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define un boton del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ButtonGroupItem {
  readonly id: string;
  readonly label: string;
}

/**
 * @description Define las propiedades de la molecula grupo de botones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ButtonGroupProps {
  readonly items: readonly ButtonGroupItem[];
  readonly selectedId?: string;
  readonly variant?: ButtonGroupVariant;
  readonly size?: ButtonGroupSize;
  readonly ariaLabel?: string;
  readonly className?: string;
  readonly onSelect?: (id: string) => void;
}

/**
 * @description Define las opciones para resolver las clases del grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ButtonGroupClassOptions {
  readonly variant: NonNullable<ButtonGroupProps["variant"]>;
  readonly size: NonNullable<ButtonGroupProps["size"]>;
}
