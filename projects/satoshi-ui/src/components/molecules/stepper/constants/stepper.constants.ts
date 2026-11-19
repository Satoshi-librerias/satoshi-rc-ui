import type { StepperOrientation } from "../types/stepper.types";

/**
 * @description Define las clases por orientacion del stepper.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STEPPER_ORIENTATION_CLASSES: Record<StepperOrientation, string> = {
  horizontal: "steps flex-row overflow-x-auto",
  vertical: "steps steps-vertical",
};

/**
 * @description Define las clases por estado del paso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STEPPER_STEP_STATE_CLASSES: Record<
  "complete" | "current" | "pending",
  string
> = {
  complete: "step-primary",
  current: "step-primary",
  pending: "",
};

/**
 * @description Define la clase base del stepper.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STEPPER_BASE_CLASS = "w-full";

/**
 * @description Define la clase del texto del paso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STEPPER_LABEL_CLASS = "text-xs sm:text-sm";
