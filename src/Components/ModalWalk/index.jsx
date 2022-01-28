import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  DialogContent,
  TextareaAutosize,
  TextField,
} from "@mui/material";

import { 
  ButtonsContainer, 
  ContainerBottom, 
  ContainerTraining, 
  TrainingDescription, 
  TrainingOptions, 
  TrainingType 
} from "./styles";
import RadioButtonPets from "../RadioButtonPets";
import Button from "../Button";
import PriceTableWalk from "../PriceTableWalk";

const ModalWalk = ({ open, handleClose }) => {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
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

  

  return (
    <div>
      <Dialog
        open={open === 'training'}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "800px",
            maxWidth: "800px",
          },
        }}
      >
        <DialogContent>

          <PriceTableWalk open={openPopover} anchorEl={anchorEl} handleClose={handleClosePopover}/>
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
              <TrainingOptions value={training} onChange={(e) => setTraining(e.target.value)}>
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
                <TextField type="date" onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="dateTimeContainer_box">
                <p>Em qual horário?</p>
                <TextField type="time" onChange={(e) => setTime(e.target.value)} />
              </div>
            </div>
            <div className="changeToRow">
              <div className="petContainer">
                <p>Qual o seu pet?</p>
                <div className="petContainer_box">
                  {pet.map((e, i) => (
                    <RadioButtonPets
                      key={i}
                      name="teste"
                      register={() => {}}
                      animalType={e.animalType}
                      value=""
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
                />
              </div>
            </div>
          </ContainerBottom>

        </DialogContent>
        <ButtonsContainer>
          <Button buttonColor="darkBrown" onClick={() => {}}>
            Agendar!
          </Button>
          <Button buttonColor="blue " onClick={handleOpenPopover}>
            Tabela de preços
          </Button>
        </ButtonsContainer>
      </Dialog>
    </div>
  );
};

export default ModalTraining;
