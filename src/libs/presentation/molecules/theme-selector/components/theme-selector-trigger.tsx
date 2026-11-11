import type { FC, JSX } from "react";

import { useLanguage } from "@aplicacion";
import { type ThemeSelectorTriggerProps } from "@presentation";

/**
 * @description Renderiza el activador del selector de temas.
 * @author Steveen Cues
 * @version 1.5.0
 */
export const ThemeSelectorTrigger: FC<ThemeSelectorTriggerProps> = ({
  theme,
  isOpen,
  ariaLabel,
  selectedLabel,
  onToggle,
}): JSX.Element => {
  const { t } = useLanguage();
  const themeName = t(theme.manifest.name);

  return (
    <button
      type="button"
      aria-label={`${ariaLabel ?? selectedLabel ?? "Select theme"}: ${themeName}`}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      onClick={onToggle}
      className="btn btn-ghost flex w-full items-center justify-between gap-3"
    >
      <span className="flex min-w-0 items-center gap-3">
        <span
          aria-hidden="true"
          data-theme={theme.name}
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-base-300 bg-base-100"
        >
          <span className="h-3 w-3 rounded-full bg-primary" />
        </span>

        <span className="truncate">{themeName}</span>
      </span>

      <svg
        aria-hidden="true"
        className={`h-4 w-4 shrink-0 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
};

export default ThemeSelectorTrigger;
