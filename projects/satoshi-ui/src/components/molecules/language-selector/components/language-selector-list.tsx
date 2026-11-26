import { LanguageSelectorItem } from "./language-selector-item";
import type { LanguageSelectorListProps } from "../types";
import type { FC, JSX } from "react";

/**
 * @description Renderiza la lista de idiomas disponibles.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const LanguageSelectorList: FC<LanguageSelectorListProps> = ({
  languages,
  selectedLanguage,
  onSelect,
  listLabel,
  emptyMessage,
}): JSX.Element => {
  if (languages.length === 0) {
    return (
      <p
        className="px-4 py-6 text-center text-sm text-base-content/60"
        role="status"
      >
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul
      aria-label={listLabel}
      className="flex max-h-72 flex-col gap-1 overflow-y-auto p-1"
      role="listbox"
    >
      {languages.map((availableLanguage: string) => (
        <li key={availableLanguage} role="presentation">
          <LanguageSelectorItem
            isSelected={availableLanguage === selectedLanguage}
            language={availableLanguage}
            onSelect={onSelect}
            selectedLabel={listLabel}
          />
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelectorList;
