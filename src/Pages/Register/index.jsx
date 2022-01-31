import { Container, FormContainer } from "./styles";
import { TextField, RadioGroup, Radio, FormControlLabel } from "@mui/material";

import MuiPhoneNumber from "material-ui-phone-number";
import InputMask from "react-input-mask";

import Button from "../../Components/Button";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Providers/Auth";

export const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    // phone: yup
    //   .string()
    //   .required("Telefone obrigatório")
    //   .min(13, "Número incorreto"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 dígitos"),
    confirmPass: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isClient, setIsClient] = useState(true);
  const [phone, setPhone] = useState("");

  const history = useHistory();

  const handleRadioChange = (e) => {
    setIsClient(e.target.value);
  };

  const { signup } = useAuth();

  const handleSignUp = (data) => {
    delete data.confirmPass;
    const newData = { ...data, isClient: isClient, phone: phone };
    signup(newData);
    history.push("/login");
    // console.log(newData);
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
        <form onSubmit={handleSubmit(handleSignUp)}>
          <h1>CADASTRO</h1>
          <TextField
            label="Nome *"
            variant="outlined"
            fullWidth
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={textFieldStyle}
          />

          <TextField
            label="Email *"
            variant="outlined"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={textFieldStyle}
          />
          {/* <MuiPhoneNumber
            // name="phone"
            label="Telefone"
            defaultCountry={"br"}
            value={teste}
            onChange={(e) => handlePhone(e.target.value)}
            variant="outlined"
            fullWidth
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            sx={textFieldStyle}
          /> */}

          <InputMask
            mask="(99)999999999"
            value={phone}
            alwaysShowMask={false}
            onChange={(e) => setPhone(e.target.value)}
            // register={register}
            // {...register("phone")}
          >
            {() => (
              <TextField
                label="Telefone"
                sx={textFieldStyle}
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
                required
                // {...register("phone")}
              />
            )}
          </InputMask>

          {/* <TextField
            label="Telefone"
            variant="outlined"
            fullWidth
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            sx={textFieldStyle}
          /> */}
          <TextField
            label="Senha *"
            variant="outlined"
            fullWidth
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={textFieldStyle}
            type="password"
          />
          <TextField
            label="Confirmar senha *"
            variant="outlined"
            fullWidth
            {...register("confirmPass")}
            error={!!errors.confirmPass}
            helperText={errors.confirmPass?.message}
            sx={textFieldStyle}
            type="password"
          />
          <h2>QUERO</h2>
          <RadioGroup
            className="radioContainer"
            row
            value={isClient}
            onChange={handleRadioChange}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 32,
              },
            }}
          >
            <FormControlLabel
              value="worker"
              control={
                <Radio
                  required
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
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
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
              }
              label="Contratar um serviço"
              labelPlacement="bottom"
            />
          </RadioGroup>
          <Button type="submit" buttonColor="darkBrown">
            Cadastrar
          </Button>
          <p>
            Já possui uma conta? <Link to="/login">Entre aqui</Link>
          </p>
        </form>
      </FormContainer>
    </Container>
  );
};
