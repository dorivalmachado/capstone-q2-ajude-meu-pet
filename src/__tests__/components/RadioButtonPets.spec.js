import React from "react";
import { render, screen} from "@testing-library/react";
import RadioButtonPets from "../../Components/RadioButtonPets";

describe("RadioButtonPets Component when OK", () => {
  it("should be able to render a component containing cat content", () => {
    render(<RadioButtonPets petName='bituca' animalType='gato' label='labeled' name='any' id='any' value='customValue' register={() => { }} />);
    
    const labelRadioButtonPets = 'bituca';
    const valueRadioButtonPets = 'customValue';
    const imgAltRadioButtonPets = 'gato';
  
    const buttonLabelElementPets = screen.getByText(labelRadioButtonPets);
    const buttonValueElementPets = screen.getByDisplayValue(valueRadioButtonPets);
    const imgElementRadioButtonPets = screen.getByAltText(imgAltRadioButtonPets);
    
    expect(buttonLabelElementPets).toBeTruthy();
    expect(buttonValueElementPets).toBeTruthy();
    expect(imgElementRadioButtonPets).toHaveAttribute('src', 'cat.png');
  })

  it("should be able to render a component containing dog content", () => {
    render(<RadioButtonPets petName='pitoco' animalType='cachorro' label='labeled' name='any' id='any' value='customValue' register={() => { }} />);
    
    const labelRadioButtonPets = 'pitoco';
    const valueRadioButtonPets = 'customValue';
    const imgAltRadioButtonPets = 'cachorro';
  
    const buttonLabelElementPets = screen.getByText(labelRadioButtonPets);
    const buttonValueElementPets = screen.getByDisplayValue(valueRadioButtonPets);
    const imgElementRadioButtonPets = screen.getByAltText(imgAltRadioButtonPets);
    
    expect(buttonLabelElementPets).toBeTruthy();
    expect(buttonValueElementPets).toBeTruthy();
    expect(imgElementRadioButtonPets).toHaveAttribute('src', 'dog.png');
  })

  it("should be able to render a component containing other animal content", () => {
    render(<RadioButtonPets petName='' animalType='' label='labeled' name='any' id='any' value='customValue' register={() => { }} />);
    
    // const labelRadioButtonPets = 'paragraph';
    const valueRadioButtonPets = 'customValue';
    const imgAltRadioButtonPets = '';
  
    // const buttonLabelElementPets = screen.getByRole(labelRadioButtonPets);
    const buttonValueElementPets = screen.getByDisplayValue(valueRadioButtonPets);
    const imgElementRadioButtonPets = screen.getByAltText(imgAltRadioButtonPets);
    
    // expect(buttonLabelElementPets).toBeTruthy();
    expect(buttonValueElementPets).toBeTruthy();
    expect(imgElementRadioButtonPets).toHaveAttribute('src', 'pawprints.png');
  })
})
