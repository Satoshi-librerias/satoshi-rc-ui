import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchBar } from "@presentation";
import { useState } from "react";

/**
 * @description Stories de la molecula barra de busqueda de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Barra controlada con envio por formulario.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Basica: Story = {
  render: () => {
    const [query, setQuery] = useState("");

    return (
      <SearchBar
        placeholder="Buscar productos..."
        ariaLabel="Buscar productos"
        value={query}
        onChange={setQuery}
        onSubmit={(submitted): void => setQuery(submitted)}
      />
    );
  },
};

/**
 * @description Barra pequena.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Pequena: Story = {
  args: {
    placeholder: "Buscar...",
    size: "sm",
    ariaLabel: "Busqueda compacta",
  },
};

/**
 * @description Barra grande.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Grande: Story = {
  args: {
    placeholder: "Buscar...",
    size: "lg",
    ariaLabel: "Busqueda destacada",
  },
};

/**
 * @description Barra deshabilitada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Deshabilitada: Story = {
  args: {
    placeholder: "No disponible",
    disabled: true,
  },
};

/**
 * @description Barra responsive con ancho ajustado por breakpoint.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  args: {
    placeholder: "Buscar...",
    className: "w-48 sm:w-72 md:w-96",
    ariaLabel: "Busqueda responsive",
  },
};
