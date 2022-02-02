import React from "react";
import { Container } from "./styles";
import { TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";
// import { TextFieldProps } from "material-ui";

// interface InputProps extends TextFieldProps {
interface InputProps {
  error?: boolean;
  register: UseFormRegister<FieldValues>;
  name: string;
  type?: string;
}

const Input = ({
  type = "text",
  name,
  register,
  error = false,
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
        type={type}
        variant="outlined"
        {...register(name)}
        sx={textFieldStyle}
        error={error}
        {...rest}
      />
    </Container>
  );
};

export default Input;
