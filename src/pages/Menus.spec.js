import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import '@testing-library/jest-dom'
 import Menus from "./Menu.svelte";

describe("Menus Page", () => {
  beforeEach(() => {
    render(Menus);
  });

  it("has a title", () => {
    const menuTitle = screen.getByRole("heading", { name: "Our Dishes" });
    expect(menuTitle).toBeInTheDocument();
  });

  it("has a menus container", () => {
    const menuContainer = screen.getByTestId("menu-container");
    expect(menuContainer).toBeInTheDocument();
  });

  it.skip("has a number of menu items", () => {
    const menuems = screen.getAllByTestId("mi-container");
    expect(menuems.length).toBe(6);
    const masalaDosa = screen.getByRole("heading", { name: "Masala Dosa" });
    expect(masalaDosa).toBeInTheDocument();
  });
});
