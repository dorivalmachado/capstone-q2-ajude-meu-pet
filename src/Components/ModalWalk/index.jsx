import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  DialogContent,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import { 
  ButtonsContainer, 
  ContainerBottom, 
  Form, 
  WalkDescription
} from "./styles";
import RadioButtonPets from "../RadioButtonPets";
import Button from "../Button";
import PriceTableWalk from "../PriceTableWalk";
import { FaRegWindowClose } from "react-icons/fa";

const ModalWalk = ({ open, handleClose }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState('');
  
  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover('walkPrice');
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
    reset();
  }
  

  return (
    <div>
      <Dialog
        open={open === 'walk'}
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

            <PriceTableWalk open={openPopover} anchorEl={anchorEl} handleClose={handleClosePopover}/>
            <WalkDescription>
              Passeios educativos com duração de 1 hora.
            </WalkDescription> 

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

export default ModalWalk;
