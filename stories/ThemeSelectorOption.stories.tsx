import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ThemeSelectorOption } from "@presentation";
import { STORY_THEMES } from "./fixtures";

/**
 * @description Stories de la opcion individual del selector de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ThemeSelectorOption",
  component: ThemeSelectorOption,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSelect: fn(),
  },
} satisfies Meta<typeof ThemeSelectorOption>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Opcion seleccionada con descripcion visible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Seleccionada: Story = {
  args: {
    theme: STORY_THEMES[0],
    isSelected: true,
    showDescription: true,
  },
};

/**
 * @description Opcion sin seleccionar y sin descripcion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SinSeleccionar: Story = {
  args: {
    theme: STORY_THEMES[4],
    isSelected: false,
    showDescription: false,
  },
};
