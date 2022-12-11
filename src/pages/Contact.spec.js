import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import Contact from "./Contact.svelte";

describe("Contact Page", () => {
  beforeEach(() => {
    render(Contact);
  });

  it("has a component container", () => {
    const contactC = screen.getByTestId("contact-container");
    expect(contactC).toBeInTheDocument();
  });

  it("has an image container", () => {
    const imageC = screen.getByTestId("image-container");
    expect(imageC).toBeInTheDocument();
  });

  it("has a form container", () => {
    const formC = screen.getByTestId("form-container");
    expect(formC).toBeInTheDocument();
  });

  it("has a title", () => {
    const title = screen.getByRole("heading", { name: "Contact Us!" });
    expect(title).toBeInTheDocument();
  });

  describe("having a contact form", () => {
    it("the form is visible", () => {
      const form = screen.getByRole("form", { name: /contact-form/i });
      expect(form).toBeInTheDocument();
    });

    it("has a name field", () => {
      const nameField = screen.getByLabelText("Name");
      expect(nameField).toBeInTheDocument();
    });

    it("has an email field", () => {
      const emailField = screen.getByLabelText("Email");
      expect(emailField).toBeInTheDocument();
    });

    it("has a message field", () => {
      const messageField = screen.getByLabelText(/your message/i);
      expect(messageField).toBeInTheDocument();
    });

    it("has a submit button", () => {
      const submitButton = screen.getByRole("button", { name: "Submit" });
      expect(submitButton).toBeInTheDocument();
    });
  });
});
