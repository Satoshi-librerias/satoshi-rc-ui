import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarGroup } from "@presentation";

/**
 * @description Miembros compartidos por las stories del grupo de avatares.
 * @author Steveen Cues
 * @version 1.0.0
 */
const MEMBERS = [
  { initials: "SC" },
  { initials: "AB" },
  { initials: "CD" },
  { initials: "EF" },
  { initials: "GH" },
  { initials: "IJ" },
];

/**
 * @description Stories de la molecula grupo de avatares de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/AvatarGroup",
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AvatarGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Grupo con limite por defecto de cuatro visibles.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PorDefecto: Story = {
  args: {
    members: MEMBERS,
  },
};

/**
 * @description Grupo con solo iniciales y contador de ocultos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConContador: Story = {
  args: {
    members: MEMBERS,
    maxVisible: 3,
    ariaLabel: "Miembros del equipo",
  },
};

/**
 * @description Grupo con imagenes y respaldo de iniciales.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConImagenes: Story = {
  args: {
    members: [
      { src: "https://i.pravatar.cc/150?img=1", alt: "Ana" },
      { src: "https://i.pravatar.cc/150?img=2", alt: "Beto" },
      { initials: "CD" },
    ],
    maxVisible: 3,
  },
};

/**
 * @description Grupo pequeno responsive.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Pequeno: Story = {
  args: {
    members: MEMBERS,
    size: "sm",
    className: "text-xs sm:text-sm",
  },
};
