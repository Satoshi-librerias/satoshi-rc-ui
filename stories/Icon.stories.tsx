import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "@presentation";

/**
 * @description Stories del icono basado en el sprite de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Icono del sprite con tamano por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PorDefecto: Story = {
  args: {
    name: "github-icon",
  },
};

/**
 * @description Iconos disponibles del sprite en distintos tamanos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Catalogo: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      {(
        [
          "github-icon",
          "discord-icon",
          "bluesky-icon",
          "x-icon",
          "documentation-icon",
          "social-icon",
        ] as const
      ).map((name) => (
        <div key={name} className="flex flex-col items-center gap-1">
          <Icon name={name} size={32} />
          <span className="text-xs text-base-content/60">{name}</span>
        </div>
      ))}
    </div>
  ),
};

/**
 * @description Icono con titulo accesible expuesto a lectores de pantalla.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConTituloAccesible: Story = {
  args: {
    name: "documentation-icon",
    size: 32,
    title: "Documentacion",
  },
};
