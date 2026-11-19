import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { useLanguage } from "@aplicacion";
import {
  getPaginationClasses,
  getPaginationPageClasses,
} from "../utils/get-pagination-classes.util";
import { getPaginationPages } from "../utils/get-pagination-pages.util";
import type { PaginationProps } from "../types/pagination.types";

/**
 * @description Renderiza la paginacion con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.page Pagina actual.
 * @param props.totalPages Total de paginas.
 * @param props.siblingCount Paginas hermanas visibles.
 * @param props.ariaLabel Etiqueta accesible de la paginacion.
 * @param props.previousLabel Etiqueta del boton anterior.
 * @param props.nextLabel Etiqueta del boton siguiente.
 * @param props.variant Variante visual.
 * @param props.size Tamano de los botones.
 * @param props.className Clases adicionales configuradas.
 * @param props.onPageChange Callback ejecutado al cambiar de pagina.
 * @returns Paginacion lista para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const PaginationView = memo(function PaginationView({
  page,
  totalPages,
  siblingCount,
  ariaLabel,
  previousLabel,
  nextLabel,
  variant,
  size,
  className,
  onPageChange,
}: Required<
  Pick<
    PaginationProps,
    "page" | "totalPages" | "variant" | "size" | "className"
  >
> &
  Pick<
    PaginationProps,
    | "siblingCount"
    | "ariaLabel"
    | "previousLabel"
    | "nextLabel"
    | "onPageChange"
  >): JSX.Element {
  const pages = getPaginationPages(page, totalPages, siblingCount);

  const handlePageClick = useCallback(
    (targetPage: number): void => {
      onPageChange?.(targetPage);
    },
    [onPageChange],
  );

  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul className={getPaginationClasses({ variant: variant, size: size })}>
        <li>
          <button
            aria-label={previousLabel}
            className={getPaginationPageClasses({
              isActive: false,
              size: size,
            })}
            disabled={page <= 1}
            onClick={(): void => handlePageClick(page - 1)}
            type="button"
          >
            {"\u00AB"}
          </button>
        </li>

        {pages.map((entry, index) =>
          entry === "ellipsis" ? (
            <li key={`ellipsis-${index.toString()}`}>
              <span
                aria-hidden="true"
                className={getPaginationPageClasses({
                  isActive: false,
                  size: size,
                })}
              >
                {"\u2026"}
              </span>
            </li>
          ) : (
            <li key={entry}>
              <button
                aria-current={entry === page ? "page" : undefined}
                className={getPaginationPageClasses({
                  isActive: entry === page,
                  size: size,
                })}
                onClick={(): void => handlePageClick(entry)}
                type="button"
              >
                {entry}
              </button>
            </li>
          ),
        )}

        <li>
          <button
            aria-label={nextLabel}
            className={getPaginationPageClasses({
              isActive: false,
              size: size,
            })}
            disabled={page >= totalPages}
            onClick={(): void => handlePageClick(page + 1)}
            type="button"
          >
            {"\u00BB"}
          </button>
        </li>
      </ul>
    </nav>
  );
});

/**
 * @description Paginacion accesible con elipsis automatica, variantes y
 * tamanos DaisyUI. Los textos por defecto se resuelven con TranslateProvider.
 * @param props Propiedades de la molecula.
 * @param props.page Pagina actual.
 * @param props.totalPages Total de paginas.
 * @param props.siblingCount Paginas hermanas visibles alrededor de la actual.
 * @param props.ariaLabel Etiqueta accesible de la paginacion.
 * @param props.previousLabel Etiqueta accesible del boton anterior.
 * @param props.nextLabel Etiqueta accesible del boton siguiente.
 * @param props.variant Variante visual.
 * @param props.size Tamano de los botones.
 * @param props.className Clases adicionales configuradas, incluidas las
 * responsive de Tailwind (sm:, md:, lg:).
 * @param props.onPageChange Callback ejecutado al cambiar de pagina.
 * @returns Paginacion lista para renderizar.
 * @example
 * <Pagination
 *   page={page}
 *   totalPages={12}
 *   onPageChange={setPage}
 *   ariaLabel={t("common.pagination")}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Pagination: FC<PaginationProps> = memo(
  function Pagination(props): JSX.Element {
    const { t } = useLanguage();

    return (
      <PaginationView
        ariaLabel={props.ariaLabel ?? t("molecules.pagination")}
        className={props.className ?? ""}
        nextLabel={props.nextLabel ?? t("molecules.nextPage")}
        onPageChange={props.onPageChange}
        page={props.page}
        previousLabel={props.previousLabel ?? t("molecules.previousPage")}
        siblingCount={props.siblingCount}
        size={props.size ?? "md"}
        totalPages={props.totalPages}
        variant={props.variant ?? "primary"}
      />
    );
  },
);

export default Pagination;
