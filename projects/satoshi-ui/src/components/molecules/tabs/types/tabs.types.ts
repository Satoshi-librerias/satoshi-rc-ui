/**
 * @description Define las variantes visuales de las pestanas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type TabsVariant = "boxed" | "lifted" | "bordered" | "default";

/**
 * @description Define los tamanos disponibles de las pestanas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type TabsSize = "xs" | "sm" | "md" | "lg";

/**
 * @description Define una pestana individual.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TabItem {
  readonly id: string;
  readonly label: string;
}

/**
 * @description Define las propiedades de la molecula pestanas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TabsProps {
  readonly items: readonly TabItem[];
  readonly activeId?: string;
  readonly variant?: TabsVariant;
  readonly size?: TabsSize;
  readonly ariaLabel?: string;
  readonly className?: string;
  readonly onChange?: (id: string) => void;
}

/**
 * @description Define las opciones para resolver las clases de las pestanas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TabsClassOptions {
  readonly variant: NonNullable<TabsProps["variant"]>;
  readonly size: NonNullable<TabsProps["size"]>;
  readonly className: string;
}
