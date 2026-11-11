import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "@presentation";

/**
 * @description Stories de la molecula paginacion de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Paginacion controlada con elipsis automatica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Controlada: Story = {
  render: () => {
    const [page, setPage] = useState(5);

    return <Pagination page={page} totalPages={20} onPageChange={setPage} />;
  },
};

/**
 * @description Paginacion corta sin elipsis.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Corta: Story = {
  args: {
    page: 2,
    totalPages: 4,
  },
};

/**
 * @description Paginacion con etiquetas traducidas del catalogo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConTraduccion: Story = {
  args: {
    page: 1,
    totalPages: 10,
    ariaLabel: "molecules.pagination",
  },
};

/**
 * @description Paginacion pequena responsive.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Pequena: Story = {
  args: {
    page: 3,
    totalPages: 12,
    size: "sm",
    className: "text-xs sm:text-sm",
  },
};
