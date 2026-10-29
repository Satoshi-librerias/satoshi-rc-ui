import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ThemeSelectorList } from "@presentation";
import { STORY_THEMES } from "./fixtures";

/**
 * @description Stories de la lista de temas del selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ThemeSelectorList",
  component: ThemeSelectorList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSelect: fn(),
  },
} satisfies Meta<typeof ThemeSelectorList>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Lista completa con el tema claro seleccionado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Completa: Story = {
  args: {
    themes: STORY_THEMES,
    selectedTheme: "light",
    showDescriptions: true,
    label: "Temas",
    emptyMessage: "No se encontraron temas",
  },
};

/**
 * @description Lista vacia con mensaje alternativo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Vacia: Story = {
  args: {
    themes: [],
    selectedTheme: "light",
    showDescriptions: true,
    label: "Temas",
    emptyMessage: "No se encontraron temas",
  },
};
