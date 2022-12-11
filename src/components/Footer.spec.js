import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom"
import Footer from "./Footer.svelte";

describe("Footer", () => {
  beforeEach(() => {
    render(Footer);
  });

  it("has a footer container", () => {
    const footerContainer = screen.getByTestId("footer-container");
    expect(footerContainer).toBeInTheDocument();
  });

  it("has a social-media container", () => {
    const footerContainer = screen.getByTestId("socialMedia-container");
    expect(footerContainer).toBeInTheDocument();
  });

  it("has a copyright container", () => {
    const copyrightContainer = screen.getByTestId("copyright-container");
    expect(copyrightContainer).toBeInTheDocument();
  });
});
