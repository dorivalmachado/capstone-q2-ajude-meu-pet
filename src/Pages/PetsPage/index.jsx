import { Container, ContainerContent, PetsBox, NoCards } from "./styles";
import { FaPlus } from "react-icons/fa";
import { HeaderLogged } from "../../Components/HeaderLogged";
import { usePets } from "../../Providers/Pets";
import CardPets from "../../Components/CardPets";
import CatBox from "../../Assets/Img/catInBox.gif";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";
import React, { useEffect, useState } from "react";
import ModalAddPet from "../../Components/ModalAddPet";
import { LightTip } from "../../Helpers/Tooltip";
import ModalEditPet from "../../Components/ModalEditPet";
import { useAuth } from "../../Providers/Auth";



const PetsPage = () => {
  const { pets } = usePets();
  const {user} = useAuth();

  const [openModal, setOpenModal] = useState('open');
  const [petId, setPetId] = useState(0);
  const [myPets, setMyPets] = useState([]);

  const editPet = (id) => {
    setOpenModal('edit');
    setPetId(id);
  }

  useEffect(() => {
    if(pets.length > 0){
      setMyPets(pets.filter(pet => pet.userId === user.id))
    }
  }, [pets])

  return (
    <MainContainer>
      <ModalAddPet open={openModal} handleClose={() => setOpenModal('')}/>
      <ModalEditPet open={openModal} handleClose={() => setOpenModal('')} id={petId}/>

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

          {myPets.length > 0 ? (
            <PetsBox>
              {myPets.map((pet) => (
                <CardPets
                  key={pet.id}
                  name={pet.petName}
                  breed={pet.petBreed}
                  size={pet.petSize}
                  animalType={pet.petType}
                  petBirthDate={pet.petBirthDate}
                  gender={pet.petGender}
                  editPet={() => editPet(pet.id)}
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
