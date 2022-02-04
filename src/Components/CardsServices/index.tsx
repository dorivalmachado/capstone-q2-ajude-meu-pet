import React, { useState } from "react";

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
import ModalTraining from "../ModalTraining";
import ModalWalk from "../ModalWalk";
import ModalTaxi from "../ModalTaxi";

const CardsServices = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openPopover, setOpenPopover] = useState("");
  const [openModal, setOpenModal] = useState("");

  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => setOpenModal(event.currentTarget.id);

  const handleCloseModal = () => setOpenModal("");

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover(event.currentTarget.id);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpenPopover("");
  };

  return (
    <>
      <PriceTableTraining
        openPop={openPopover}
        anchor={anchorEl}
        handleClose={handleClosePopover}
      />
      <PriceTableWalk
        openPop={openPopover}
        anchor={anchorEl}
        handleClose={handleClosePopover}
      />
      <PriceTableTaxi
        openPop={openPopover}
        anchor={anchorEl}
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
