/**
 * @description Define el primer nivel semantico de titulo disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_LEVEL_ONE = 1;

/**
 * @description Define el segundo nivel semantico de titulo disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_LEVEL_TWO = 2;

/**
 * @description Define el tercer nivel semantico de titulo disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_LEVEL_THREE = 3;

/**
 * @description Define el cuarto nivel semantico de titulo disponible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_LEVEL_FOUR = 4;

/**
 * @description Define los niveles semanticos de titulo disponibles.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SectionHeadingLevel =
  | typeof SECTION_HEADING_LEVEL_ONE
  | typeof SECTION_HEADING_LEVEL_TWO
  | typeof SECTION_HEADING_LEVEL_THREE
  | typeof SECTION_HEADING_LEVEL_FOUR;

/**
 * @description Define los tamanos visuales del encabezado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SectionHeadingSize = "sm" | "md" | "lg";

/**
 * @description Define las alineaciones visuales del encabezado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type SectionHeadingAlign = "start" | "center";

/**
 * @description Define las propiedades de la molecula encabezado de seccion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SectionHeadingProps {
  readonly title: string;
  readonly id?: string;
  readonly eyebrow?: string;
  readonly subtitle?: string;
  readonly action?: React.ReactNode;
  readonly level?: SectionHeadingLevel;
  readonly size?: SectionHeadingSize;
  readonly align?: SectionHeadingAlign;
  readonly className?: string;
}

/**
 * @description Define las opciones para resolver las clases del encabezado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface SectionHeadingClassOptions {
  readonly align: SectionHeadingAlign;
  readonly className: string;
}
