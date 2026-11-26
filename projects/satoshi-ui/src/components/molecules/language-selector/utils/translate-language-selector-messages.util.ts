import type { LanguageSelectorTranslations } from "../types";

/**
 * @description Resuelve una clave de traduccion configurable.
 * @author Steveen Cues
 * @version 1.0.0
 */
const resolveTranslation = (
  key: string | undefined,
  fallback: string,
  translate: (key: string) => string,
): string => translate(key ?? fallback);

/**
 * @description Traduce los mensajes configurables del selector de idiomas.
 * @param translations Claves configuradas por el consumidor.
 * @param translate Funcion de traduccion del contexto de idioma.
 * @returns Mensajes resueltos para el activador, la lista y la busqueda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const translateLanguageSelectorMessages = (
  translations: LanguageSelectorTranslations | undefined,
  translate: (key: string) => string,
): Required<LanguageSelectorTranslations> => ({
  select: resolveTranslation(
    translations?.select,
    "language.select",
    translate,
  ),
  listLabel: resolveTranslation(
    translations?.listLabel,
    "language.listLabel",
    translate,
  ),
  searchPlaceholder: resolveTranslation(
    translations?.searchPlaceholder,
    "language.searchPlaceholder",
    translate,
  ),
  empty: resolveTranslation(translations?.empty, "language.empty", translate),
  selected: resolveTranslation(
    translations?.selected,
    "language.selected",
    translate,
  ),
});
