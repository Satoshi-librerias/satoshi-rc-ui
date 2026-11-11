import type { DropdownItemVariant } from "../types/dropdown-item.types";

/**
 * @description Define las clases de DaisyUI por variante del elemento.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const DROPDOWN_ITEM_VARIANT_CLASSES: Record<
  DropdownItemVariant,
  string
> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "",
};

/**
 * @description Define la clase base del elemento de menu.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const DROPDOWN_ITEM_BASE_CLASS =
  "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-base-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

/**
 * @description Define la clase del elemento seleccionado.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const DROPDOWN_ITEM_SELECTED_CLASS = "bg-primary/10 font-medium";
