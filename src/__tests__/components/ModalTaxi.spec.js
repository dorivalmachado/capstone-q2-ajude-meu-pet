import { render, screen } from "@testing-library/react";
import Provider from "../../Providers";
import { MemoryRouter } from "react-router-dom";
import ModalTaxi from "../../Components/Modals/ModalTaxi";

describe("Render the ModalTaxi component", () => {
  it("Should render the ModalTaxi component in the page", () => {
    render(
      <MemoryRouter>
        <Provider>
          <ModalTaxi open={"taxi"} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Qual o endereço de origem?/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Qual o endereço de destino?/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Qual o seu pet?/i)).toBeInTheDocument();
  });
});
