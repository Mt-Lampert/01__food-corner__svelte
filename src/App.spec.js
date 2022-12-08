import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import App from "./App.svelte";
import { describe, it } from "vitest";

describe("App", () => {
  it("has a 'main' element", () => {
    render(App);
    const main = screen.getByTestId("main");
    expect(main).toBeInTheDocument();
  });
});
