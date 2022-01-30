import { Container, FormContainer } from "./styles";
import { TextField, Button } from "@mui/material";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";
import { Link } from "react-router-dom";

// import Input from "../../Components/Input";
// import ButtonStyled from "../../Components/Button";

export const Login = () => {
  
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
    // console.log(data);
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
          <Button type="submit">Entrar</Button>
        </form>
        <p>
          Não é cadastrado ainda? <Link to="/register">Cadastre-se!</Link>
        </p>
      </FormContainer>
    </Container>
  );
};
