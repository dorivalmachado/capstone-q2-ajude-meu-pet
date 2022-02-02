import { render, screen } from "@testing-library/react";
import Provider from "../../../Providers";
import ModalTraining from "../../../Components/ModalTraining";

describe("Render the ModalTraining component", () => {
  it("Should render the ModalTraining component in the page", () => {
    render(
      <Provider>
        <ModalTraining open={"training"} />
      </Provider>
    );

    expect(
      screen.getByText(/Selecione o tipo de adestramento/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Qual o seu pet?/i)).toBeInTheDocument();
    expect(screen.getByText(/Alguma observação?/i)).toBeInTheDocument();
  });
});
