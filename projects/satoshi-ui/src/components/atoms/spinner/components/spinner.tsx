import { memo } from "react";
import type { FC, JSX } from "react";
import { getSpinnerClasses } from "../utils/get-spinner-classes.util";
import type { SpinnerProps } from "../types/spinner.types";

/**
 * @description Renderiza el indicador de carga con las propiedades resueltas.
 * @param props Propiedades del spinner.
 * @param props.variant Variante visual del spinner.
 * @param props.size Tamano del spinner.
 * @param props.ariaLabel Etiqueta accesible del spinner.
 * @param props.className Clases adicionales configuradas.
 * @returns Spinner listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const SpinnerView = memo(function SpinnerView({
  variant,
  size,
  ariaLabel,
  className,
}: Required<Pick<SpinnerProps, "variant" | "size" | "className">> &
  Pick<SpinnerProps, "ariaLabel">): JSX.Element {
  const classes = getSpinnerClasses({ variant: variant, size: size });

  return (
    <span
      aria-label={ariaLabel}
      aria-live="polite"
      role="status"
      className={`${classes} loading loading-spinner ${className}`.trim()}
    />
  );
});

/**
 * @description Renderiza el indicador de carga con las propiedades resueltas.
 * @param props Propiedades del spinner.
 * @param props.variant Variante visual del spinner.
 * @param props.size Tamano del spinner.
 * @param props.ariaLabel Etiqueta accesible del spinner.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Spinner listo para renderizar.
 * @example
 * <Spinner size="lg" ariaLabel="Cargando" />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Spinner: FC<SpinnerProps> = memo(
  function Spinner(props): JSX.Element {
    return (
      <SpinnerView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        size={props.size ?? "md"}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default Spinner;
