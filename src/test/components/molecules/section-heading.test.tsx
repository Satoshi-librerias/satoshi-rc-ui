import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { SectionHeading } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula SectionHeading.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("SectionHeading", (): void => {
  it("renderiza el titulo como encabezado de segundo nivel por defecto", (): void => {
    renderWithProviders(<SectionHeading title="Resumen" />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Resumen" }),
    ).toBeInTheDocument();
  });

  it("respeta el nivel semantico configurado", (): void => {
    renderWithProviders(<SectionHeading level={4} title="Detalle" />);

    expect(
      screen.getByRole("heading", { level: 4, name: "Detalle" }),
    ).toBeInTheDocument();
  });

  it("renderiza el subtitulo opcional", (): void => {
    renderWithProviders(
      <SectionHeading subtitle="Metricas del mes" title="Resumen" />,
    );

    expect(screen.getByText("Metricas del mes")).toBeInTheDocument();
  });

  it("renderiza etiqueta superior y aplica el tamano visual solicitado", (): void => {
    renderWithProviders(
      <SectionHeading eyebrow="Producto" size="lg" title="Resumen" />,
    );

    expect(screen.getByText("Producto")).toHaveClass(
      "uppercase",
      "text-primary",
    );
    expect(screen.getByRole("heading", { name: "Resumen" })).toHaveClass(
      "sm:text-4xl",
    );
  });

  it("centra la composicion sin cambiar el nivel semantico", (): void => {
    renderWithProviders(
      <SectionHeading align="center" level={3} title="Resumen" />,
    );

    const heading = screen.getByRole("heading", { level: 3, name: "Resumen" });
    expect(heading.closest("header")).toHaveClass(
      "items-center",
      "text-center",
    );
  });

  it("aplica un identificador al titulo semantico", (): void => {
    renderWithProviders(<SectionHeading id="section-title" title="Resumen" />);

    expect(screen.getByRole("heading", { name: "Resumen" })).toHaveAttribute(
      "id",
      "section-title",
    );
  });

  it("renderiza la accion opcional alineada a la derecha", (): void => {
    renderWithProviders(
      <SectionHeading
        action={<span data-testid="heading-action">Accion</span>}
        title="Resumen"
      />,
    );

    expect(screen.getByTestId("heading-action")).toBeInTheDocument();
  });

  it("aplica clases responsive adicionales al contenedor", (): void => {
    renderWithProviders(
      <SectionHeading className="gap-2 md:gap-4" title="Resumen" />,
    );

    expect(
      screen.getByRole("heading", { name: "Resumen" }).closest("header"),
    ).toHaveClass("gap-2", "md:gap-4");
  });
});
