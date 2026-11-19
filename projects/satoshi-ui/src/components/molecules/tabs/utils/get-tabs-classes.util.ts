import {
  TABS_ACTIVE_CLASS,
  TABS_BASE_CLASS,
  TABS_SIZE_CLASSES,
  TABS_VARIANT_CLASSES,
} from "../constants/tabs.constants";
import type { TabsClassOptions } from "../types/tabs.types";

/**
 * @description Compone las clases del contenedor de pestanas.
 * @param options Opciones visuales de las pestanas.
 * @param options.variant Variante visual.
 * @param options.size Tamano de las pestanas.
 * @param options.className Clases adicionales configuradas por el consumidor.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.1.0
 */
export function getTabsClasses(options: TabsClassOptions): string {
  const classes: readonly string[] = [
    TABS_BASE_CLASS,
    TABS_VARIANT_CLASSES[options.variant],
    TABS_SIZE_CLASSES[options.size],
    options.className,
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}

/**
 * @description Compone las clases de una pestana individual.
 * @param options Opciones visuales de las pestanas.
 * @param options.size Tamano de las pestanas.
 * @param options.isActive Indica si la pestana es la activa.
 * @returns Clases de la pestana.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getTabClasses(
  options: Pick<TabsClassOptions, "size"> & { readonly isActive: boolean },
): string {
  const classes: readonly string[] = [
    "tab",
    TABS_SIZE_CLASSES[options.size],
    options.isActive ? TABS_ACTIVE_CLASS : "",
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
