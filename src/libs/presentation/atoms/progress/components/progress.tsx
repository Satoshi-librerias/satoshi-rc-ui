import { memo } from "react";
import type { FC, JSX } from "react";
import { getProgressClasses } from "../utils/get-progress-classes.util";
import { PROGRESS_DEFAULT_MAX } from "../constants/progress.constants";
import type { ProgressProps } from "../types/progress.types";

/**
 * @description Renderiza la barra de progreso con las propiedades resueltas.
 * @param props Propiedades del progress.
 * @param props.value Valor actual de progreso.
 * @param props.max Valor maximo de progreso.
 * @param props.variant Variante visual del progress.
 * @param props.ariaLabel Etiqueta accesible del progress.
 * @param props.className Clases adicionales configuradas.
 * @returns Barra de progreso lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ProgressView = memo(function ProgressView({
  value,
  max,
  variant,
  ariaLabel,
  className,
}: Required<Pick<ProgressProps, "max" | "variant" | "className">> &
  Pick<ProgressProps, "value" | "ariaLabel">): JSX.Element {
  const classes = getProgressClasses({ variant: variant });

  return (
    <progress
      aria-label={ariaLabel}
      className={`${classes} ${className}`.trim()}
      max={max}
      value={value}
    />
  );
});

/**
 * @description Barra de progreso con variantes semanticas DaisyUI y clases
 * responsive de Tailwind. Sin value muestra el estado indeterminado.
 * @param props Propiedades del progress.
 * @param props.value Valor actual de progreso.
 * @param props.max Valor maximo de progreso.
 * @param props.variant Variante visual del progress.
 * @param props.ariaLabel Etiqueta accesible del progress.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Barra de progreso lista para renderizar.
 * @example
 * <Progress value={60} max={100} variant="success" ariaLabel="Carga" />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Progress: FC<ProgressProps> = memo(
  function Progress(props): JSX.Element {
    return (
      <ProgressView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        max={props.max ?? PROGRESS_DEFAULT_MAX}
        value={props.value}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default Progress;
