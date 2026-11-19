/**
 * @description Define la posicion del logo en el Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type HeaderLogoPosition = "left" | "right";

/**
 * @description Define el modo de posicionamiento del Header en la pagina.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type HeaderPosition = "static" | "sticky" | "fixed";

/**
 * @description Define el estilo visual del Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type HeaderSurface = "solid" | "transparent";

/**
 * @description Define la distribucion de los selectores en la barra movil.
 * @author Steveen Cues
 * @version 1.0.0
 */
export type HeaderMobileSelectors = "compact" | "panel";

/**
 * @description Define la configuracion visual avanzada del Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface HeaderLayoutConfig {
  readonly logoPosition?: HeaderLogoPosition;
  readonly position?: HeaderPosition;
  readonly surface?: HeaderSurface;
  readonly mobileSelectors?: HeaderMobileSelectors;
}
