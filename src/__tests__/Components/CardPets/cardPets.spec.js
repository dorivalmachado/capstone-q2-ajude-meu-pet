import { render, screen } from "@testing-library/react";
import CardPets from "../../../Components/CardPets";

describe("Rendering CardImage component", () => {
  it("Should render the CardPets component in the page", () => {
    render(<CardPets animalType="Cachorro" petBirthDate="01/01/2022" />);

    expect(screen.getByAltText("Cachorro")).toBeInTheDocument();
  });
});
