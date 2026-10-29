import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ThemeSelectorSearch } from "@presentation";

/**
 * @description Stories del campo de busqueda del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ThemeSelectorSearch",
  component: ThemeSelectorSearch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof ThemeSelectorSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Campo de busqueda vacio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Vacio: Story = {
  args: {
    value: "",
    placeholder: "Buscar temas...",
  },
};

/**
 * @description Campo de busqueda con texto inicial.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConTexto: Story = {
  args: {
    value: "oscuro",
    placeholder: "Buscar temas...",
  },
};
