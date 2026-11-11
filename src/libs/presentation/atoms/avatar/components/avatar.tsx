import { memo } from "react";
import type { FC, JSX } from "react";
import { getAvatarClasses } from "../utils/get-avatar-classes.util";
import type { AvatarProps } from "../types/avatar.types";

/**
 * @description Renderiza el avatar con las propiedades ya resueltas.
 * @param props Propiedades del avatar.
 * @param props.initials Iniciales mostradas sin imagen.
 * @param props.src Ruta de la imagen del avatar.
 * @param props.alt Texto alternativo de la imagen.
 * @param props.variant Variante visual del avatar.
 * @param props.className Clases adicionales configuradas.
 * @returns Avatar listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const AvatarView = memo(function AvatarView({
  initials,
  src,
  alt,
  variant,
  className,
}: Required<Pick<AvatarProps, "variant" | "className">> &
  Pick<AvatarProps, "initials" | "src" | "alt">): JSX.Element {
  const classes = getAvatarClasses({ variant: variant });

  return (
    <div className={`${classes} ${className}`.trim()}>
      {typeof src === "string" && src.length > 0 ? (
        <img alt={alt ?? ""} src={src} />
      ) : (
        <span>{initials ?? ""}</span>
      )}
    </div>
  );
});

/**
 * @description Imagen o iniciales de usuario con placeholder y variantes
 * DaisyUI, admite clases responsive de Tailwind.
 * @param props Propiedades del avatar.
 * @param props.initials Iniciales mostradas sin imagen.
 * @param props.src Ruta de la imagen del avatar.
 * @param props.alt Texto alternativo de la imagen.
 * @param props.variant Variante visual del avatar.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Avatar listo para renderizar.
 * @example
 * <Avatar initials="SC" variant="primary" />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Avatar: FC<AvatarProps> = memo(
  function Avatar(props): JSX.Element {
    return (
      <AvatarView
        alt={props.alt}
        className={props.className ?? ""}
        initials={props.initials}
        src={props.src}
        variant={props.variant ?? "neutral"}
      />
    );
  },
);

export default Avatar;
