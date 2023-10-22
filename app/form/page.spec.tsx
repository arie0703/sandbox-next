import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Form from "./page";

describe("Index page", () => {
  it("renders index page", async () => {
    render(<Form/>);
    expect(screen.getByText("Sample Form")).toBeInTheDocument();
  });
});
