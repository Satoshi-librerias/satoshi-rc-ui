import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "@presentation";

/**
 * @description Stories del contenedor de contenido de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Container",
  component: Container,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Contenedor con alineacion por defecto entre extremos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PorDefecto: Story = {
  args: {
    children: (
      <>
        <span className="font-semibold">Inicio</span>
        <span className="text-base-content/60">Final</span>
      </>
    ),
  },
};

/**
 * @description Anchos maximos disponibles del contenedor.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AnchosMaximos: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["sm", "md", "lg", "xl", "full"] as const).map((maxWidth) => (
        <Container
          key={maxWidth}
          maxWidth={maxWidth}
          align="center"
          className="rounded-xl border border-base-300 bg-base-200 p-3"
        >
          <span className="text-sm">maxWidth: {maxWidth}</span>
        </Container>
      ))}
    </div>
  ),
};

/**
 * @description Contenedor en direccion columna con espaciado amplio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const EnColumna: Story = {
  args: {
    direction: "column",
    align: "start",
    gap: "lg",
    children: (
      <>
        <span>Primer elemento</span>
        <span>Segundo elemento</span>
        <span>Tercer elemento</span>
      </>
    ),
  },
};

/**
 * @description Contenedor renderizado como section semantica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ComoSeccion: Story = {
  args: {
    as: "section",
    align: "center",
    className: "rounded-xl border border-base-300 bg-base-200 p-4",
    children: <span>Contenido de la seccion</span>,
  },
};
