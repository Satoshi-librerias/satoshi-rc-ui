import type { FC, JSX } from "react";
import { LanguageSelector } from "@components/molecules";
import { ThemeSelector } from "@components/molecules";
import type { HeaderTranslations } from "../types/header.types";

/**
 * @description Define la variante visual de los selectores en la barra
 * movil. La variante compacta reduce el ancho para compartir la barra con
 * el logo y el toggle del menu.
 * @author Steveen Cues
 * @version 2.0.0
 */
export type HeaderSelectorsMobileVariant = "compact" | undefined;

/**
 * @description Define las propiedades de la seccion de selectores.
 * @author Steveen Cues
 * @version 2.0.0
 */
export interface HeaderSelectorsProps {
  readonly showThemeSelector: boolean;
  readonly showLanguageSelector: boolean;
  readonly translations?: HeaderTranslations;
  readonly additionalActions: React.ReactNode;
  readonly mobileVariant?: HeaderSelectorsMobileVariant;
}

/**
 * @description Agrupa los selectores de tema e idioma con acciones extra.
 * En la variante compacta usa anchos reducidos para caber junto al logo
 * en la barra movil y reserva las acciones extra para el panel.
 * @author Steveen Cues
 * @version 2.0.0
 */
export const HeaderSelectors: FC<HeaderSelectorsProps> = ({
  showThemeSelector,
  showLanguageSelector,
  additionalActions,
  mobileVariant,
}): JSX.Element => {
  const isCompact = mobileVariant === "compact";
  if (isCompact) {
    return (
      <div className="flex min-w-0 items-center gap-1">
        {showThemeSelector && (
          <div className="w-20 min-w-0 sm:w-28 md:w-32">
            <ThemeSelector showDescriptions={false} />
          </div>
        )}

        {showLanguageSelector && (
          <div className="w-20 min-w-0 sm:w-24 md:w-28">
            <LanguageSelector />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {showThemeSelector && (
        <div className="w-40 min-w-0">
          <ThemeSelector />
        </div>
      )}

      {showLanguageSelector && (
        <div className="w-40 min-w-0">
          <LanguageSelector />
        </div>
      )}

      {additionalActions}
    </div>
  );
};

export default HeaderSelectors;
