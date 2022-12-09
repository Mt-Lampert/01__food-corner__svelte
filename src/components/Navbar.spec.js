import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import NavbarTestWrap from "./NavbarTestWrap.svelte";

describe("Navbar", () => {
  beforeEach(() => {
    render(NavbarTestWrap);
  });

  it("has a navbar-end container", () => {
    const rightSide = screen.getByTestId("navbar-end");
    expect(rightSide).toBeInTheDocument();
  });

  it("has a logo", () => {
    const logoImg = screen.getByAltText("The Logo");
    expect(logoImg).toBeInTheDocument();
  });
});
