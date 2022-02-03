import React from "react";
import { render, screen} from "@testing-library/react";
import Ride from "../../Components/Ride";

describe("Ride Component when OK", () => {
  it("should be able to render a component containing specif content", () => {
    render(<Ride />);

    const imgAltRide1 = 'mulher caminhando com cachorro';
    const textContent1 = "Você acha que o seu animalzinho de estimação está fora de forma? Nossos passeios são a alternativa certa para você. Nossos profissionais fazem caminhadas ou corridas com os pets nas mais variadas distâncias, para que seu pet tenha a medida certa de exercícios.";
  
    const imgElement1 = screen.getByAltText(imgAltRide1);
    const textElement1 = screen.getByText(textContent1);
    
    expect(imgElement1).toHaveAttribute('src', 'LogoCaminhada.jpg');
    expect(textElement1).toBeTruthy();
  })
})
