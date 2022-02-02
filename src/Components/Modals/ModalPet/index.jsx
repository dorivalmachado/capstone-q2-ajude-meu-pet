import { usePets } from "../../../Providers/Pets";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegWindowClose } from "react-icons/fa";
import { Dialog, DialogContent } from "@mui/material";

import Button from "../../Button";
import Input from "../../Input";
import RadioInput from "../../RadioInput";
import { ErrorMessage, Form } from "./styles";
import { useState } from "react";

const ModalPet = ({ add, open, handleClose, id }) => {
  const { petCreate, petUpdate, petDelete } = usePets();


  const schema = yup.object().shape({
    petName: yup.string().required("Informe o nome"),
    petType: yup.string().required("Informe o tipo"),
    petGender: yup.string().required("Informe o gênero"),
    petSize: yup.string().required("Informe o tamanho"),
    petBirthDate: yup.string().required("Informe a data de nascimento"),
  });

  const {
    formState: { errors },
    reset,
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    handleClose();
    reset();
  };

  const handleForm = (data) => {
    closeModal();
    data.petBirthDate = Intl.DateTimeFormat(["pt-br"]).format(
      new Date(data.petBirthDate.replaceAll("-", "/"))
    );
    
    add ? petCreate(data) : petUpdate(data, id);

  };

  const handleExclusion = () => {
    petDelete(id);
    closeModal();
  };


  return (
    <Dialog
      open={open}
      onClose={closeModal}
      sx={{
        "& .MuiDialog-paper": {
          width: "450px",
          maxWidth: "450px",
        },
      }}
    >
      <DialogContent>
        <Form onSubmit={handleSubmit(handleForm)}>
          <FaRegWindowClose size={25} color="#999999" onClick={closeModal} />
          {add ? (
            <h2>Adicione seu pet</h2>
          ) : (
            <h2>Altere as informações do seu pet</h2>
          )}

          <Input 
            label="Nome" 
            name="petName" 
            register={register} 
            error={!!errors.petName}
            helperText={errors.petName?.message}
          />

          <h3>Tipo</h3>
          <div>
            <RadioInput
              label="Cachorro"
              value="cachorro"
              name="petType"
              register={register}
              id="cachorro"
            />
            <RadioInput
              label="Gato"
              value="gato"
              name="petType"
              register={register}
              id="gato"
            />
            <RadioInput
              label="Outro"
              value="outro"
              name="petType"
              register={register}
              id="outro"
            />
          </div>
          <ErrorMessage>{errors.petType?.message && 'Informe o tipo'}</ErrorMessage>

          <h3>Gênero</h3>
          <div>
            <RadioInput
              label="Feminino"
              value="female"
              name="petGender"
              register={register}
              id="female"
            />
            <RadioInput
              label="Masculino"
              value="male"
              name="petGender"
              register={register}
              id="male"
            />
          </div>
          <ErrorMessage>{errors.petGender?.message && 'Informe o gênero'}</ErrorMessage>


          <h3>Tamanho</h3>
          <div>
            <RadioInput
              label="Pequeno"
              value="pequeno"
              name="petSize"
              register={register}
              id="pequeno"
            />
            <RadioInput
              label="Médio"
              value="médio"
              name="petSize"
              register={register}
              id="médio"
            />
            <RadioInput
              label="Grande"
              value="grande"
              name="petSize"
              register={register}
              id="grande"
            />
          </div>
          <ErrorMessage>{errors.petSize?.message && 'Informe o tamanho'}</ErrorMessage>

          <h3>Data de nascimento</h3>
          <Input 
            type="date" name="petBirthDate" register={register} 
            error={!!errors.petBirthDate}
            helperText={errors.petBirthDate?.message}
          />

          <div>
            {!add && <Button onClick={handleExclusion}>Excluir pet</Button>}
            <Button buttonColor="blue" type="submit">
              Salvar as alterações
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalPet;
