import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@presentation";

/**
 * @description Stories del avatar reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Avatar con iniciales.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConIniciales: Story = {
  args: {
    initials: "SC",
  },
};

/**
 * @description Avatar con imagen.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConImagen: Story = {
  args: {
    src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    alt: "Usuario",
  },
};

/**
 * @description Variantes de color del avatar.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-4">
      <Avatar initials="AB" variant="primary" />
      <Avatar initials="CD" variant="secondary" />
      <Avatar initials="EF" variant="accent" />
      <Avatar initials="GH" variant="neutral" />
    </div>
  ),
};
