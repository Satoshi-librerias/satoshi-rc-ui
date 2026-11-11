import { PAGINATION_DEFAULT_SIBLINGS } from "../constants/pagination.constants";

/**
 * @description Define el numero minimo de paginas que muestran extremos.
 * @author Steveen Cues
 * @version 1.0.0
 */
const MIN_EDGE_PAGES = 2;

/**
 * @description Define los espacios fijos del calculo de paginas visibles:
 * primera, ultima y dos elipsis.
 * @author Steveen Cues
 * @version 1.0.0
 */
const FIXED_SLOTS = 5;

/**
 * @description Define la posicion base para el calculo del rango inicial
 * cuando no hay elipsis a la izquierda.
 * @author Steveen Cues
 * @version 1.1.0
 */
const START_RANGE_OFFSET = 3;

/**
 * @description Resuelve el rango de paginas visibles segun la posicion de
 * la elipsis.
 * @param totalPages Total de paginas.
 * @param siblingCount Paginas hermanas visibles alrededor de la actual.
 * @param leftSibling Hermana izquierda de la pagina actual.
 * @param rightSibling Hermana derecha de la pagina actual.
 * @returns Lista de numeros de pagina y elipsis sin extremos fijos.
 * @author Steveen Cues
 * @version 1.1.0
 */
function resolveMiddlePages(
  totalPages: number,
  siblingCount: number,
  leftSibling: number,
  rightSibling: number,
): readonly (number | "ellipsis")[] {
  const showLeftEllipsis = leftSibling > MIN_EDGE_PAGES;
  const showRightEllipsis = rightSibling < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const endRange = Math.max(START_RANGE_OFFSET + siblingCount, rightSibling);

    return [...range(1, endRange), "ellipsis" as const, totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const startRange = Math.min(
      totalPages - siblingCount - START_RANGE_OFFSET,
      leftSibling,
    );

    return [1, "ellipsis" as const, ...range(startRange, totalPages)];
  }

  return [
    1,
    "ellipsis" as const,
    ...range(leftSibling, rightSibling),
    "ellipsis" as const,
    totalPages,
  ];
}

/**
 * @description Calcula las paginas visibles con elipsis entre extremos.
 * @param page Pagina actual.
 * @param totalPages Total de paginas.
 * @param siblingCount Paginas hermanas visibles alrededor de la actual.
 * @returns Lista de numeros de pagina y elipsis.
 * @author Steveen Cues
 * @version 1.1.0
 */
export function getPaginationPages(
  page: number,
  totalPages: number,
  siblingCount: number = PAGINATION_DEFAULT_SIBLINGS,
): readonly (number | "ellipsis")[] {
  if (totalPages <= 0) {
    return [];
  }

  const totalSlots = siblingCount * MIN_EDGE_PAGES + FIXED_SLOTS;

  if (totalPages <= totalSlots) {
    return Array.from(
      { length: totalPages },
      (_item, index): number => index + 1,
    );
  }

  const leftSibling = Math.max(page - siblingCount, MIN_EDGE_PAGES);
  const rightSibling = Math.min(page + siblingCount, totalPages - 1);

  return resolveMiddlePages(
    totalPages,
    siblingCount,
    leftSibling,
    rightSibling,
  );
}

/**
 * @description Genera un rango inclusivo de numeros.
 * @param from Valor inicial.
 * @param to Valor final.
 * @returns Rango de numeros.
 * @author Steveen Cues
 * @version 1.0.0
 */
function range(from: number, to: number): readonly number[] {
  return Array.from(
    { length: Math.max(to - from + 1, 0) },
    (_item, index): number => from + index,
  );
}
