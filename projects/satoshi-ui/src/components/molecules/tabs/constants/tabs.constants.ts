import type { TabsSize, TabsVariant } from "../types/tabs.types";

/**
 * @description Define las clases de DaisyUI por variante de las pestanas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TABS_VARIANT_CLASSES: Record<TabsVariant, string> = {
  boxed: "tabs-boxed",
  lifted: "tabs-lifted",
  bordered: "tabs-bordered",
  default: "",
};

/**
 * @description Define las clases de DaisyUI por tamano de las pestanas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TABS_SIZE_CLASSES: Record<TabsSize, string> = {
  xs: "tab-xs",
  sm: "tab-sm",
  md: "",
  lg: "tab-lg",
};

/**
 * @description Define la clase base de las pestanas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TABS_BASE_CLASS = "tabs";

/**
 * @description Define la clase de la pestana activa.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TABS_ACTIVE_CLASS = "tab-active";
