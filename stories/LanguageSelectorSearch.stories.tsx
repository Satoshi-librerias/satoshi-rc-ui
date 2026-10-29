import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { LanguageSelectorSearch } from "@presentation";

/**
 * @description Stories del campo de busqueda del selector de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/LanguageSelectorSearch",
  component: LanguageSelectorSearch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof LanguageSelectorSearch>;

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
  },
};

/**
 * @description Campo de busqueda con texto inicial.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConTexto: Story = {
  args: {
    value: "es",
  },
};
