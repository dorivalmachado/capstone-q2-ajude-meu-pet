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
      "& fieldset": {
        //   borderColor: "black",
      },
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
        {...rest}
      />
    </Container>
  );
};

export default Input;
