/**
 * @description Define las etiquetas traducibles del consentimiento.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CookieConsentTranslations {
  readonly title: string;
  readonly description: string;
  readonly details: string;
  readonly settings: string;
  readonly necessary: string;
  readonly optional: string;
  readonly acceptAll: string;
  readonly necessaryOnly: string;
  readonly manage: string;
  readonly save: string;
}

/**
 * @description Define las propiedades del panel de consentimiento.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CookieConsentProps {
  readonly translations: CookieConsentTranslations;
  readonly storageKey?: string;
  readonly onPreferenceSaved?: () => void;
}
