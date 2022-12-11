import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import MenuItem from "./MenuItem.svelte";

describe("Menu Item", () => {
  beforeEach(() => {
    const dish = {
      name: "Masala Dosa",
      image: "dosa.jpg",
      price: "99,99",
    };
    render(MenuItem, { dish });
  });

  it("has a menu-item container", () => {
    const miContainer = screen.getByTestId("mi-container");
    expect(miContainer).toBeInTheDocument();
  });

  it("has an image", () => {
    const miImage = screen.getByAltText(/Masala Dosa/);
    expect(miImage).toBeInTheDocument();
  });

  it("has a title", () => {
    const miTitle = screen.getByRole("heading", { name: "Masala Dosa" });
  });

  it("has a price", () => {
    const miPrice = screen.getByText(/99,99/);
    expect(miPrice).toBeInTheDocument();
  });
});
