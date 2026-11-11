import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Divider } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Divider.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Divider", (): void => {
  it("renderiza el separador horizontal por defecto", (): void => {
    renderWithProviders(<Divider />);

    expect(screen.getByRole("separator")).toHaveClass("divider");
    expect(screen.getByRole("separator").className).not.toContain(
      "divider-vertical",
    );
  });

  it("aplica la orientacion vertical configurada", (): void => {
    renderWithProviders(<Divider orientation="vertical" />);

    expect(screen.getByRole("separator")).toHaveClass("divider-vertical");
  });

  it("renderiza el texto centrado cuando se proporciona", (): void => {
    renderWithProviders(<Divider>o</Divider>);

    expect(screen.getByText("o")).toBeInTheDocument();
  });

  it("aplica clases adicionales del atributo className", (): void => {
    renderWithProviders(<Divider className="my-4 md:my-6" />);

    expect(screen.getByRole("separator")).toHaveClass("my-4", "md:my-6");
  });
});
