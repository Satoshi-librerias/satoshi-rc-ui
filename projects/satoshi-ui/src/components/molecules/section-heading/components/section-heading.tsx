import { memo } from "react";
import type { FC, JSX } from "react";
import { getSectionHeadingClasses } from "../utils/get-section-heading-classes.util";
import {
  SECTION_HEADING_DEFAULT_LEVEL,
  SECTION_HEADING_DEFAULT_SIZE,
  SECTION_HEADING_EYEBROW_CLASS,
  SECTION_HEADING_SIZE_CLASSES,
  SECTION_HEADING_SUBTITLE_CLASS,
} from "../constants/section-heading.constants";
import type { SectionHeadingProps } from "../types/section-heading.types";

/**
 * @description Renderiza el encabezado de seccion con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo de la seccion.
 * @param props.subtitle Subtitulo opcional.
 * @param props.action Accion opcional alineada a la derecha.
 * @param props.level Nivel semantico del titulo.
 * @param props.className Clases adicionales configuradas.
 * @returns Encabezado de seccion listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const SectionHeadingView = memo(function SectionHeadingView({
  title,
  id,
  eyebrow,
  subtitle,
  action,
  level,
  size,
  align,
  className,
}: Required<Pick<SectionHeadingProps, "title" | "level" | "className">> &
  Required<Pick<SectionHeadingProps, "size" | "align">> &
  Pick<
    SectionHeadingProps,
    "eyebrow" | "id" | "subtitle" | "action"
  >): JSX.Element {
  const HeadingTag = `h${level}` as const;

  return (
    <header className={getSectionHeadingClasses({ align, className })}>
      <div className="min-w-0 max-w-3xl">
        {eyebrow !== undefined && (
          <p className={SECTION_HEADING_EYEBROW_CLASS}>{eyebrow}</p>
        )}
        <HeadingTag
          className={`${SECTION_HEADING_SIZE_CLASSES[size]} ${eyebrow === undefined ? "" : "mt-2"}`.trim()}
          id={id}
        >
          {title}
        </HeadingTag>

        {subtitle !== undefined && (
          <p
            className={`${SECTION_HEADING_SUBTITLE_CLASS} ${align === "center" ? "mx-auto" : ""}`.trim()}
          >
            {subtitle}
          </p>
        )}
      </div>

      {action !== undefined && (
        <div className={`shrink-0 ${align === "center" ? "self-center" : ""}`}>
          {action}
        </div>
      )}
    </header>
  );
});

/**
 * @description Encabezado de seccion con titulo, subtitulo y accion
 * opcional, con niveles semanticos y clases responsive de Tailwind.
 * @param props Propiedades de la molecula.
 * @param props.title Titulo de la seccion.
 * @param props.id Identificador opcional del titulo para asociarlo con su seccion.
 * @param props.eyebrow Etiqueta breve opcional sobre el titulo.
 * @param props.subtitle Subtitulo opcional.
 * @param props.action Accion opcional alineada a la derecha.
 * @param props.level Nivel semantico del titulo (1 a 4).
 * @param props.size Tamano visual independiente del nivel semantico.
 * @param props.align Alineacion del contenido del encabezado.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Encabezado de seccion listo para renderizar.
 * @example
 * <SectionHeading
 *   eyebrow={t("dashboard.eyebrow")}
 *   title={t("dashboard.title")}
 *   subtitle={t("dashboard.subtitle")}
 *   size="lg"
 *   action={<Button size="sm">{t("common.new")}</Button>}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SectionHeading: FC<SectionHeadingProps> = memo(
  function SectionHeading(props): JSX.Element {
    return (
      <SectionHeadingView
        align={props.align ?? "start"}
        action={props.action}
        className={props.className ?? ""}
        eyebrow={props.eyebrow}
        id={props.id}
        level={props.level ?? SECTION_HEADING_DEFAULT_LEVEL}
        size={props.size ?? SECTION_HEADING_DEFAULT_SIZE}
        subtitle={props.subtitle}
        title={props.title}
      />
    );
  },
);

export default SectionHeading;
