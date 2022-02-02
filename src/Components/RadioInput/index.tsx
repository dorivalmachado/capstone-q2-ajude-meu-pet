import React from "react";
import { RadioStyle } from "./styles.ts";

const RadioInput = ({ label, name, register, value, id, ...rest }) => {
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
