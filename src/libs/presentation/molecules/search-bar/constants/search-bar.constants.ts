import type { SearchBarSize } from "../types/search-bar.types";

/**
 * @description Define la clase que une el campo al boton de envio.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const SEARCH_BAR_JOIN_CLASS = "join-item";

/**
 * @description Define las clases de DaisyUI por tamano de la barra.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SEARCH_BAR_SIZE_CLASSES: Record<SearchBarSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "",
  lg: "input-lg",
};

/**
/**
 * @description Define la clase del icono de busqueda del boton de envio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SEARCH_BAR_ICON_CLASS = "h-4 w-4";

/**
 * @description Define la ruta del trazo del icono de busqueda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SEARCH_BAR_ICON_PATH = "m16 16 4 4";

/**
 * @description Define la etiqueta accesible por defecto del boton de envio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SEARCH_BAR_SUBMIT_LABEL = "Buscar";

/**
 * @description Define la clase de tamano del boton de envio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SEARCH_BAR_SUBMIT_SIZE_CLASS = "";
