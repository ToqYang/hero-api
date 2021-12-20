import { Button } from "../../components/forms/Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button Test", () => {
  test("Text in the btn ", () => {
    const txt = "My text work";
    render(<Button text={txt} onClick={() => void 0} />);
    const testBtn = screen.getByText(/My text work/i);
    expect(testBtn).toBeInTheDocument();
  });
});
