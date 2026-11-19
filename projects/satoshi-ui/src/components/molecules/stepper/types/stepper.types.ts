/**
 * @description Define las orientaciones disponibles del stepper.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type StepperOrientation = "horizontal" | "vertical";

/**
 * @description Define un paso individual del stepper.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface StepperStep {
  readonly id: string;
  readonly label: string;
  readonly description?: string;
}

/**
 * @description Define las propiedades de la molecula stepper.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface StepperProps {
  readonly steps: readonly StepperStep[];
  readonly currentId?: string;
  readonly orientation?: StepperOrientation;
  readonly ariaLabel?: string;
  readonly className?: string;
  readonly onStepClick?: (id: string) => void;
}

/**
 * @description Define las opciones para resolver las clases del stepper.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface StepperClassOptions {
  readonly orientation: NonNullable<StepperProps["orientation"]>;
}

/**
 * @description Define las opciones para resolver las clases de un paso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface StepperStepClassOptions {
  readonly state: "complete" | "current" | "pending";
}
