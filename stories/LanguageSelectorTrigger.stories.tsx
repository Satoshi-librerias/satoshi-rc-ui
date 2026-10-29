import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { LanguageSelectorTrigger } from "@presentation";

/**
 * @description Stories del activador del selector de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/LanguageSelectorTrigger",
  component: LanguageSelectorTrigger,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof LanguageSelectorTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Activador cerrado en espanol.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Cerrado: Story = {
  args: {
    language: "es",
    isOpen: false,
  },
};

/**
 * @description Activador abierto en ingles.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Abierto: Story = {
  args: {
    language: "en",
    isOpen: true,
  },
};
