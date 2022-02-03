import React from "react";
import { render, screen} from "@testing-library/react";
import TaxiPet from "../../Components/TaxiPet";

describe("TaxiPet Component when OK", () => {
  it("should be able to render a component containing specif content", () => {
    render(<TaxiPet />);

    const imgAltTaxiPet1 = 'cachorro de óculos na janela do carro';
    const textContent1 = "Se seu pet está com a agenda cheia de compromissos e você não tem tempo de levá-lo, nós fazemos isso para você. Com o taxi-pet seu animalzinho sempre estará na hora certa e no lugar certo.";
  
    const imgElement1 = screen.getByAltText(imgAltTaxiPet1);
    const textElement1 = screen.getByText(textContent1);
    
    expect(imgElement1).toHaveAttribute('src', 'LogoPetTaxi.jpg');
    expect(textElement1).toBeTruthy();
  })
})
