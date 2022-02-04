import { render, screen } from "@testing-library/react";
import Provider from "../../Providers";
import ModalWalk from "../../Components/Modals/ModalWalk";
import { MemoryRouter } from "react-router-dom";

describe("Render the ModalWalk component", () => {
  it("Should render the ModalWalk component in the page", () => {
    render(
      <MemoryRouter>
        <Provider>
          <ModalWalk open={"walk"} />
        </Provider>
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Passeios educativos com duração de 1 hora/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Em qual dia?/i)).toBeInTheDocument();
    expect(screen.getByText(/Em qual horário?/i)).toBeInTheDocument();
  });
});
