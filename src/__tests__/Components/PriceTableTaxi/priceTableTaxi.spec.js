import { render, screen } from "@testing-library/react";
import Provider from "../../../Providers";
import PriceTableTaxi from "../../../Components/PriceTableTaxi";

describe("Render the ModalTaxi component", () => {
  it("Should render the ModalTaxi component in the page", () => {
    render(
      <Provider>
        <PriceTableTaxi anchorEl={null} open={"taxiPrice"} />
      </Provider>
    );

    expect(screen.getByText(/TAXI-PET/i)).toBeInTheDocument();
    expect(
      screen.getByText(/O preço médio das viagens é de R\$ 10,00 a R\$ 40,00/i)
    ).toBeInTheDocument();
  });
});
