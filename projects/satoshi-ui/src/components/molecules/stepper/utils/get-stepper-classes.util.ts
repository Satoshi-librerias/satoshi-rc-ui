import {
  STEPPER_ORIENTATION_CLASSES,
  STEPPER_STEP_STATE_CLASSES,
} from "../constants/stepper.constants";
import type {
  StepperClassOptions,
  StepperStepClassOptions,
} from "../types/stepper.types";

/**
 * @description Compone las clases del contenedor del stepper.
 * @param options Opciones visuales del stepper.
 * @param options.orientation Orientacion del stepper.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getStepperClasses(options: StepperClassOptions): string {
  const classes: readonly string[] = [
    STEPPER_ORIENTATION_CLASSES[options.orientation],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}

/**
 * @description Compone las clases de un paso del stepper.
 * @param options Opciones visuales del paso.
 * @param options.state Estado del paso.
 * @returns Cadena de clases lista para el atributo className.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getStepperStepClasses(
  options: StepperStepClassOptions,
): string {
  const classes: readonly string[] = [
    "step",
    STEPPER_STEP_STATE_CLASSES[options.state],
  ];

  return classes
    .filter((className: string): boolean => className !== "")
    .join(" ");
}
