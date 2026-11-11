import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Avatar } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Avatar.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Avatar", (): void => {
  it("renderiza las iniciales sin imagen", (): void => {
    renderWithProviders(<Avatar initials="SC" />);

    expect(screen.getByText("SC")).toBeInTheDocument();
  });

  it("renderiza la imagen cuando se proporciona src", (): void => {
    renderWithProviders(
      <Avatar src="https://example.com/foto.jpg" alt="Foto" />,
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", "https://example.com/foto.jpg");
    expect(image).toHaveAttribute("alt", "Foto");
  });

  it("usa la variante neutral por defecto", (): void => {
    renderWithProviders(<Avatar initials="AB" />);

    expect(screen.getByText("AB").parentElement).toHaveClass("avatar");
  });

  it("aplica clases adicionales del atributo className", (): void => {
    renderWithProviders(<Avatar initials="CD" className="hidden md:flex" />);

    expect(screen.getByText("CD").parentElement).toHaveClass(
      "hidden",
      "md:flex",
    );
  });
});
