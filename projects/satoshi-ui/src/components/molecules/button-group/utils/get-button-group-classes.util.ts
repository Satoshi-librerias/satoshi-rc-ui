import {
  BUTTON_GROUP_ACTIVE_CLASS,
  BUTTON_GROUP_BASE_CLASS,
  BUTTON_GROUP_SIZE_CLASSES,
  BUTTON_GROUP_VARIANT_CLASSES,
} from "../constants/button-group.constants";
import type { ButtonGroupClassOptions } from "../types/button-group.types";

/**
 * @description Compone las clases del contenedor del grupo de botones.
 * @param options Opciones visuales del grupo.
 * @param options.size Tamano de los botones.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getButtonGroupClasses(
  options: Pick<ButtonGroupClassOptions, "size">,
): string {
  const classes: readonly string[] = [
    BUTTON_GROUP_BASE_CLASS,
    BUTTON_GROUP_SIZE_CLASSES[options.size],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}

/**
 * @description Compone las clases de un boton del grupo.
 * @param options Opciones visuales del grupo.
 * @param options.variant Variante visual.
 * @param options.size Tamano del boton.
 * @param options.isActive Indica si el boton es el seleccionado.
 * @returns Clases del boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getButtonGroupItemClasses(
  options: ButtonGroupClassOptions & { readonly isActive: boolean },
): string {
  const classes: readonly string[] = [
    "btn join-item",
    BUTTON_GROUP_VARIANT_CLASSES[options.variant],
    BUTTON_GROUP_SIZE_CLASSES[options.size],
    options.isActive ? BUTTON_GROUP_ACTIVE_CLASS : "",
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
