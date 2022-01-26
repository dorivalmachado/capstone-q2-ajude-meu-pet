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

export const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo de 8 dígitos"),
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

  const handleRadioChange = (e) => {
    setIsClient(e.target.value);
  };

  const handleSignUp = (data) => {
    const newData = { ...data, isClient: isClient };
    console.log(newData);
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

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  function ShowWindowDimensions(props) {
    return useWindowSize();
  }

  const [width] = ShowWindowDimensions();
  console.log(width);

  return (
    <Teste>
      <Bar width={width} />
      <Container>
        <FormContainer>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <h1>CADASTRO</h1>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={textFieldStyle}
            />

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
            <TextField
              label="Confirmar senha"
              variant="outlined"
              fullWidth
              {...register("confirmPass")}
              error={!!errors.confirmPass}
              helperText={errors.confirmPass?.message}
              sx={textFieldStyle}
            />
            {/* <TextField label="Endereço" variant="outlined" /> */}
            <h2>QUERO</h2>
            <RadioGroup
              className="radioContainer"
              row
              defaultValue="client"
              value={isClient}
              onChange={handleRadioChange}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 32,
                },
              }}
            >
              <FormControlLabel
                value="client"
                control={
                  <Radio
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
                value="worker"
                control={
                  <Radio
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
            <Button type="submit">Cadastrar</Button>
          </form>
        </FormContainer>
      </Container>
    </Teste>
  );
};
