import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { LanguageSelectorItem } from "@presentation";

/**
 * @description Stories de la opcion individual del selector de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/LanguageSelectorItem",
  component: LanguageSelectorItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSelect: fn(),
  },
} satisfies Meta<typeof LanguageSelectorItem>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Opcion seleccionada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Seleccionada: Story = {
  args: {
    language: "es",
    isSelected: true,
  },
};

/**
 * @description Opcion sin seleccionar.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SinSeleccionar: Story = {
  args: {
    language: "fr",
    isSelected: false,
  },
};
