import { Container, FormContainer, ContentContainer } from "./styles";
import { InputAdornment } from "@mui/material";

import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";
import { Link } from "react-router-dom";
import { FiEyeOff, FiEye, FiLock, FiUser } from "react-icons/fi";
import Button from "../../Components/Button";
import DogImage from "../../Assets/Img/corgiRunning.gif";
import Input from "../../Components/Input";

export const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { login } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 dígitos"),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (data) => {
    login(data);
  };

  return (
    <Container>
      <img src={DogImage} alt="Dog running" />

      <ContentContainer>
        <FormContainer>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
              label="Email"
              name="email"
              type="email"
              fullWidth
              register={register}
              error={!!errors.email}
              helperText={errors.email?.message}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiUser />
                  </InputAdornment>
                ),
              }}
            />
            <Input
              type={showPass ? "text" : "password"}
              label="Senha"
              fullWidth
              register={register}
              name="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiLock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <FiEye /> : <FiEyeOff />}
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" buttonColor="lightBrown">
              Entrar
            </Button>
          </form>
          <p>
            Não é cadastrado ainda? <Link to="/register">Cadastre-se!</Link>
          </p>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
