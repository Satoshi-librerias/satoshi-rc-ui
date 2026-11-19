import {
  SECTION_HEADING_LEVEL_TWO,
  type SectionHeadingSize,
} from "../types/section-heading.types";

/**
 * @description Define la clase base del encabezado de seccion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_BASE_CLASS = "flex w-full flex-col gap-3";

/**
 * @description Define las clases de alineacion centrada del encabezado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_CENTER_CLASS = "items-center text-center";

/**
 * @description Define las clases de alineacion inicial del encabezado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_START_CLASS =
  "sm:flex-row sm:items-end sm:justify-between";

/**
 * @description Define las clases por tamano visual del titulo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_SIZE_CLASSES: Record<SectionHeadingSize, string> =
  {
    sm: "text-lg font-semibold leading-tight sm:text-xl",
    md: "text-xl font-semibold leading-tight sm:text-2xl",
    lg: "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
  };

/**
 * @description Define el nivel semantico por defecto del encabezado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_DEFAULT_LEVEL = SECTION_HEADING_LEVEL_TWO;

/**
 * @description Define el tamano visual por defecto del encabezado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_DEFAULT_SIZE = "md" as const;

/**
 * @description Define las clases del texto superior del encabezado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_EYEBROW_CLASS =
  "text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm";

/**
 * @description Define la clase del subtitulo del encabezado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SECTION_HEADING_SUBTITLE_CLASS =
  "mt-2 max-w-3xl text-sm leading-6 text-base-content/70 sm:text-base sm:leading-7";
