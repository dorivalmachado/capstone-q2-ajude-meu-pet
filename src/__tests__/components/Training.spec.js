import React from "react";
import { render, screen} from "@testing-library/react";
import Training from "../../Components/Training";

describe("Training Component when OK", () => {
  it("should be able to render a component containing specif content", () => {
    render(<Training />);

    const basicTraining = 'Adestramento básico';
    const advancedTraining = 'Adestramento avançado';
    const groupTraining = 'Adestramento grupal';
    const imgAltTraining1 = 'Cachorro dando a pata para uma mulher';
    const imgAltTraining2 = 'Gato com um homem';
  
    const basicElement = screen.getByText(basicTraining);
    const advancedElement = screen.getByText(advancedTraining);
    const groupElement = screen.getByText(groupTraining);
    const imgElement1 = screen.getByAltText(imgAltTraining1);
    const imgElement2 = screen.getByAltText(imgAltTraining2);
    
    expect(basicElement).toBeTruthy();
    expect(advancedElement).toBeTruthy();
    expect(groupElement).toBeTruthy();
    expect(imgElement1).toHaveAttribute('src', 'LogoAdestramento1.jpeg');
    expect(imgElement2).toHaveAttribute('src', 'LogoAdestramento2.jpeg');
  })
})
