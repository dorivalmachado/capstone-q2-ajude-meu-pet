import { render, screen } from "@testing-library/react";
import Provider from "../../../Providers";
import PriceTableTraining from "../../../Components/PriceTableTraining";

describe("Render the PriceTableTraining component", () => {
  it("Should render the PriceTableTraining component in the page", () => {
    render(
      <Provider>
        <PriceTableTraining anchorEl={null} open={"trainingPrice"} />
      </Provider>
    );

    expect(screen.getByText(/básico/i)).toBeInTheDocument();
    expect(screen.getByText(/avançado/i)).toBeInTheDocument();
  });
});
