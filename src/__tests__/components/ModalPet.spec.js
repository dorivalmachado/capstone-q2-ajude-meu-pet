import { render, screen } from "@testing-library/react";
import Provider from "../../Providers";

import ModalPet from "../../Components/Modals/ModalPet";

describe("Render the ModalPet component", () => {
  it("Should render the ModalPet component, add pet", () => {
    render(
      <Provider>
        <ModalPet open={true} add={true} />
      </Provider>
    );

    expect(screen.getByText(/Tipo/i)).toBeInTheDocument();
    expect(screen.getByText(/Adicione seu pet/i)).toBeInTheDocument();
    expect(screen.queryByText(/Excluir pet/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Salvar as alterações/i)).toBeInTheDocument();
  });

  it("Should render the ModalPet component, editing pet", () => {
    render(
      <Provider>
        <ModalPet open={true} add={false} />
      </Provider>
    );

    expect(screen.getByText(/Tipo/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Altere as informações do seu pet/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Salvar as alterações/i)).toBeInTheDocument();
    expect(screen.getByText(/Excluir pet/i)).toBeInTheDocument();
  });
});
