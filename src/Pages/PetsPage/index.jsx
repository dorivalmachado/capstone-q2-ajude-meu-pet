import { Container, ContainerContent, PetsBox, NoCards } from "./styles";
import { FaPlus } from "react-icons/fa";
import { HeaderLogged } from "../../Components/HeaderLogged";
import { usePets } from "../../Providers/Pets";
import CardPets from "../../Components/CardPets";
import CatBox from "../../Assets/Img/catInBox.gif";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";
import React, { useState } from "react";
import ModalAddPet from "../../Components/ModalAddPet";
import { LightTip } from "../../Helpers/Tooltip";



const PetsPage = () => {
  const { pets } = usePets();

  const [openModal, setOpenModal] = useState('open');

  return (
    <MainContainer>
      <ModalAddPet open={openModal} handleClose={() => setOpenModal('')}/>
      <Container>
        <aside className="headerMobile">
          <Header isLogged={true} />
        </aside>
        <aside className="headerDesktop">
          <HeaderLogged />
        </aside>

        <ContainerContent>
          <div className="titleBox">
            <h3>Meus Pets</h3>
            <LightTip title="Adicionar Pet">
              <button
                id='add'
                onClick={(e) => setOpenModal(e.currentTarget.id)}
              >
                <FaPlus />
              </button>
            </LightTip>
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
                  editPet={() => console.log("abrir modal de editar pet aqui")}
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
