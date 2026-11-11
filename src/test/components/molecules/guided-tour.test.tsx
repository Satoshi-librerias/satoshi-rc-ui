import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { GuidedTour } from "@presentation";

const translations = {
  openGuide: "Open guide",
  stepOf: "Step {current} of {total}",
  back: "Back",
  next: "Next",
  skip: "Skip guide",
  finish: "Finish",
};

const steps = [
  {
    targetId: "intro",
    title: "Introduction",
    description: "Welcome",
  },
  {
    targetId: "contact",
    title: "Contact",
    description: "Get in touch",
  },
];

describe("GuidedTour", (): void => {
  beforeEach(() => {
    window.localStorage.clear();
    HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it("starts automatically once and persists completion", async (): Promise<void> => {
    const user = userEvent.setup();
    render(
      <>
        <section id="intro" />
        <section id="contact" />
        <GuidedTour
          steps={steps}
          storageKey="test-tour"
          translations={translations}
        />
      </>,
    );

    expect(await screen.findByRole("dialog")).toHaveAccessibleName(
      "Introduction",
    );
    expect(
      screen.getByRole("progressbar", { name: "Step 1 of 2" }),
    ).toHaveAttribute("aria-valuenow", "1");
    expect(screen.getByRole("progressbar").firstElementChild).toHaveStyle({
      width: "50%",
    });
    expect(document.querySelector(".z-\\[80\\]")).toHaveStyle({
      backgroundColor:
        "color-mix(in srgb, var(--color-base-content) 45%, transparent)",
    });
    expect(document.getElementById("intro")).toHaveStyle({
      position: "relative",
      zIndex: "81",
    });
    const skipButtons = screen.getAllByRole("button", { name: "Skip guide" });
    await user.click(skipButtons[skipButtons.length - 1]!);

    expect(window.localStorage.getItem("test-tour")).toBe("completed");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.querySelector(".z-\\[80\\]")).not.toBeInTheDocument();
    expect(document.getElementById("intro")).toHaveStyle({ zIndex: "" });
  });

  it("allows reopening and navigating the guide after completion", async (): Promise<void> => {
    const user = userEvent.setup();
    window.localStorage.setItem("test-tour", "completed");
    render(
      <>
        <section id="intro" />
        <section id="contact" />
        <GuidedTour
          steps={steps}
          storageKey="test-tour"
          translations={translations}
        />
      </>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Open guide" }));
    await user.click(screen.getByRole("button", { name: "Next" }));

    expect(
      screen.getByRole("heading", { name: "Contact" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Step 2 of 2")).toBeInTheDocument();
    expect(
      screen.getByRole("progressbar", { name: "Step 2 of 2" }),
    ).toHaveAttribute("aria-valuenow", "2");
    expect(screen.getByRole("progressbar").firstElementChild).toHaveStyle({
      width: "100%",
    });
    await user.click(screen.getByRole("button", { name: "Finish" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("waits until enabled before automatically opening the tour", async (): Promise<void> => {
    const user = userEvent.setup();
    const { rerender } = render(
      <>
        <section id="intro" />
        <section id="contact" />
        <GuidedTour
          enabled={false}
          steps={steps}
          storageKey="test-tour"
          translations={translations}
        />
      </>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    rerender(
      <>
        <section id="intro" />
        <section id="contact" />
        <GuidedTour
          enabled
          steps={steps}
          storageKey="test-tour"
          translations={translations}
        />
      </>,
    );

    expect(await screen.findByRole("dialog")).toHaveAccessibleName(
      "Introduction",
    );
    await user.click(
      screen.getAllByRole("button", { name: "Skip guide" }).at(-1)!,
    );
  });
});
