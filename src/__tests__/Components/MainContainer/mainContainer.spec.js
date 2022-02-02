import { render, screen } from "@testing-library/react";
import MainContainer from "../../../Components/MainContainer";

describe("Render the MainContainer component correctly", () => {
  it("Should render the MainContainer in the page", () => {
    render(
      <MainContainer>
        <p>Teste</p>
      </MainContainer>
    );

    expect(screen.getByText(/Teste/i)).toBeInTheDocument();
  });
});
