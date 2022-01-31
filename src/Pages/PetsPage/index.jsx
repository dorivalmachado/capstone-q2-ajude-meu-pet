import { Container, ContainerContent, PetsBox, NoCards } from "./styles";
import { FaPlus } from "react-icons/fa";
import { HeaderLogged } from "../../Components/HeaderLogged";
import { styled } from "@mui/material/styles";
import { usePets } from "../../Providers/Pets";
import CardPets from "../../Components/CardPets";
import CatBox from "../../Assets/Img/catInBox.gif";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";
import React, { useState } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ModalAddPet from "../../Components/ModalAddPet";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const PetsPage = () => {
  const { pets, petDelete } = usePets();

  const [openModal, setOpenModal] = useState('');

  console.log(openModal)
  return (
    <MainContainer>
      <ModalAddPet open={openModal} handleClose={() => setOpenModal('')}/>
      <Container>
        <aside className="headerMobile">
          <Header />
        </aside>
        <aside className="headerDesktop">
          <HeaderLogged />
        </aside>

        <ContainerContent>
          <div className="titleBox">
            <h3>Meus Pets</h3>
            <LightTooltip title="Adicionar Pet">
              <button
                id='add'
                onClick={(e) => setOpenModal(e.target.id)}
              >
                <FaPlus />
              </button>
            </LightTooltip>
          </div>

          {pets.length > 0 ? (
            <PetsBox>
              {pets.map((pet) => (
                <CardPets
                  key={pet.id}
                  name={pet.petName}
                  breed={pet.petBreed}
                  size={pet.petSize}
                  animalType={pet.petType}
                  petBirthDate={pet.petBirthDate}
                  gender={pet.petGender}
                  deleteCard={() => petDelete(pet.id)}
                />
              ))}
            </PetsBox>
          ) : (
            <NoCards>
              <h2>Nenhum pet cadastrado ainda.</h2>
              <img src={CatBox} alt="Cat inside box" />
            </NoCards>
          )}
        </ContainerContent>
      </Container>
    </MainContainer>
  );
};

export default PetsPage;
