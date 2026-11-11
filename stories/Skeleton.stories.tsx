import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "@presentation";
import { useLanguage } from "@aplicacion";

/**
 * @description Stories del placeholder de carga reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

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
    <Skeleton
      variant="rectangle"
      className="h-24 w-64 sm:w-96"
      ariaLabel={t("atoms.skeletonLabel")}
    />
  );
};

/**
 * @description Placeholder rectangular con etiqueta traducida.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConEtiqueta: Story = {
  render: (): JSX.Element => <ConTraduccion />,
};

/**
 * @description Formas disponibles del placeholder.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Formas: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-4">
      <Skeleton variant="circle" className="size-16" />
      <Skeleton variant="rectangle" className="h-16 w-48" />
      <Skeleton variant="text" className="h-4 w-32" />
    </div>
  ),
};

/**
 * @description Composicion tipo tarjeta esqueleto con clases responsive.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TarjetaEsqueleto: Story = {
  render: (): JSX.Element => (
    <div className="flex w-full max-w-xs flex-col gap-4 md:max-w-sm lg:max-w-md">
      <Skeleton variant="rectangle" className="h-32 w-full md:h-40" />
      <Skeleton variant="text" className="h-4 w-3/4" />
      <Skeleton variant="text" className="h-4 w-1/2" />
    </div>
  ),
};
