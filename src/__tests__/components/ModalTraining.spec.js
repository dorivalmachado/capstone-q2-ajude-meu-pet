import { render, screen } from "@testing-library/react";
import Provider from "../../Providers";
import { MemoryRouter } from "react-router-dom";
import ModalTraining from "../../Components/Modals/ModalTraining";

describe("Render the ModalTraining component", () => {
  it("Should render the ModalTraining component in the page", () => {
    render(
      <MemoryRouter>
        <Provider>
          <ModalTraining open={"training"} />
        </Provider>
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Selecione o tipo de adestramento/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Qual o seu pet?/i)).toBeInTheDocument();
    expect(screen.getByText(/Alguma observação?/i)).toBeInTheDocument();
  });
});
