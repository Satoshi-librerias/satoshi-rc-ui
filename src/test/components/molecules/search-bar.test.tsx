import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { SearchBar } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula SearchBar.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("SearchBar", (): void => {
  it("renderiza el campo y el boton de envio", (): void => {
    renderWithProviders(<SearchBar ariaLabel="Buscar" />);

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renderiza el valor controlado", (): void => {
    renderWithProviders(<SearchBar ariaLabel="Buscar" value="termino" />);

    expect(screen.getByRole("searchbox")).toHaveValue("termino");
  });

  it("ejecuta el callback al escribir", async (): Promise<void> => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWithProviders(<SearchBar ariaLabel="Buscar" onChange={onChange} />);

    await user.type(screen.getByRole("searchbox"), "x");

    expect(onChange).toHaveBeenCalledWith("x");
  });

  it("ejecuta el envio con el valor actual al pulsar Enter", async (): Promise<void> => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    renderWithProviders(
      <SearchBar ariaLabel="Buscar" onSubmit={onSubmit} value="resultado" />,
    );

    await user.type(screen.getByRole("searchbox"), "{Enter}");

    expect(onSubmit).toHaveBeenCalledWith("resultado");
  });

  it("ejecuta el envio al pulsar el boton", async (): Promise<void> => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    renderWithProviders(
      <SearchBar ariaLabel="Buscar" onSubmit={onSubmit} value="dato" />,
    );

    await user.click(screen.getByRole("button"));

    expect(onSubmit).toHaveBeenCalledWith("dato");
  });

  it("deshabilita el campo y el boton cuando se configura", (): void => {
    renderWithProviders(<SearchBar ariaLabel="Buscar" disabled />);

    expect(screen.getByRole("searchbox")).toBeDisabled();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("usa el tipo search nativo en el campo", (): void => {
    renderWithProviders(<SearchBar ariaLabel="Buscar" />);

    expect(screen.getByRole("searchbox")).toHaveAttribute("type", "search");
  });

  it("aplica clases adicionales al formulario", (): void => {
    renderWithProviders(
      <SearchBar ariaLabel="Buscar" className="w-40 md:w-80" />,
    );

    expect(screen.getByRole("search")).toHaveClass("w-40", "md:w-80");
  });
});
