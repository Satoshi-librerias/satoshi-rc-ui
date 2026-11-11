import { memo, useCallback } from "react";
import type { FC, JSX, SyntheticEvent } from "react";
import { Input } from "@presentation";
import { getSearchBarClasses } from "../utils/get-search-bar-classes.util";
import {
  SEARCH_BAR_ICON_CLASS,
  SEARCH_BAR_ICON_PATH,
  SEARCH_BAR_JOIN_CLASS,
  SEARCH_BAR_SUBMIT_LABEL,
  SEARCH_BAR_SUBMIT_SIZE_CLASS,
} from "../constants/search-bar.constants";
import type { SearchBarProps } from "../types/search-bar.types";

/**
 * @description Renderiza la barra de busqueda con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.value Valor controlado de la busqueda.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.ariaLabel Etiqueta accesible del campo.
 * @param props.disabled Indica si la barra esta deshabilitada.
 * @param props.variant Variante visual del campo.
 * @param props.size Tamano del campo.
 * @param props.className Clases adicionales configuradas.
 * @param props.onChange Callback ejecutado al cambiar el texto.
 * @param props.onSubmit Callback ejecutado al enviar el formulario.
 * @returns Barra de busqueda lista para renderizar.
 * @author Steveen Cues
 * @version 1.1.0
 */
const SearchBarView = memo(function SearchBarView({
  value,
  placeholder,
  ariaLabel,
  disabled,
  variant,
  size,
  className,
  onChange,
  onSubmit,
}: Required<
  Pick<SearchBarProps, "variant" | "size" | "disabled" | "className">
> &
  Pick<
    SearchBarProps,
    "value" | "placeholder" | "ariaLabel" | "onChange" | "onSubmit"
  >): JSX.Element {
  const handleSubmit = useCallback(
    (event: SyntheticEvent<HTMLFormElement>): void => {
      event.preventDefault();
      onSubmit?.(value ?? "");
    },
    [onSubmit, value],
  );

  return (
    <form className={className} onSubmit={handleSubmit} role="search">
      <div className="join w-full">
        <Input
          ariaLabel={ariaLabel}
          className={`${SEARCH_BAR_JOIN_CLASS} ${getSearchBarClasses({ size: size })}`.trim()}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          type="search"
          value={value}
          variant={variant}
        />

        <button
          aria-label={ariaLabel ?? SEARCH_BAR_SUBMIT_LABEL}
          className={`btn join-item ${SEARCH_BAR_SUBMIT_SIZE_CLASS}`.trim()}
          disabled={disabled}
          type="submit"
        >
          <svg
            aria-hidden="true"
            className={SEARCH_BAR_ICON_CLASS}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <path d={SEARCH_BAR_ICON_PATH} strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </form>
  );
});

/**
 * @description Barra de busqueda accesible que compone el atomo Input con
 * boton de envio, variantes y tamanos DaisyUI y clases responsive de
 * Tailwind.
 * @param props Propiedades de la molecula.
 * @param props.value Valor controlado de la busqueda.
 * @param props.placeholder Texto de ayuda del campo.
 * @param props.ariaLabel Etiqueta accesible del campo.
 * @param props.disabled Indica si la barra esta deshabilitada.
 * @param props.variant Variante visual del campo.
 * @param props.size Tamano del campo.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onChange Callback ejecutado al cambiar el texto.
 * @param props.onSubmit Callback ejecutado al enviar el formulario.
 * @returns Barra de busqueda lista para renderizar.
 * @example
 * <SearchBar
 *   placeholder={t("common.searchPlaceholder")}
 *   onChange={setQuery}
 *   onSubmit={search}
 * />
 * @author Steveen Cues
 * @version 1.1.0
 */
export const SearchBar: FC<SearchBarProps> = memo(
  function SearchBar(props): JSX.Element {
    return (
      <SearchBarView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        disabled={props.disabled ?? false}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        placeholder={props.placeholder}
        size={props.size ?? "md"}
        value={props.value}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default SearchBar;
