import { render, screen } from "@testing-library/react";
import Provider from "../../../Providers";
import PriceTableWalk from "../../../Components/PriceTableWalk";

describe("Render the PriceTableWalk component", () => {
  it("Should render the PriceTableWalk component in the page", () => {
    render(
      <Provider>
        <PriceTableWalk anchorEl={null} open={"walkPrice"} />
      </Provider>
    );

    expect(screen.getByText(/PASSEIOS/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Para cães e gatos de pequeno porte: R\$ 20,00/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Para caẽs e gatos de médio porte: R\$ 40,00/i)
    ).toBeInTheDocument();
  });
});
