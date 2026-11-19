/**
 * @description Define las variantes visuales del campo de formulario.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type FormFieldVariant = "primary" | "secondary" | "accent" | "ghost";

/**
 * @description Define las propiedades de la molecula campo de formulario.
 * Compone etiqueta, campo de entrada y mensaje de error accesibles.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface FormFieldProps {
  readonly label: string;
  readonly value?: string;
  readonly placeholder?: string;
  readonly type?: string;
  readonly hint?: string;
  readonly errorMessage?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly variant?: FormFieldVariant;
  readonly className?: string;
  readonly onChange?: (value: string) => void;
}

/**
 * @description Define las opciones para resolver las clases del campo.
 * @author Steveen Cues
 * @version 1.1.0
 */
export interface FormFieldClassOptions {
  readonly hasError: boolean;
}
