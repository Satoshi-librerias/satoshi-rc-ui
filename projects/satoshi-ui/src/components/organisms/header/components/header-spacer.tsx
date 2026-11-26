import type { FC, JSX } from "react";
import type { HeaderPosition } from "../types/header-layout.types";

/**
 * @description Define las alturas aproximadas del Header por breakpoint.
 * Las clases completas se declaran como literales para que el escaneo
 * estatico de Tailwind las genere en el CSS final.
 * @author Steveen Cues
 * @version 1.0.0
 */
const HEADER_SPACER_HEIGHTS: Record<
  "compact" | "regular",
  Record<"mobile" | "desktop", string>
> = {
  compact: { mobile: "h-16 md:h-20", desktop: "h-16 md:h-20" },
  regular: { mobile: "h-20 md:h-24", desktop: "h-20 md:h-24" },
};

/**
 * @description Define las propiedades del espaciador del Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface HeaderSpacerProps {
  readonly position?: HeaderPosition;
  readonly compact?: boolean;
  readonly className?: string;
}

/**
 * @description Reserva el espacio del contenido cuando el Header es fijo
 * o pegajoso. En posicion estatica no renderiza nada.
 * @example
 * <Header position="fixed" surface="transparent" logoPosition="left" />
 * <HeaderSpacer position="fixed" />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HeaderSpacer: FC<HeaderSpacerProps> = ({
  position = "static",
  compact = false,
  className = "",
}): JSX.Element | null => {
  if (position !== "fixed" && position !== "sticky") {
    return null;
  }

  const heights = compact
    ? HEADER_SPACER_HEIGHTS.compact
    : HEADER_SPACER_HEIGHTS.regular;

  return (
    <div
      aria-hidden="true"
      className={`${heights.mobile} ${heights.desktop} ${className}`.trim()}
    />
  );
};

export default HeaderSpacer;
