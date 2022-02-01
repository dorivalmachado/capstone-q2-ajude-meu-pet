import React from "react";
import { Container } from "./styles";
import { TextField } from "@mui/material";
import { TextFieldProps } from "material-ui";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends TextFieldProps{
  error?: boolean;
  register: UseFormRegister<FieldValues>;
  name: string;
  type?: string;
}

const Input = ({
  type = "text",
  // label,
  name,
  register,
  // value,
  error=false,
  // inputProps,
  // helperText,
  // defaultValue,
  ...rest
}: InputProps) => {
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
        // label={label}
        type={type}
        variant="outlined"
        // name={name}
        // value={value}
        // helperText={helperText}
        {...register(name)}
        sx={textFieldStyle}
        // InputProps={inputProps}
        error={error}
        // defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};

export default Input;
