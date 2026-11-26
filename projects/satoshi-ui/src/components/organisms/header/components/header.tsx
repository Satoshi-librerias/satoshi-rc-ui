import type { FC, JSX, MouseEvent } from "react";
import { Container } from "@components/atoms";
import { Logo } from "@components/atoms";
import {
  ResponsiveMenuToggle,
  ResponsiveMenuPanel,
} from "@components/molecules";
import { HeaderSelectors } from "./header-selectors";
import { getHeaderSurfaceClasses } from "../utils/get-header-surface-classes.util";
import { useResponsiveMenu } from "@components/molecules/responsive-menu/hooks/use-responsive-menu.hook";
import { useHeaderNavigation } from "../hooks/use-header-navigation.hook";
import type { HeaderLogoConfig, HeaderProps } from "../types/header.types";
import type {
  HeaderLogoPosition,
  HeaderMobileSelectors,
  HeaderPosition,
  HeaderSurface,
} from "../types/header-layout.types";

/**
 * @description Define la configuracion resuelta del Header.
 * @author Steveen Cues
 * @version 2.0.0
 */
interface ResolvedHeaderConfig {
  readonly logo: HeaderLogoConfig | undefined;
  readonly showLogo: boolean;
  readonly showThemeSelector: boolean;
  readonly showLanguageSelector: boolean;
  readonly logoPosition: HeaderLogoPosition;
  readonly position: HeaderPosition;
  readonly surface: HeaderSurface;
  readonly mobileSelectors: HeaderMobileSelectors;
  readonly className: string;
}

/**
 * @description Renderiza la marca del Header cuando esta configurada.
 * @param logo Configuracion del logo.
 * @returns Logo listo para renderizar o null.
 * @author Steveen Cues
 * @version 1.1.0
 */
function renderBrand(logo: HeaderLogoConfig | undefined): JSX.Element | null {
  if (logo === undefined) {
    return null;
  }

  return (
    <Logo
      alt={logo.alt}
      height={logo.height}
      href={logo.href}
      src={logo.src}
      width={logo.width}
    />
  );
}

/**
 * @description Renderiza la marca visible del Header.
 * @param config Configuracion resuelta del Header.
 * @returns Marca lista para renderizar o null.
 * @author Steveen Cues
 * @version 1.1.0
 */
function renderVisibleBrand(config: ResolvedHeaderConfig): JSX.Element | null {
  if (!config.showLogo) {
    return null;
  }

  return renderBrand(config.logo);
}

/**
 * @description Define las propiedades del bloque de marca resuelto.
 * @author Steveen Cues
 * @version 2.0.0
 */
interface HeaderBrandBlockProps {
  readonly brand: JSX.Element | null;
  readonly desktop: JSX.Element | null;
}

/**
 * @description Bloque de marca con navegacion de escritorio.
 * @author Steveen Cues
 * @version 2.0.0
 */
const HeaderBrandBlock: FC<HeaderBrandBlockProps> = ({
  brand,
  desktop,
}): JSX.Element => (
  <div className="flex shrink-0 items-center gap-2">
    {brand}
    {desktop}
  </div>
);

/**
 * @description Crea el manejador de clic del panel de selectores. Cierra el
 * menu salvo que el clic provenga de un selector desplegable.
 * @param closeMenu Accion de cierre del menu.
 * @returns Manejador de eventos de clic.
 * @author Steveen Cues
 * @version 2.0.0
 */
function createHandleSelectorClick(
  closeMenu: () => void,
): (event: MouseEvent<HTMLDivElement>) => void {
  return (event: MouseEvent<HTMLDivElement>): void => {
    if (
      event.target instanceof Element &&
      event.target.closest('[aria-haspopup="listbox"]') !== null
    ) {
      return;
    }

    closeMenu();
  };
}

/**
 * @description Encabezado generico configurable. Permite mostrar u ocultar
 * el logo, la navegacion, el selector de tema y el selector de idioma de
 * forma independiente, con menu responsive e integracion de traduccion.
 * La posicion (static, sticky, fixed), la superficie (solid, transparent),
 * la posicion del logo (left, right) y los selectores en movil (compact,
 * panel) son configurables.
 * @example
 * <Header
 *   logo={{ src: "/logo.svg", alt: t("common.brandAlt"), href: "/" }}
 *   navigationItems={[
 *     { label: t("navigation.home"), href: "/" },
 *     { label: t("navigation.about"), href: "/about" },
 *   ]}
 *   showThemeSelector={true}
 *   showLanguageSelector={true}
 *   logoPosition="right"
 *   position="fixed"
 *   surface="transparent"
 *   mobileSelectors="compact"
 * />
 * @author Steveen Cues
 * @version 2.0.0
 */
