import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ThemeSelectorPanel } from "@presentation";
import { STORY_THEMES } from "./fixtures";

/**
 * @description Mensajes traducidos reutilizados por el panel.
 * @author Steveen Cues
 * @version 1.0.0
 */
const PANEL_TRANSLATIONS = {
  title: "Temas",
  searchPlaceholder: "Buscar temas...",
  empty: "No se encontraron temas",
  of: "de",
  results: "resultados",
  selected: "Tema seleccionado",
  close: "Cerrar",
};

/**
 * @description Colocacion por defecto del panel: abre hacia abajo alineado
 * a la derecha, como resuelve el selector en un viewport con espacio.
 * @author Steveen Cues
 * @version 1.1.0
 */
const PANEL_PLACEMENT = {
  vertical: "bottom",
  horizontal: "right",
  maxHeight: 448,
} as const;

/**
 * @description Stories del panel desplegable del selector de temas.
 * @author Steveen Cues
 * @version 1.1.0
 */
const meta = {
  title: "Moleculas/ThemeSelectorPanel",
  component: ThemeSelectorPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSearchChange: fn(),
    onSelectTheme: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof ThemeSelectorPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Panel completo con busqueda y descripciones.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Completo: Story = {
  args: {
    themes: STORY_THEMES,
    totalThemes: STORY_THEMES.length,
    selectedTheme: "light",
    search: "",
    showSearch: true,
    label: "Temas",
    showDescriptions: true,
    translations: PANEL_TRANSLATIONS,
    placement: PANEL_PLACEMENT,
  },
};

/**
 * @description Panel con filtro activo y descripciones ocultas.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Filtrado: Story = {
  args: {
    themes: STORY_THEMES.slice(0, 2),
    totalThemes: STORY_THEMES.length,
    selectedTheme: "dark",
    search: "os",
    showSearch: true,
    label: "Temas",
    showDescriptions: false,
    translations: PANEL_TRANSLATIONS,
    placement: PANEL_PLACEMENT,
  },
};

/**
 * @description Panel que abre hacia arriba con altura limitada, como
 * cuando el activador esta cerca del borde inferior del viewport.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const AbriendoHaciaArriba: Story = {
  args: {
    themes: STORY_THEMES,
    totalThemes: STORY_THEMES.length,
    selectedTheme: "synthwave",
    search: "",
    showSearch: true,
    label: "Temas",
    showDescriptions: true,
    translations: PANEL_TRANSLATIONS,
    placement: {
      vertical: "top",
      horizontal: "left",
      maxHeight: 320,
    },
  },
};
