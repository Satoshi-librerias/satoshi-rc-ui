import { useRef, type FC, type JSX } from "react";
import { useLanguage } from "@libs";
import { LanguageSelectorList } from "./language-selector-list";
import { LanguageSelectorSearch } from "./language-selector-search";
import { LanguageSelectorTrigger } from "./language-selector-trigger";
import { translateLanguageSelectorMessages } from "../utils";
import { useLanguageSelector, useLanguageSelectorEvents } from "../hooks";
import type { LanguageSelectorProps } from "../types";

/**
 * @description Permite buscar y seleccionar idiomas disponibles. Los textos
 * accesibles se resuelven con el contexto de traduccion y son configurables
 * mediante la propiedad translations.
 * @author Steveen Cues
 * @version 1.2.0
 */
export const LanguageSelector: FC<LanguageSelectorProps> = ({
  className = "",
  translations,
}): JSX.Element => {
  const {
    language,
    languages,
    hasSearch,
    isOpen,
    searchQuery,
    setSearchQuery,
    toggleSelector,
    closeSelector,
    selectLanguage,
  } = useLanguageSelector();
  const { t } = useLanguage();

  const messages = translateLanguageSelectorMessages(translations, t);

  const containerRef = useRef<HTMLDivElement>(null);

  useLanguageSelectorEvents(containerRef, closeSelector);

  return (
    <div
      className={`relative w-full min-w-0 ${className}`.trim()}
      ref={containerRef}
    >
      <LanguageSelectorTrigger
        ariaLabel={messages.select}
        isOpen={isOpen}
        language={language}
        onClick={toggleSelector}
      />

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-full min-w-0 rounded-box border border-base-300 bg-base-100 p-2 text-base-content shadow-xl sm:min-w-64">
          {hasSearch && (
            <div className="p-1">
              <LanguageSelectorSearch
                onChange={setSearchQuery}
                placeholder={messages.searchPlaceholder}
                value={searchQuery}
              />
            </div>
          )}

          <LanguageSelectorList
            emptyMessage={messages.empty}
            languages={languages}
            listLabel={messages.listLabel}
            onSelect={selectLanguage}
            selectedLanguage={language}
          />
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
