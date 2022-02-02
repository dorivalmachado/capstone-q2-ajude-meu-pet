import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Providers from "../../../Providers";

import { HeaderLogged } from "../../../Components/HeaderLogged";

describe("Render the side bar", () => {
  it("Should render the side bar when user is logged", () => {
    render(
      <Providers>
        <MemoryRouter>
          <HeaderLogged />
        </MemoryRouter>
      </Providers>
    );

    expect(screen.getByText("Perfil")).toBeInTheDocument();
    expect(screen.getByText("Meus pets")).toBeInTheDocument();
    expect(screen.getByText("Serviços")).toBeInTheDocument();
  });
});
