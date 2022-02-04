import { render, screen } from "@testing-library/react";
import Footer from "../../Components/Footer";
import { MemoryRouter } from "react-router-dom";

describe("Rendering Footer component", () => {
  it("Should render Footer component in the page", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // expect(screen.getByText(/Saiba mais/i)).toBeInTheDocument();
    expect(screen.getByText(/Sobre nós/i)).toBeInTheDocument();
    expect(screen.getByText(/@2022 Ajude Meu Pet/i)).toBeInTheDocument();
    expect(screen.getByText(/All Rights Reserved/i)).toBeInTheDocument();
  });
});
