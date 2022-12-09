import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import { Router } from "svelte-routing";
// import { MemoryRouter } from 'react-router-dom';
import NavbarTestWrap from "./NavbarTestWrap.svelte";
// import Navbar from "./Navbar.svelte";
// import { ContextWrapper } from "./ContextWrapper";

describe("Navbar", () => {
  // beforeEach(() => {
  //   render(Navbar, { container: Router });
  // });

  it.skip("has a navbar-end container", () => {
    // render(<Navbar></Navbar>)
    const rightSide = screen.getByTestId("navbar-end");
    expect(rightSide).toBeInTheDocument();
  });

  it("has a logo", () => {
    render(NavbarTestWrap);
    //   render(Navbar, { container: Router });
    const logoImg = screen.getByAltText("The Logo");
    expect(logoImg).toBeInTheDocument();
  });
});
