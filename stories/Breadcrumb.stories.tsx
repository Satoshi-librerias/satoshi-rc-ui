import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from "@presentation";

/**
 * @description Elementos compartidos por las stories de la ruta.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Producto" },
];

/**
 * @description Stories de la molecula ruta de navegacion de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Ruta con enlaces intermedios y pagina actual.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PorDefecto: Story = {
  args: {
    items: ITEMS,
  },
};

/**
 * @description Ruta con un solo elemento marcado como pagina actual.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const UnSoloElemento: Story = {
  args: {
    items: [{ label: "Inicio" }],
  },
};

/**
 * @description Ruta con etiqueta accesible personalizada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConEtiquetaAccesible: Story = {
  args: {
    items: ITEMS,
    ariaLabel: "Ruta de navegacion del catalogo",
  },
};

/**
 * @description Ruta responsive con tamano ajustado en pantallas grandes.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  args: {
    items: ITEMS,
    className: "text-xs sm:text-sm md:text-base",
  },
};
