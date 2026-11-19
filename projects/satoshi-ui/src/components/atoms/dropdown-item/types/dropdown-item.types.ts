/**
 * @description Define las variantes visuales del elemento de menu.
 * @author Steveen Cues
 * @version 1.1.0
 */
export type DropdownItemVariant =
  "primary" | "secondary" | "accent" | "neutral";

/**
 * @description Define un elemento de menu desplegable con atajo opcional.
 * @author Steveen Cues
 * @version 1.1.0
 */
export interface DropdownItemEntry {
  readonly id: string;
  readonly label: string;
  readonly shortcut?: string;
  readonly href?: string;
}

/**
 * @description Define las propiedades del atomo elemento de menu.
 * @author Steveen Cues
 * @version 1.1.0
 */
export interface DropdownItemProps {
  readonly item: DropdownItemEntry;
  readonly isSelected?: boolean;
  readonly variant?: DropdownItemVariant;
  readonly className?: string;
  readonly onSelect?: (id: string) => void;
}

/**
 * @description Define las opciones para resolver las clases del elemento.
 * @author Steveen Cues
 * @version 1.1.0
 */
export interface DropdownItemClassOptions {
  readonly variant: NonNullable<DropdownItemProps["variant"]>;
  readonly isSelected: boolean;
}
