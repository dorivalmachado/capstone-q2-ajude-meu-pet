import React from "react";
import { Container } from "./styles";
import { TextField } from "@mui/material";

const Input = ({
  type = "text",
  label,
  name,
  register,
  value,
  error,
  inputProps,
  helperText,
  defaultValue,
  ...rest
}) => {
  const textFieldStyle = {
    "& label.Mui-focused": {
      color: "var(--yellow80)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "var(--yellow80)",
    },
    "& .MuiOutlinedInput-root": {
      background: "white",
      "&:hover fieldset": {
        borderColor: "var(--yellow80)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--yellow80)",
      },
    },
  };

  return (
    <Container>
      <TextField
        label={label}
        type={type}
        variant="outlined"
        name={name}
        value={value}
        helperText={helperText}
        {...register(name)}
        sx={textFieldStyle}
        InputProps={inputProps}
        error={error}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};

export default Input;
