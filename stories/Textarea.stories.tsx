import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@presentation";

/**
 * @description Stories del area de texto reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Area de texto por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PorDefecto: Story = {
  args: {
    placeholder: "Escribe tu comentario",
    ariaLabel: "Comentario",
  },
};

/**
 * @description Variantes visuales del area de texto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex w-80 flex-col gap-3">
      <Textarea placeholder="primary" variant="primary" />
      <Textarea placeholder="secondary" variant="secondary" />
      <Textarea placeholder="ghost" variant="ghost" />
    </div>
  ),
};

/**
 * @description Tamanos disponibles del area de texto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Tamanos: Story = {
  render: (): JSX.Element => (
    <div className="flex w-80 flex-col gap-3">
      <Textarea size="sm" placeholder="sm" />
      <Textarea size="md" placeholder="md" />
      <Textarea size="lg" placeholder="lg" />
    </div>
  ),
};
