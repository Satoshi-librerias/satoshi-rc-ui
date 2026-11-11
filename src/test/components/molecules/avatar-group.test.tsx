import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { AvatarGroup } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

const MEMBERS = [
  { initials: "SC" },
  { initials: "AB" },
  { src: "https://example.com/foto.jpg", alt: "Foto" },
];

/**
 * @description Pruebas unitarias de la molecula AvatarGroup.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("AvatarGroup", (): void => {
  it("renderiza los miembros configurados con el atomo Avatar", (): void => {
    renderWithProviders(<AvatarGroup members={MEMBERS} />);

    expect(screen.getByText("SC")).toBeInTheDocument();
    expect(screen.getByText("AB")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Foto" })).toHaveAttribute(
      "src",
      "https://example.com/foto.jpg",
    );
  });

  it("limita los avatares visibles al maximo configurado", (): void => {
    renderWithProviders(<AvatarGroup members={MEMBERS} maxVisible={2} />);

    expect(screen.getByText("SC")).toBeInTheDocument();
    expect(screen.getByText("AB")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("usa cuatro visibles por defecto", (): void => {
    const manyMembers = [
      { initials: "A" },
      { initials: "B" },
      { initials: "C" },
      { initials: "D" },
      { initials: "E" },
    ];

    renderWithProviders(<AvatarGroup members={manyMembers} />);

    expect(screen.getByText("+1")).toBeInTheDocument();
  });

  it("muestra el contador de miembros ocultos", (): void => {
    renderWithProviders(<AvatarGroup members={MEMBERS} maxVisible={1} />);

    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(<AvatarGroup ariaLabel="Equipo" members={MEMBERS} />);

    expect(screen.getByLabelText("Equipo")).toBeInTheDocument();
  });

  it("aplica el tamano configurado al grupo", (): void => {
    renderWithProviders(<AvatarGroup members={MEMBERS} size="lg" />);

    expect(screen.getByText("SC").closest(".avatar-group")).toHaveClass("w-16");
  });

  it("aplica clases adicionales al contenedor", (): void => {
    const { container } = renderWithProviders(
      <AvatarGroup className="hidden md:flex" members={MEMBERS} />,
    );

    expect(container.firstElementChild).toHaveClass("hidden", "md:flex");
  });
});
