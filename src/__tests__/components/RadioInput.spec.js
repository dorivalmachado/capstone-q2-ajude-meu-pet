import React from "react";
import { render, screen } from "@testing-library/react";
import RadioInput from "../../Components/RadioInput";

describe("RadioInput Component when OK", () => {
  it("should be able to render a component containing specif content", () => {
    render(
      <RadioInput
        label="labeled"
        name="any"
        id="any"
        value="customValue"
        register={() => {}}
      />
    );

    const labelRadioInput = "labeled";
    const valueRadioInput = "customValue";

    const inputLabelElement = screen.getByText(labelRadioInput);
    const inputValueElement = screen.getByDisplayValue(valueRadioInput);

    expect(inputLabelElement).toBeTruthy();
    expect(inputValueElement).toBeTruthy();
  });
});
