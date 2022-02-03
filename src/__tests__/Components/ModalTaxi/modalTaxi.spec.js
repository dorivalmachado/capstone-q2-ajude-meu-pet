import { render, screen } from "@testing-library/react";
import Provider from "../../../Providers";
import ModalTaxi from "../../../Components/ModalTaxi";

describe("Render the ModalTaxi component", () => {
  it("Should render the ModalTaxi component in the page", () => {
    render(
      <Provider>
        <ModalTaxi open={"taxi"} />
      </Provider>
    );

    expect(screen.getByText(/Qual o endereço de origem?/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Qual o endereço de destino?/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Qual o seu pet?/i)).toBeInTheDocument();
  });
});
