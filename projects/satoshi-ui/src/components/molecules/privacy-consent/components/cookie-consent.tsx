import { useCallback, useState } from "react";
import type { FC, JSX } from "react";
import type { CookieConsentProps } from "../types/privacy-consent.types";

const DEFAULT_STORAGE_KEY = "satoshi-cookie-consent";

interface ConsentPreference {
  readonly necessary: true;
  readonly optional: boolean;
}

interface InitialConsentState {
  readonly isVisible: boolean;
  readonly allowOptional: boolean;
}

interface CookieConsentPanelProps {
  readonly isManaging: boolean;
  readonly allowOptional: boolean;
  readonly translations: CookieConsentProps["translations"];
  readonly onOptionalChange: (allow: boolean) => void;
  readonly onManage: () => void;
  readonly onSave: (allow: boolean) => void;
}

const CONSENT_BACKDROP_CLASS = "fixed inset-0 z-[80] bg-base-content/30";

function isConsentPreference(value: unknown): value is ConsentPreference {
  return (
    typeof value === "object" &&
    value !== null &&
    "necessary" in value &&
    value.necessary === true &&
    "optional" in value &&
    typeof value.optional === "boolean"
  );
}

function getInitialConsent(storageKey: string): InitialConsentState {
  if (typeof window === "undefined") {
    return { isVisible: false, allowOptional: false };
  }

  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === null) {
      return { isVisible: true, allowOptional: false };
    }

    const preference: unknown = JSON.parse(saved);
    return isConsentPreference(preference)
      ? { isVisible: false, allowOptional: preference.optional }
      : { isVisible: true, allowOptional: false };
  } catch (error) {
    console.error("Unable to read cookie consent preference.", error);
    return { isVisible: true, allowOptional: false };
  }
}

function CookieConsentPanel({
  isManaging,
  allowOptional,
  translations,
  onOptionalChange,
  onManage,
  onSave,
}: CookieConsentPanelProps): JSX.Element {
  return (
    <>
      <div aria-hidden="true" className={CONSENT_BACKDROP_CLASS} />
      <aside
        aria-labelledby="cookie-consent-title"
        aria-modal="true"
        className="card fixed inset-x-4 bottom-4 z-[90] mx-auto max-h-[calc(100dvh-2rem)] w-auto max-w-2xl overflow-y-auto rounded-2xl border border-base-300 bg-base-100 text-base-content shadow-2xl"
        role="dialog"
      >
        <div className="card-body gap-3 p-5 text-center sm:p-6">
          <h2
            className="card-title justify-center text-lg sm:text-xl"
            id="cookie-consent-title"
          >
            {translations.title}
          </h2>
          <p className="mx-auto max-w-prose text-sm leading-relaxed text-base-content/70">
            {translations.description}
          </p>
          <p className="mx-auto max-w-prose text-xs leading-relaxed text-base-content/60">
            {translations.details}
          </p>
          {isManaging && (
            <div className="space-y-2 rounded-xl bg-base-200 p-3 text-left text-sm">
              <p>{translations.necessary}</p>
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  checked={allowOptional}
                  className="checkbox checkbox-primary"
                  onChange={(event) => onOptionalChange(event.target.checked)}
                  type="checkbox"
                />
                <span className="label-text">{translations.optional}</span>
              </label>
            </div>
          )}
          <div className="grid gap-2 border-t border-base-300 pt-3 sm:grid-cols-3">
            {!isManaging ? (
              <>
                <button
                  className="btn btn-ghost btn-sm w-full rounded-xl"
                  onClick={() => onSave(false)}
                  type="button"
                >
                  {translations.necessaryOnly}
                </button>
                <button
                  className="btn btn-outline btn-sm w-full rounded-xl"
                  onClick={onManage}
                  type="button"
                >
                  {translations.manage}
                </button>
                <button
                  className="btn btn-primary btn-sm w-full rounded-xl"
                  onClick={() => onSave(true)}
                  type="button"
                >
                  {translations.acceptAll}
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-ghost btn-sm w-full rounded-xl"
                  onClick={() => onSave(false)}
                  type="button"
                >
                  {translations.necessaryOnly}
                </button>
                <button
                  className="btn btn-primary btn-sm w-full rounded-xl"
                  onClick={() => onSave(allowOptional)}
                  type="button"
                >
                  {translations.save}
                </button>
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

/**
 * @description Solicita y recuerda la preferencia de cookies opcionales.
 * Las cookies necesarias permanecen activas para el funcionamiento del sitio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CookieConsent: FC<CookieConsentProps> = ({
  translations,
  storageKey = DEFAULT_STORAGE_KEY,
  onPreferenceSaved,
}): JSX.Element => {
  const [initialConsent] = useState(() => getInitialConsent(storageKey));
  const [isVisible, setIsVisible] = useState(initialConsent.isVisible);
  const [isManaging, setIsManaging] = useState(false);
  const [allowOptional, setAllowOptional] = useState(
    initialConsent.allowOptional,
  );

  const savePreference = useCallback(
    (optional: boolean): void => {
      const preference: ConsentPreference = { necessary: true, optional };
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(preference));
      } catch (error) {
        console.error("Unable to save cookie consent preference.", error);
      }
      setAllowOptional(optional);
      setIsVisible(false);
      setIsManaging(false);
      onPreferenceSaved?.();
    },
    [onPreferenceSaved, storageKey],
  );

  return (
    <>
      {!isVisible && (
        <button
          className="btn btn-ghost btn-sm fixed bottom-4 left-4 z-[80] rounded-xl"
          onClick={() => {
            setIsManaging(true);
            setIsVisible(true);
          }}
          type="button"
        >
          {translations.settings}
        </button>
      )}
      {isVisible && (
        <CookieConsentPanel
          allowOptional={allowOptional}
          isManaging={isManaging}
          onManage={() => setIsManaging(true)}
          onOptionalChange={setAllowOptional}
          onSave={savePreference}
          translations={translations}
        />
      )}
    </>
  );
};

export default CookieConsent;
