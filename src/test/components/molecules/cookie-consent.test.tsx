import { beforeEach, describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { CookieConsent } from "@presentation";

const translations = {
  title: "Privacy matters",
  description: "Cookie description",
  details: "Preference details",
  settings: "Privacy settings",
  necessary: "Necessary storage",
  optional: "Optional cookies",
  acceptAll: "Allow optional",
  necessaryOnly: "Necessary only",
  manage: "Configure",
  save: "Save preferences",
};

describe("CookieConsent", (): void => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("offers a necessary-only choice and persists it", async (): Promise<void> => {
    const user = userEvent.setup();
    let preferenceSaved = false;
    render(
      <CookieConsent
        onPreferenceSaved={() => {
          preferenceSaved = true;
        }}
        storageKey="test-consent"
        translations={translations}
      />,
    );

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
    expect(screen.getByRole("dialog")).toHaveClass("bottom-4");
    expect(
      screen.getByRole("heading", { name: "Privacy matters" }),
    ).toHaveClass("justify-center");
    expect(document.querySelector(".z-\\[80\\]")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Necessary only" }));

    expect(window.localStorage.getItem("test-consent")).toBe(
      JSON.stringify({ necessary: true, optional: false }),
    );
    expect(preferenceSaved).toBe(true);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("lets visitors configure optional cookies and reopen privacy settings", async (): Promise<void> => {
    const user = userEvent.setup();
    render(
      <CookieConsent storageKey="test-consent" translations={translations} />,
    );

    await user.click(await screen.findByRole("button", { name: "Configure" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await user.click(
      screen.getByRole("checkbox", { name: "Optional cookies" }),
    );
    await user.click(screen.getByRole("button", { name: "Save preferences" }));

    expect(
      JSON.parse(window.localStorage.getItem("test-consent") ?? "{}"),
    ).toEqual({
      necessary: true,
      optional: true,
    });

    await user.click(screen.getByRole("button", { name: "Privacy settings" }));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Optional cookies" }),
    ).toBeChecked();
  });
});
