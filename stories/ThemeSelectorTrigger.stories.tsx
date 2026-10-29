import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ThemeSelectorTrigger } from "@presentation";
import { STORY_THEMES } from "./fixtures";

/**
 * @description Stories del activador del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ThemeSelectorTrigger",
  component: ThemeSelectorTrigger,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onToggle: fn(),
  },
} satisfies Meta<typeof ThemeSelectorTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Activador cerrado sobre el tema claro.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Cerrado: Story = {
  args: {
    theme: STORY_THEMES[0],
    isOpen: false,
    selectedLabel: "Tema seleccionado",
  },
};

/**
 * @description Activador abierto sobre el tema oscuro.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Abierto: Story = {
  args: {
    theme: STORY_THEMES[1],
    isOpen: true,
    selectedLabel: "Tema seleccionado",
  },
};