/**
 * @description Resuelve la visibilidad de las secciones del Header.
 * @param props Propiedades recibidas por el Header.
 * @returns Visibilidad resuelta con valores por defecto.
 * @author Steveen Cues
 * @version 2.0.0
 */
function resolveHeaderVisibility(
  props: HeaderProps,
): Pick<
  ResolvedHeaderConfig,
  "showLogo" | "showThemeSelector" | "showLanguageSelector"
> {
  return {
    showLogo: props.showLogo ?? true,
    showThemeSelector: props.showThemeSelector ?? true,
    showLanguageSelector: props.showLanguageSelector ?? true,
  };
}

/**
 * @description Resuelve la configuracion visual del Header.
 * @param props Propiedades recibidas por el Header.
 * @returns Diseno resuelto con valores por defecto.
 * @author Steveen Cues
 * @version 2.0.0
 */
function resolveHeaderLayout(
  props: HeaderProps,
): Omit<
  ResolvedHeaderConfig,
  "logo" | "showLogo" | "showThemeSelector" | "showLanguageSelector"
> {
  return {
    logoPosition: props.logoPosition ?? "left",
    position: props.position ?? "static",
    surface: props.surface ?? "solid",
    mobileSelectors: props.mobileSelectors ?? "panel",
    className: props.className ?? "",
  };
}

/**
 * @description Resuelve la configuracion del Header con valores por defecto.
 * @param props Propiedades recibidas por el Header.
 * @returns Configuracion resuelta.
 * @author Steveen Cues
 * @version 2.0.0
 */
function resolveHeaderConfig(props: HeaderProps): ResolvedHeaderConfig {
  return {
    logo: props.logo,
    ...resolveHeaderVisibility(props),
    ...resolveHeaderLayout(props),
  };
}

/**
 * @description Define las propiedades del panel movil del Header.
 * @author Steveen Cues
 * @version 2.0.0
 */
