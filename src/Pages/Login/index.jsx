import { Container, FormContainer } from "./styles";
import { TextField, Button } from "@mui/material";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";
import { Link } from "react-router-dom";

import Input from "../../Components/Input";
import ButtonStyled from "../../Components/Button";
import ModalBase from "../../Components/Modal";
import { useState } from "react";
import { ModalServicesBottom } from "../../Components/ModalServicesBottom";

export const Login = () => {
  // Para abrir e fechar o modal, colocar aonde ele for aberto
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // esse botão abre o modal, pode ser substituido tranquilamente
  //

  const { login } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
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

  const handleSignIn = (data) => {
    console.log(data);
    login(data);
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
        <form onSubmit={handleSubmit(handleSignIn)}>
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
          <ModalBase open={open} onClose={handleClose}>
            <ButtonStyled onClick={handleClose}>X</ButtonStyled>

            <ModalServicesBottom handleClose={handleClose} />
          </ModalBase>

          <ButtonStyled onClick={handleOpen}>Abre o modal</ButtonStyled>
          {/* <Button type="submit">Entrar</Button> */}
        </form>
        <p>
          Não é cadastrado ainda? <Link to="/register">Cadastre-se!</Link>
        </p>
      </FormContainer>
    </Container>
  );
};
