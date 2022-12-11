import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom"
import About from "./About.svelte";

describe("About Page", () => {
  beforeEach(() => {
    render(About);
  });

  it("has an 'About' container", () => {
    const aboutContainer = screen.getByTestId("about");
    expect(aboutContainer).toBeInTheDocument();
  });

  it("has a 'top' container", () => {
    const topC = screen.getByTestId("top");
    expect(topC).toBeInTheDocument();
  });

  it("has a 'bottom' container", () => {
    const botC = screen.getByTestId("bottom");
    expect(botC).toBeInTheDocument();
  });

  it("has a title", () => {
    const title = screen.getByRole("heading", {name: "About Us"});
    expect(title).toBeInTheDocument();
  });

  it("has a describing paragraph", () => {
    const desc = screen.getByText(/^Lorem ipsum/);
    expect(desc).toBeInTheDocument();
  });
});
