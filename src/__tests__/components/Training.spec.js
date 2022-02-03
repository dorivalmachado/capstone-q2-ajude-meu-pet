import React from "react";
import { render, screen } from "@testing-library/react";
import Training from "../../Components/Training";

describe("Training Component when OK", () => {
  it("should be able to render a component containing specif content", () => {
    render(<Training />);

    const basicTraining = "Adestramento básico";
    const advancedTraining = "Adestramento avançado";
    const groupTraining = "Adestramento grupal";

    const basicElement = screen.getByText(basicTraining);
    const advancedElement = screen.getByText(advancedTraining);
    const groupElement = screen.getByText(groupTraining);

    expect(basicElement).toBeTruthy();
    expect(advancedElement).toBeTruthy();
    expect(groupElement).toBeTruthy();
  });
});
