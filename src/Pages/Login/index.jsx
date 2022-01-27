import { Container, FormContainer, Bar, Teste } from "./styles";
import {
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@mui/material";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLayoutEffect, useState } from "react";
import { useAuth } from "../../Providers/Auth";
import { Link } from "react-router-dom";

export const Login = () => {
  const { login } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo de 8 dígitos"),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIp = (data) => {
    console.log(data);
    // login(data);
  };

  const textFieldStyle = {
    "& label.Mui-focused": {
      color: "#FFC04A",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFC04A",
    },
    "& .MuiOutlinedInput-root": {
      background: "white",
      "& fieldset": {
        //   borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "#FFC04A",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFC04A",
      },
    },
  };

  return (
    <Container>
      <FormContainer>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(handleSignIp)}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={textFieldStyle}
          />
          <TextField
            label="Senha"
            variant="outlined"
            fullWidth
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={textFieldStyle}
          />

          <Button type="submit">Entrar</Button>
        </form>
        <p>
          Não é cadastrado ainda? <Link to="/register">Cadastre-se!</Link>{" "}
        </p>
      </FormContainer>
    </Container>
  );
};
