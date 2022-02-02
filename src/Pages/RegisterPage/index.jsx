import { Container, ContentContainer, FormContainer } from "./styles";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";
import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiSmartphone,
  FiUser,
} from "react-icons/fi";

import Button from "../../Components/Button";
import Input from "../../Components/Input";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/Auth";
import dog from "../../Assets/Img/flirtingDog.gif";

const RegisterPage = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .required(" E-mail obrigatório")
      .email("E-mail inválido"),
    phone: yup
      .string()
      .required("Telefone obrigatório")
      .min(14, "Número incorreto"),
    password: yup
      .string()
      .min(
        8,
        "Deve conter 8 dígitos, entre números, letras maiúsculas e caracteres especiais"
      )
      .required()
      .matches(/(?=.[0-9])(?=.{1,})/, "Sem número")
      .matches(/(?=.[A-Z])(?=.{1,})/, "Sem letra maiúscula")
      .matches(/(?=.[!@#$%^&*])(?=.{1,})/, "Sem caractere especial (!@#$%^&)"),
    confirmPass: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const { signup } = useAuth();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [phone, setPhone] = useState("");
  const [isClient, setIsClient] = useState(true);
  const [showPass, setShowPass] = useState(false);

  const handleRadioChange = (e) => {
    setIsClient(e.target.value);
  };

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1)$2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };

  const handleSignUp = (data) => {
    delete data.confirmPass;
    const newData = { ...data, isClient: isClient, phone: phone };
    signup(newData);
  };

  return (
      <Container>
        <img src={dog} alt="Dog saying How you doin'" />
        <ContentContainer>
          <FormContainer>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <Input
                label="Nome"
                name="name"
                register={register}
                fullWidth
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
              fullWidth
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
              label="Telefone"
              name="phone"
              fullWidth
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
            <Input
              label="Senha"
              name="password"
              type={showPass ? "text" : "password"}
              register={register}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
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
              label="Confirmar senha"
              name="confirmPass"
              type={showPass ? "text" : "password"}
              register={register}
              error={!!errors.confirmPass}
              helperText={errors.confirmPass?.message}
              fullWidth
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
            {/* <h2>Quero</h2>
            <RadioGroup
              className="radioContainer"
              row
              value={isClient}
              onChange={handleRadioChange}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 20,
                },
              }}
            >
              <FormControlLabel
                value="worker"
                control={
                  <Radio
                    required
                    checked=''
                    sx={{
                      color: "var(--black50)",
                      "&.Mui-checked": {
                        color: "var(--black50)",
                      },
                    }}
                  />
                }
                label="Prestar um serviço"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="client"
                control={
                  <Radio
                    required
                    checked
                    sx={{
                      color: "var(--black50)",
                      "&.Mui-checked": {
                        color: "var(--black50)",
                      },
                    }}
                  />
                }
                label="Contratar um serviço"
                labelPlacement="bottom"
              />
            </RadioGroup> */}
            <Button type="submit" buttonColor="darkBrown">
              Cadastrar
            </Button>
          </form>
          <p>
            Já possui uma conta? <Link to="/login">Entre aqui</Link>
          </p>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default RegisterPage;
