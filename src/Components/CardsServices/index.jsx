import { useState } from "react";

import {
  ButtonBox,
  ButtonStyled,
  ButtonYellow,
  Card,
  CardBack,
  CardFront,
  Container,
} from "./styles";
import PriceTableTraining from "../PriceTableTraining";
import PriceTableWalk from "../PriceTableWalk";
import PriceTableTaxi from "../PriceTableTaxi";
import ModalTraining from "../Modals/ModalTraining";
import ModalWalk from "../Modals/ModalWalk";
import ModalTaxi from "../Modals/ModalTaxi";

const CardsServices = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState("");
  const [openModal, setOpenModal] = useState("");

  const handleOpenModal = (event) => setOpenModal(event.target.id);

  const handleCloseModal = () => setOpenModal("");

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover(event.target.id);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpenPopover("");
  };

  return (
    <>
      <PriceTableTraining
        open={openPopover}
        anchorEl={anchorEl}
        handleClose={handleClosePopover}
      />
      <PriceTableWalk
        open={openPopover}
        anchorEl={anchorEl}
        handleClose={handleClosePopover}
      />
      <PriceTableTaxi
        open={openPopover}
        anchorEl={anchorEl}
        handleClose={handleClosePopover}
      />
      

      <ModalTraining open={openModal} handleClose={handleCloseModal} />
      <ModalWalk open={openModal} handleClose={handleCloseModal} />
      <ModalTaxi open={openModal} handleClose={handleCloseModal} />

      <Container>
        <div>
          <Card>
            <div className="inner">
              <CardFront>
                <h2>Adestramento</h2>
              </CardFront>
              <CardBack>
                <div className="cardText">
                  <p>
                    Seu pet com a melhor educação,sabendo truques e comandos!
                  </p>

                  <p>
                    Nossos adestradores certificados irão educar e ensinar
                    comandos e brincadeiras para o seu pet aprender enquanto se
                    diverte.
                  </p>
                </div>
                <ButtonBox>
                  <ButtonStyled id="trainingPrice" onClick={handleOpenPopover}>
                    Tabela de preços
                  </ButtonStyled>
                  <ButtonYellow id="training" onClick={handleOpenModal}>
                    Solicitar
                  </ButtonYellow>
                </ButtonBox>
              </CardBack>
            </div>
          </Card>
          <Card>
            <div className="inner">
              <CardFront>
                <h2>Passeio</h2>
              </CardFront>
              <CardBack>
                <div className="cardText">
                  <p>Sem tempo para passear?</p>

                  <p>
                    Gaste a energia de seu cachorro com um passeio educativo e
                    saudável, feito por um dos profissionais parceiros.
                  </p>
                </div>
                <ButtonBox>
                  <ButtonStyled id="walkPrice" onClick={handleOpenPopover}>
                    Tabela de preços
                  </ButtonStyled>
                  <ButtonYellow id="walk" onClick={handleOpenModal}>
                    Solicitar
                  </ButtonYellow>
                </ButtonBox>
              </CardBack>
            </div>
          </Card>
          <Card>
            <div className="inner">
              <CardFront>
                <h2>Taxi-Pet</h2>
              </CardFront>
              <CardBack>
                <div className="cardText">
                  <p>
                    Precisando de alguém para levar seu bichinho para algum
                    compromisso?
                  </p>

                  <p>Pode conta com a gente!</p>
                </div>
                <ButtonBox>
                  <ButtonStyled id="taxiPrice" onClick={handleOpenPopover}>
                    Tabela de preços
                  </ButtonStyled>
                  <ButtonYellow id="taxi" onClick={handleOpenModal}>
                    Solicitar
                  </ButtonYellow>
                </ButtonBox>
              </CardBack>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default CardsServices;
