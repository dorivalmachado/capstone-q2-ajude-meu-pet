import { Container, Card } from "./styles";
import { TextareaAutosize, TextField } from "@mui/material";
import { DatePicker } from "@material-ui/pickers";
import RadioButtonPets from "../RadioButtonPets";

import { useState } from "react";
export const ModalServicesBottom = ({ handleClose }) => {
  const [date, setDate] = useState("");
  console.log(date.split("-").reverse().join("-"));

  const pet = [
    { petName: "Tobias", animalType: "dog", id: 1 },
    { petName: "Shailow", animalType: "cat", id: 2 },
    { petName: "Dogo", animalType: "other", id: 3 },
  ];

  return (
    <Container>
      <div className="dateTimeContainer">
        <div className="dateTimeContainer_box">
          <p>Em qual dia?</p>
          <TextField type="date" onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="dateTimeContainer_box">
          <p>Em qual horário?</p>
          <TextField type="time" onChange={(e) => setDate(e.target.value)} />
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
              width: "100%",
              height: "160px",
              backgroundColor: "var(--cream)",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
        </div>
      </div>
    </Container>
  );
};