interface HeaderMobilePanelProps {
  readonly mobile: JSX.Element | null;
  readonly panelSelectors: JSX.Element;
  readonly showPanelSelectors: boolean;
  readonly onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * @description Panel movil del Header con navegacion y selectores.
 * @author Steveen Cues
 * @version 2.0.0
 */
const HeaderMobilePanel: FC<HeaderMobilePanelProps> = ({
  mobile,
  panelSelectors,
  showPanelSelectors,
  onClose,
}): JSX.Element => (
  <>
    {mobile !== null && (
      <div onClick={onClose} role="presentation">
        {mobile}
      </div>
    )}

    {showPanelSelectors && (
      <div
        className="flex flex-col gap-2"
        onClick={onClose}
        role="presentation"
      >
        {panelSelectors}
      </div>
    )}
  </>
);

/**
 * @description Define las propiedades de los selectores del panel movil.
 * @author Steveen Cues
 * @version 2.0.0
 */
interface CompactPanelSelectorsProps {
  readonly actions: React.ReactNode;
  readonly isCompact: boolean;
  readonly showLanguageSelector: boolean;
  readonly showThemeSelector: boolean;
}

/**
 * @description Contenido del panel movil: solo acciones extra en modo
 * compacto y el conjunto completo de selectores en modo panel.
 * @author Steveen Cues
 * @version 2.0.0
 */
const CompactPanelSelectors: FC<CompactPanelSelectorsProps> = ({
  actions,
  isCompact,
  showLanguageSelector,
  showThemeSelector,
}): JSX.Element | null => {
  if (isCompact) {
    return <>{actions}</>;
  }

  return (
    <HeaderSelectors
      additionalActions={actions}
      showLanguageSelector={showLanguageSelector}
      showThemeSelector={showThemeSelector}
    />
  );
};

/**
 * @description Define las propiedades del grupo de escritorio en modo
 * compacto: selectores compactos junto a las acciones extra.
 * @author Steveen Cues
 * @version 2.1.0
 */
interface CompactDesktopActionsProps {
  readonly actions: React.ReactNode;
  readonly selectors: React.ReactNode;
  readonly visible: boolean;
}

/**
 * @description Grupo de escritorio cuando la barra movil usa la variante
 * compacta: los selectores se muestran compactos junto a las acciones
 * extra (por ejemplo, el boton de contacto) a la derecha de la barra.
 * @author Steveen Cues
 * @version 2.1.0
 */
const CompactDesktopActions: FC<CompactDesktopActionsProps> = ({
  actions,
  selectors,
  visible,
}): JSX.Element | null => {
  if (!visible) {
    return null;
  }

  return (
    <div className="hidden items-center gap-2 md:flex">
      {selectors}
      {actions}
    </div>
  );
};

/**
 * @description Encabezado generico del UI kit. Resuelve la configuracion
 * con valores por defecto y compone la barra, el menu responsive y los
 * selectores.
 * @param props Propiedades recibidas por el Header.
 * @returns Encabezado configurado.
 * @author Steveen Cues
 * @version 2.0.0
 */
export const Header: FC<HeaderProps> = (props): JSX.Element => {
  const config = resolveHeaderConfig(props);
  const { isOpen, panelId, toggleMenu, closeMenu } = useResponsiveMenu();
  const { desktop, mobile, labels } = useHeaderNavigation({
    items: props.navigationItems ?? [],
    showNavigation: props.showNavigation ?? true,
    translations: props.translations,
  });

  const isCompact = config.mobileSelectors === "compact";
  const handleSelectorClick = createHandleSelectorClick(closeMenu);
  const brand = renderVisibleBrand(config);

  const barSelectors = (
    <HeaderSelectors
      additionalActions={isCompact ? undefined : props.additionalActions}
      showLanguageSelector={config.showLanguageSelector}
      showThemeSelector={config.showThemeSelector}
      mobileVariant={isCompact ? "compact" : undefined}
    />
  );

  const compactDesktopSelectors = (
    <HeaderSelectors
      additionalActions={undefined}
      showLanguageSelector={config.showLanguageSelector}
      showThemeSelector={config.showThemeSelector}
      mobileVariant="compact"
    />
  );

  const compactDesktopActions = (
    <CompactDesktopActions
      actions={props.additionalActions}
      selectors={compactDesktopSelectors}
      visible={isCompact}
    />
  );

  const brandBlock = <HeaderBrandBlock brand={brand} desktop={desktop} />;
  const selectorsBlock = (
    <div
      className={`min-w-0 ${isCompact ? "md:hidden" : "hidden md:block"}`.trim()}
    >
      {barSelectors}
    </div>
  );
  const barContent = isLogoRightFirst(config.logoPosition) ? (
    <>
      {selectorsBlock}
      {brandBlock}
      {compactDesktopActions}
    </>
  ) : (
    <>
      {brandBlock}
      {selectorsBlock}
      {compactDesktopActions}
    </>
  );

  return (
    <header
      className={`${getHeaderSurfaceClasses(config.position, config.surface)} ${config.className}`.trim()}
    >
      <Container
        maxWidth="xl"
        align="between"
        padding="md"
        gap="sm"
        className="flex-nowrap"
      >
        {barContent}

        <ResponsiveMenuToggle
          closeLabel={labels.close}
          isOpen={isOpen}
          onToggle={toggleMenu}
          openLabel={labels.open}
          panelId={panelId}
        />
      </Container>

      <ResponsiveMenuPanel id={panelId} isOpen={isOpen}>
        <HeaderMobilePanel
          mobile={mobile}
          panelSelectors={
            <div
              className="flex flex-col gap-2"
              onClick={handleSelectorClick}
              role="presentation"
            >
              <CompactPanelSelectors
                actions={props.additionalActions}
                isCompact={isCompact}
                showLanguageSelector={config.showLanguageSelector}
                showThemeSelector={config.showThemeSelector}
              />
            </div>
          }
          showPanelSelectors={config.mobileSelectors === "panel" || isCompact}
          onClose={handleSelectorClick}
        />
      </ResponsiveMenuPanel>
    </header>
  );
};

/**
 * @description Indica si los selectores van primero en la barra.
 * @param logoPosition Posicion configurada del logo.
 * @returns True cuando el logo va a la derecha.
 * @author Steveen Cues
 * @version 2.0.0
 */
function isLogoRightFirst(logoPosition: HeaderLogoPosition): boolean {
  return logoPosition === "right";
}

export default Header;
