import { memo } from "react";
import type { FC, JSX } from "react";
import { getAlertClasses } from "../utils/get-alert-classes.util";
import type { AlertProps } from "../types/alert.types";

/**
 * @description Renderiza la alerta con las propiedades ya resueltas.
 * @param props Propiedades de la alerta.
 * @param props.children Contenido de la alerta.
 * @param props.variant Variante visual de la alerta.
 * @param props.className Clases adicionales configuradas.
 * @returns Alerta lista para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const AlertView = memo(function AlertView({
  children,
  variant,
  className,
}: Required<Pick<AlertProps, "variant" | "className">> &
  Pick<AlertProps, "children">): JSX.Element {
  const classes = getAlertClasses({ variant: variant });

  return <div className={`${classes} ${className}`.trim()}>{children}</div>;
});

/**
 * @description Mensaje destacado para feedback del usuario con variantes
 * semantica DaisyUI y clases responsive adicionales.
 * @param props Propiedades de la alerta.
 * @param props.children Contenido de la alerta.
 * @param props.variant Variante visual de la alerta.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Alerta lista para renderizar.
 * @example
 * <Alert variant="success">Operacion exitosa</Alert>
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Alert: FC<AlertProps> = memo(function Alert(props): JSX.Element {
  return (
    <AlertView
      className={props.className ?? ""}
      variant={props.variant ?? "info"}
    >
      {props.children}
    </AlertView>
  );
});

export default Alert;
