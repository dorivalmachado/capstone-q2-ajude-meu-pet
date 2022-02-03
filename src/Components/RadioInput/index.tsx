import React from "react";
import { RadioStyle } from "./styles";

interface RadioInputProps {
  label: string;
  name: string;
  register: (name: string) => void;
  value: string;
  id: string;
}

const RadioInput = ({
  label,
  name,
  register,
  value,
  id,
  ...rest
}: RadioInputProps) => {
  return (
    <>
      <RadioStyle
        type="radio"
        id={id}
        name={name}
        value={value}
        {...register(name)}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default RadioInput;
