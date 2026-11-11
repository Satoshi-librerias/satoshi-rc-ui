import { memo } from "react";
import type { FC, JSX } from "react";
import { Avatar } from "@presentation";
import { getAvatarGroupClasses } from "../utils/get-avatar-group-classes.util";
import {
  AVATAR_GROUP_DEFAULT_MAX,
  AVATAR_GROUP_HIDDEN_CLASS,
  AVATAR_GROUP_RING_CLASS,
} from "../constants/avatar-group.constants";
import type { AvatarGroupProps } from "../types/avatar-group.types";

/**
 * @description Renderiza el grupo de avatares con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.members Miembros del grupo.
 * @param props.maxVisible Maximo de avatares visibles.
 * @param props.size Tamano de los avatares.
 * @param props.ariaLabel Etiqueta accesible del grupo.
 * @param props.className Clases adicionales configuradas.
 * @returns Grupo de avatares listo para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const AvatarGroupView = memo(function AvatarGroupView({
  members,
  maxVisible,
  size,
  ariaLabel,
  className,
}: Required<
  Pick<AvatarGroupProps, "members" | "maxVisible" | "size" | "className">
> &
  Pick<AvatarGroupProps, "ariaLabel">): JSX.Element {
  const visibleMembers = members.slice(0, maxVisible);
  const hiddenCount = members.length - visibleMembers.length;

  return (
    <div aria-label={ariaLabel} className={className}>
      <div className={getAvatarGroupClasses({ size: size })}>
        {visibleMembers.map((member, index) => (
          <Avatar
            alt={member.alt}
            className={AVATAR_GROUP_RING_CLASS}
            initials={member.initials}
            key={`${member.alt ?? "member"}-${index.toString()}`}
            src={member.src}
          />
        ))}

        {hiddenCount > 0 && (
          <Avatar
            className={`${AVATAR_GROUP_RING_CLASS} ${AVATAR_GROUP_HIDDEN_CLASS}`.trim()}
            initials={`+${hiddenCount.toString()}`}
          />
        )}
      </div>
    </div>
  );
});

/**
 * @description Grupo de avatares superpuestos que compone el atomo Avatar
 * con limite visible y contador de restantes, mediante DaisyUI y clases
 * responsive de Tailwind.
 * @param props Propiedades de la molecula.
 * @param props.members Miembros del grupo con imagen o iniciales.
 * @param props.maxVisible Maximo de avatares visibles antes del contador.
 * @param props.size Tamano de los avatares.
 * @param props.ariaLabel Etiqueta accesible del grupo.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @returns Grupo de avatares listo para renderizar.
 * @example
 * <AvatarGroup
 *   members={[{ initials: "SC" }, { initials: "AB" }, { initials: "CD" }]}
 *   maxVisible={2}
 *   ariaLabel={t("team.members")}
 * />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const AvatarGroup: FC<AvatarGroupProps> = memo(
  function AvatarGroup(props): JSX.Element {
    return (
      <AvatarGroupView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        maxVisible={props.maxVisible ?? AVATAR_GROUP_DEFAULT_MAX}
        members={props.members}
        size={props.size ?? "md"}
      />
    );
  },
);

export default AvatarGroup;
