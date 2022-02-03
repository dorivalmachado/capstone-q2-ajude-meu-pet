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

interface ProfileProps{
  open: boolean;
  onClose: () => void;
}

const Profile = ({ open, onClose }: ProfileProps) => {
  const [showPass, setShowPass] = useState(false);

  const { updateUser, user } = useAuth();

  const [phone, setPhone] = useState(() => user.phone);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("E-mail inválido"),
    password: yup
      .string()
      .min(
        8,
        "Deve conter 8 dígitos, entre números, letras maiúsculas e caracteres especiais"
      )
      .required()
      .matches(/(?=.[A-Z])(?=.{1,})/, "Sem letra maiúscula")
      .matches(/(?=.[0-9])(?=.{1,})/, "Sem número")
      .matches(/(?=.[!@#$%^&*])(?=.{1,})/, "Sem caractere especial (!@#$%^&)"),
    address: yup.string().required("Endereço obrigatório"),
    phone: yup
      .string()
      .required("Telefone obrigatório")
      .min(14, "Número de telefone inválido"),
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

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1)$2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
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
              defaultValue={user.name}
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
              defaultValue={user.email}
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
              defaultValue={user.address}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiMap />
                  </InputAdornment>
                ),
              }}
            />

            <Input
              label="Telefone"
              name="phone"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              register={register}
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
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
