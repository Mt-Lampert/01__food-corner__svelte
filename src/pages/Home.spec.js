import { describe, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import HomeTestWrap from "./HomeTestWrap.svelte";

describe("Home", () => {
  beforeEach(() => {
    render(HomeTestWrap);
  });

  it("has a home container", () => {
    const homeContainer = screen.getByTestId("home-container");
    expect(homeContainer).toBeInTheDocument();
  });

  it("has a header container", () => {
    const homeHeader = screen.getByTestId("home-hero");
    expect(homeHeader).toBeInTheDocument();
  });

  it("has an 'Order' call-to-action button", () => {
    const cta = screen.getByRole("button", { name: "Order Now!" });
    expect(cta).toBeInTheDocument();
    // await
  });
});

describe("Home CTA", () => {
  it("has a call-to-action button leading to the catalog", async () => {
    render(HomeTestWrap);
    // const cta = screen.getByRole("button", {name: "Order Now!"})
    const cta = screen.getByRole("link");
    expect(cta).toBeInTheDocument();

    await fireEvent.click(cta);
    setTimeout(() => {
      const menuC = screen.getByTestId("menu-container");
      expect(menuC).toBeInTheDocument();
    }, 100);
  });
});
