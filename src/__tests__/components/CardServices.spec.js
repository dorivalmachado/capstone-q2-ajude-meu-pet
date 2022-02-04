import { render, screen } from "@testing-library/react";
import CardServices from "../../Components/CardsServices";
import Provider from "../../Providers";

describe("Rendering Services Card in the page", () => {
  it("Should render the CardPets component in the page", () => {
    render(
      <>
        <Provider>
          <CardServices />
        </Provider>
      </>
    );

    expect(screen.getByText("Adestramento")).toBeInTheDocument();

    expect(
      screen.getByText(/Seu pet com a melhor educação/i)
    ).toBeInTheDocument();

    expect(screen.getByText("Passeio")).toBeInTheDocument();

    expect(screen.getByText(/Sem tempo para passear?/i)).toBeInTheDocument();

    expect(screen.getByText("Taxi-Pet")).toBeInTheDocument();

    expect(
      screen.getByText(/Precisando de alguém para levar/i)
    ).toBeInTheDocument();
  });
});
