import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  DialogContent,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import {FaRegWindowClose} from "react-icons/fa"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { 
  ButtonsContainer, 
  ContainerBottom, 
  ContainerTraining, 
  Form, 
  TrainingDescription, 
  TrainingOptions, 
  TrainingType 
} from "./styles";
import RadioButtonPets from "../RadioButtonPets";
import Button from "../Button";
import PriceTableTraining from "../PriceTableTraining";

const ModalTraining = ({ open, handleClose }) => {

  const trainingDescription = {
    basico: "O adestramento básico ensina ao pet conceitos de obediência simples. Alguns exemplos são: senta, deita, fica, junto, dar a pata, entender o não, aqui e meia volta.",
    avancado: "Treinamento oferecido para cães de trabalho e para esportes. Dentro do adestramento no pet shop, há algumas atividades, como saltar e buscar objetos, por exemplo.",
    grupal: "Para os donos que veem a necessidade de seu animal ter contato com outros pets, essa é a opção ideal. Nele, são ensinados comandos de obediência que podem ser usados fora de casa, assim como adequar o comportamento em passeios e em momentos de socialização com pessoas ou outros animais."
  }

  const [training, setTraining] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState('');
  
  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover('trainingPrice');
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpenPopover('');
  };

  const pet = [
    { petName: "Tobias", animalType: "dog", id: 1 },
    { petName: "Shailow", animalType: "cat", id: 2 },
    { petName: "Dogo", animalType: "other", id: 3 },
  ];

  const schema = yup.object().shape({
    date: yup.string().required("Selecione a data"),
    time: yup.string().required("Selecione o horário"),
    pet: yup.string().required("Selecione um pet"),
    obs: yup.string(),
    description: yup.string().required('Selecione um tipo')
  });

  const {
    formState: { errors },
    reset,
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });  

  const handleBooking = (data) => {
    console.log(data)
    closeModal();
  }

  const closeModal = () => {
    handleClose();
    setTraining('');
    reset();
  }
  
  return (
    <div>
      <Dialog
        open={open === 'training'}
        onClose={closeModal}
        sx={{
          "& .MuiDialog-paper": {
            width: "800px",
            maxWidth: "800px",
          },
        }}
      >
        <Form onSubmit={handleSubmit(handleBooking)}>
          <FaRegWindowClose size={25} color='#999999' onClick={closeModal}/>
          <DialogContent>

            <PriceTableTraining open={openPopover} anchorEl={anchorEl} handleClose={handleClosePopover}/>
            <ContainerTraining>
              <TrainingDescription>
                <h3>Descrição</h3>
                <p>
                    {trainingDescription[training] !== undefined && trainingDescription[training]}
                </p>
              </TrainingDescription>
              <TrainingType>
                <h3 className="desktop">Selecione o tipo de adestramento</h3>
                <h3 className="mobile">Adestramento</h3>
                <TrainingOptions {...register('description')} value={training} onChange={(e) => setTraining(e.target.value)}>
                  <option disabled defaultValue value=''> -- Escolha uma opção -- </option>
                  <option value='basico'>Básico</option>
                  <option value='avancado'>Avançado</option>
                  <option value='grupal'>Grupal</option>
                </TrainingOptions>
              </TrainingType>
            </ContainerTraining> 

            <ContainerBottom>
              <div className="dateTimeContainer">
                <div className="dateTimeContainer_box">
                  <p>Em qual dia?</p>
                  <TextField sx={{width: '200px'}} type="date"  {...register('date')}/>
                </div>
                <div className="dateTimeContainer_box">
                  <p>Em qual horário?</p>
                  <TextField sx={{width: '200px'}} type="time"  {...register('time')}/>
                </div>
              </div>
              <div className="changeToRow">
                <div className="petContainer">
                  <p>Qual o seu pet?</p>
                  <div className="petContainer_box">
                    {pet.map((e, i) => (
                      <RadioButtonPets
                        key={i}
                        name="pet"
                        register={register}
                        animalType={e.animalType}
                        value={e.id}
                        id={e.id}
                        petName={e.petName}
                      />
                    ))}
                  </div>
                </div>
                <div className="obsContainer">
                  <p>Alguma observação?</p>
                  <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    style={{
                      minWidth: "200px",
                      width: "100%",
                      height: "180px",
                      backgroundColor: "var(--cream)",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                    {...register('obs')}
                  />
                </div>
              </div>
            </ContainerBottom>

          </DialogContent>
          
          <ButtonsContainer>
            <Button type='submit' buttonColor="darkBrown">
              Agendar!
            </Button>
            <Button buttonColor="blue " onClick={handleOpenPopover}>
              Tabela de preços
            </Button>
          </ButtonsContainer>
        </Form>
      </Dialog>
    </div>
  );
};

export default ModalTraining;
