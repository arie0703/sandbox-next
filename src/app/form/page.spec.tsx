import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Form from "./page";

describe("Form", () => {
  it("フォームのレンダリング", async () => {
    render(<Form/>);
    expect(screen.getByText("Sample Form")).toBeInTheDocument();
  });

  it("スナップショットテスト", () => {
    const { asFragment } = render(<Form/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
