import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@presentation";
import { useLanguage } from "@aplicacion";

/**
 * @description Stories de la barra de progreso reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Demostracion que consume el catalogo multiidioma de las
 * stories a traves del hook useLanguage.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ConTraduccion = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div className="w-64 sm:w-80">
      <Progress value={65} ariaLabel={t("atoms.progressLabel")} />
    </div>
  );
};

/**
 * @description Barra de progreso con etiqueta traducida.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConEtiqueta: Story = {
  render: (): JSX.Element => <ConTraduccion />,
};

/**
 * @description Barra de progreso indeterminada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Indeterminada: Story = {
  args: {
    ariaLabel: "Cargando",
  },
};

/**
 * @description Variantes semanticas de la barra de progreso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex w-64 flex-col gap-3 sm:w-96">
      <Progress value={80} variant="primary" />
      <Progress value={65} variant="secondary" />
      <Progress value={50} variant="accent" />
      <Progress value={35} variant="success" />
      <Progress value={20} variant="warning" />
      <Progress value={10} variant="error" />
    </div>
  ),
};

/**
 * @description Barra de progreso con clases responsive de Tailwind.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  render: (): JSX.Element => (
    <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
      <Progress value={45} className="h-2 md:h-3 lg:h-4" />
    </div>
  ),
};
