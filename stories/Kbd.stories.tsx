import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd } from "@presentation";
import { useLanguage } from "@aplicacion";

/**
 * @description Stories de la tecla de atajo reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>;

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
    <div className="flex items-center gap-2 text-sm">
      <span>{t("atoms.shortcut")}:</span>
      <Kbd size="sm">Ctrl</Kbd>
      <Kbd size="sm">+</Kbd>
      <Kbd size="sm">K</Kbd>
    </div>
  );
};

/**
 * @description Combinacion de teclas con etiqueta traducida.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConEtiqueta: Story = {
  render: (): JSX.Element => <ConTraduccion />,
};

/**
 * @description Variantes de color de la tecla.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-3">
      <Kbd variant="primary">A</Kbd>
      <Kbd variant="secondary">B</Kbd>
      <Kbd variant="accent">C</Kbd>
      <Kbd variant="neutral">D</Kbd>
    </div>
  ),
};

/**
 * @description Tamanos disponibles de la tecla.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Tamanos: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-3">
      <Kbd size="xs">Esc</Kbd>
      <Kbd size="sm">Esc</Kbd>
      <Kbd size="md">Esc</Kbd>
      <Kbd size="lg">Esc</Kbd>
    </div>
  ),
};
