import { render, screen } from "@testing-library/react";
import Input from "../../Components/Input";

const register = jest.fn();

describe("Render the Input component", () => {
  it("Should render the Input component in the page", () => {
    render(<Input placeholder="Teste de input" register={register} />);

    expect(screen.getByPlaceholderText(/Teste de input/i)).toBeInTheDocument();
  });
});
