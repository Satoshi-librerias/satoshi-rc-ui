import { memo } from "react";
import type { FC, JSX } from "react";
import { getKbdClasses } from "../utils/get-kbd-classes.util";
import type { KbdProps } from "../types/kbd.types";

/**
 * @description Renderiza la tecla con las propiedades resueltas.
 * @param props Propiedades del kbd.
 * @param props.children Contenido del kbd.
 * @param props.variant Variante visual del kbd.
 * @param props.size Tamano del kbd.
 * @param props.className Clases adicionales configuradas.
 * @returns Tecla lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const KbdView = memo(function KbdView({
  children,
  variant,
  size,
  className,
}: Required<Pick<KbdProps, "variant" | "size" | "className">> &
  Pick<KbdProps, "children">): JSX.Element {
  const classes = getKbdClasses({ variant: variant, size: size });

  return <kbd className={`${classes} ${className}`.trim()}>{children}</kbd>;
});

/**
 * @description Tecla de atajo con variantes y tamanos DaisyUI y clases
 * responsive de Tailwind.
 * @param props Propiedades del kbd.
 * @param props.children Contenido del kbd.
 * @param props.variant Variante visual del kbd.
 * @param props.size Tamano del kbd.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Tecla lista para renderizar.
 * @example
 * <Kbd size="sm">Ctrl + S</Kbd>
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Kbd: FC<KbdProps> = memo(function Kbd(props): JSX.Element {
  return (
    <KbdView
      className={props.className ?? ""}
      size={props.size ?? "md"}
      variant={props.variant ?? "neutral"}
    >
      {props.children}
    </KbdView>
  );
});

export default Kbd;
