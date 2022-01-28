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
  WalkDescription
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

  const pet = [
    { petName: "Tobias", animalType: "dog", id: 1 },
    { petName: "Shailow", animalType: "cat", id: 2 },
    { petName: "Dogo", animalType: "other", id: 3 },
  ];

  

  return (
    <div>
      <Dialog
        open={open === 'walk'}
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
          <WalkDescription>
            Passeios educativos com duração de 1 hora.
          </WalkDescription> 

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

export default ModalWalk;
