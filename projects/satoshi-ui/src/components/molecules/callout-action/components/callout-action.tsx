import { memo } from "react";
import type { FC, JSX } from "react";
import { Button } from "@presentation";
import { getCalloutActionClasses } from "../utils/get-callout-action-classes.util";
import {
  CALLOUT_ACTION_MESSAGE_CLASS,
  CALLOUT_ACTION_BUTTON_SIZE,
} from "../constants/callout-action.constants";
import type { CalloutActionProps } from "../types/callout-action.types";

/**
 * @description Renderiza el aviso con accion con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.message Mensaje del aviso.
 * @param props.actionLabel Etiqueta del boton de accion.
 * @param props.variant Variante semantica del aviso.
 * @param props.className Clases adicionales configuradas.
 * @param props.onAction Callback ejecutado al pulsar la accion.
 * @returns Aviso con accion listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const CalloutActionView = memo(function CalloutActionView({
  message,
  actionLabel,
  variant,
  className,
  onAction,
}: Required<
  Pick<CalloutActionProps, "message" | "actionLabel" | "variant" | "className">
> &
  Pick<CalloutActionProps, "onAction">): JSX.Element {
  return (
    <div
      className={`${getCalloutActionClasses({ variant: variant })} ${className}`.trim()}
    >
      <span className={CALLOUT_ACTION_MESSAGE_CLASS}>{message}</span>

      <Button onClick={onAction} size={CALLOUT_ACTION_BUTTON_SIZE}>
        {actionLabel}
      </Button>
    </div>
  );
});

/**
 * @description Aviso semantico que compone el atomo Button como accion,
 * mediante DaisyUI y clases responsive de Tailwind.
 * @param props Propiedades de la molecula.
 * @param props.message Mensaje del aviso.
 * @param props.actionLabel Etiqueta del boton de accion.
 * @param props.variant Variante semantica (info, success, warning, error, neutral).
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onAction Callback ejecutado al pulsar la accion.
 * @returns Aviso con accion listo para renderizar.
 * @example
 * <CalloutAction
 *   message={t("billing.trialExpires")}
 *   actionLabel={t("billing.upgrade")}
 *   variant="warning"
 *   onAction={openUpgrade}
 * />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const CalloutAction: FC<CalloutActionProps> = memo(
  function CalloutAction(props): JSX.Element {
    return (
      <CalloutActionView
        actionLabel={props.actionLabel}
        className={props.className ?? ""}
        message={props.message}
        onAction={props.onAction}
        variant={props.variant ?? "info"}
      />
    );
  },
);

export default CalloutAction;
