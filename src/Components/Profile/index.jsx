import { Container, Content, Form, Subtitle } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";
import Button from "../Button";
import Input from "../Input";
import { Dialog, InputAdornment } from "@mui/material";
import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiMap,
  FiSmartphone,
  FiUser,
} from "react-icons/fi";
import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

const Profile = ({ open, onClose }) => {
  const [showPass, setShowPass] = useState(false);

  const { updateUser, user } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("E-mail inválido"),
    password: yup.string().min(8, "Mínimo de 8 dígitos"),
    address: yup.string().required("Endereço obrigatório"),
    phone: yup.string().required("Telefone obrigatório"),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (data) => {
    updateUser({ ...data, userId: user.id, isClient: true });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "85vw",
          maxWidth: "700px",
        },
      }}
    >
      <Container>
        <button onClick={onClose} className="closeButton">
          <FaRegWindowClose />
        </button>

        <Content>
          <Subtitle>Perfil</Subtitle>
          <Form onSubmit={handleSubmit(handleChange)}>
            <Input
              label="Nome"
              name="name"
              register={register}
              autoComplete="off"
              error={!!errors.name}
              helperText={errors.name?.message}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiUser />
                  </InputAdornment>
                ),
              }}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              register={register}
              error={!!errors.email}
              helperText={errors.email?.message}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiMail />
                  </InputAdornment>
                ),
              }}
            />
            <Input
              label="Senha"
              name="password"
              type={showPass ? "text" : "password"}
              register={register}
              error={!!errors.password}
              helperText={errors.password?.message}
              autoComplete="off"
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
            <Input
              label="Endereço"
              name="address"
              register={register}
              error={!!errors.address}
              helperText={errors.address?.message}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiMap />
                  </InputAdornment>
                ),
              }}
            />
            <Input
              type="number"
              label="Telefone"
              name="phone"
              register={register}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiSmartphone />
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" buttonColor="yellow">
              Salvar as alterações
            </Button>
          </Form>
        </Content>
      </Container>
    </Dialog>
  );
};

export default Profile;
