import Input from "../Input";
import { Container, Content, Form, Subtitle } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";
import { Link } from "react-router-dom";
import Button from "../Button";

const Profile = () => {
  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("E-mail inválido"),
    password: yup.string().min(8, "Mínimo de 8 dígitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
    address: yup.string(),
    fone: yup.string(),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (data) => {
    console.log(data);
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
      <Content>
        <Subtitle>Perfil</Subtitle>
        <Form onSubmit={handleSubmit(handleChange)}>
          <Input
            label="Nome"
            name="Name"
            register={register}
            sx={textFieldStyle}
            autocomplete="off"
          />
          <Input
            label="Email"
            name="email"
            register={register}
            error={!!errors.email}
            sx={textFieldStyle}
          />
          <Input
            label="Senha"
            name="password"
            register={register}
            error={!!errors.password}
            sx={textFieldStyle}
            autocomplete="off"
          />
          <Input
            label="Confirme sua senha"
            name="confirmPassword"
            register={register}
            error={!!errors.confirmPassword}
            sx={textFieldStyle}
            autocomplete="off"
          />
          <Input
            label="Endereço"
            name="address"
            register={register}
            error={!!errors.address}
            sx={textFieldStyle}
          />
          <Input
            type="number"
            label="Telefone"
            name="fone"
            register={register}
            sx={textFieldStyle}
          />

          <Button>Salvar as alterações</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
