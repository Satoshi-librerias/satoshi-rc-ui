import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HeaderActions,
  HeaderBrand,
  HeaderComposition,
  LanguageSelector,
  Logo,
  Navigation,
  ThemeSelector,
} from "@presentation";

/**
 * @description Elementos de navegacion compartidos por las stories.
 * @author Steveen Cues
 * @version 1.0.0
 */
const NAVIGATION_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Componentes", href: "/componentes" },
  { label: "Documentacion", href: "/documentacion" },
];

/**
 * @description Stories del encabezado por composicion de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Organismos/HeaderComposition",
  component: HeaderComposition,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderComposition>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Encabezado por composicion con marca, navegacion y
 * selectores combinados libremente.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Completo: Story = {
  render: () => (
    <HeaderComposition>
      <HeaderBrand>
        <Logo
          src="/favicon.svg"
          alt="Logo de la libreria"
          href="/"
          width={40}
          height={40}
        />
        <Navigation items={NAVIGATION_ITEMS} />
      </HeaderBrand>
      <HeaderActions className="flex-wrap">
        <div className="w-40 sm:w-48 min-w-0">
          <ThemeSelector />
        </div>
        <div className="w-36 sm:w-40 min-w-0">
          <LanguageSelector />
        </div>
      </HeaderActions>
    </HeaderComposition>
  ),
};

/**
 * @description Encabezado por composicion con solo marca y navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SoloMarca: Story = {
  render: () => (
    <HeaderComposition>
      <HeaderBrand>
        <Logo
          src="/favicon.svg"
          alt="Logo de la libreria"
          href="/"
          width={40}
          height={40}
        />
        <Navigation items={NAVIGATION_ITEMS} />
      </HeaderBrand>
    </HeaderComposition>
  ),
};

/**
 * @description Encabezado por composicion con secciones personalizadas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConSeccionesPersonalizadas: Story = {
  render: () => (
    <HeaderComposition className="bg-base-200">
      <HeaderBrand className="gap-3">
        <span className="text-sm font-semibold">Mi aplicacion</span>
      </HeaderBrand>
      <HeaderActions className="gap-3">
        <button className="btn btn-outline btn-sm" type="button">
          Entrar
        </button>
        <button className="btn btn-primary btn-sm" type="button">
          Registrarse
        </button>
      </HeaderActions>
    </HeaderComposition>
  ),
};
