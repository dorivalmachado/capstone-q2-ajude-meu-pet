import { render, screen } from "@testing-library/react";
import Button from "../../../Components/Button";

describe("Button test", () => {
  it("Should render the component Button on page", () => {
    render(<Button />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
