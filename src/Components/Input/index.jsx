import React from "react";
import { Container } from "./styles";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
  fieldset: {
    borderColor: "#F5F5F5",
  },
  "& input:valid:focus + fieldset": {
    borderColor: "black",
    borderLeftWidth: 2,
  },
});

const Input = ({ type = "text", label, name, register, value, ...rest }) => {
  return (
    <Container>
      <CssTextField
        label={label}
        type={type}
        id="outlined-basic"
        variant="outlined"
        name={name}
        value={value}
        {...register(name)}
        {...rest}
        InputLabelProps={{
          style: { color: "grey" },
        }}
      />
    </Container>
  );
};

export default Input;
