import { memo } from "react";
import type { FC, JSX } from "react";
import { getSkeletonClasses } from "../utils/get-skeleton-classes.util";
import type { SkeletonProps } from "../types/skeleton.types";

/**
 * @description Renderiza el placeholder de carga con las propiedades resueltas.
 * @param props Propiedades del skeleton.
 * @param props.variant Variante de forma del placeholder.
 * @param props.ariaLabel Etiqueta accesible del placeholder.
 * @param props.className Clases adicionales configuradas.
 * @returns Placeholder listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const SkeletonView = memo(function SkeletonView({
  ariaLabel,
  className,
}: Required<Pick<SkeletonProps, "variant" | "className">> &
  Pick<SkeletonProps, "ariaLabel">): JSX.Element {
  return (
    <div
      aria-hidden={ariaLabel === undefined}
      aria-label={ariaLabel}
      aria-live="polite"
      className={className}
      role={ariaLabel === undefined ? undefined : "status"}
    />
  );
});

/**
 * @description Placeholder de carga con formas de circulo, rectangulo y
 * texto mediante DaisyUI. Las dimensiones se controlan con clases
 * responsive de Tailwind (w-*, h-*, sm:, md:, lg:).
 * @param props Propiedades del skeleton.
 * @param props.variant Variante de forma del placeholder.
 * @param props.ariaLabel Etiqueta accesible opcional para anunciar la carga.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Placeholder listo para renderizar.
 * @example
 * <Skeleton variant="rectangle" className="h-32 w-full" />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Skeleton: FC<SkeletonProps> = memo(
  function Skeleton(props): JSX.Element {
    return (
      <SkeletonView
        ariaLabel={props.ariaLabel}
        className={getSkeletonClasses({
          className: props.className ?? "",
          variant: props.variant ?? "rectangle",
        })}
        variant={props.variant ?? "rectangle"}
      />
    );
  },
);

export default Skeleton;
