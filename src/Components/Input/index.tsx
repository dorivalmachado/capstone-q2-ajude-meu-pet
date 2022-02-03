import React, { ChangeEvent } from "react";
import { Container } from "./styles";
import { BaseTextFieldProps, TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface InputProps extends BaseTextFieldProps {
  error?: boolean;
  register: UseFormRegister<any>;
  name: string;
  type?: string;
  // handleChange?: (event: ChangeEvent<HTMLInputElement>, value: any) => void;
}

const Input = ({
  type = "text",
  name,
  register,
  // handleChange,
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
        // onChange={handleChange}
        {...register(name)}
        sx={textFieldStyle}
        error={error}
        {...rest}
      />
    </Container>
  );
};

export default Input;
