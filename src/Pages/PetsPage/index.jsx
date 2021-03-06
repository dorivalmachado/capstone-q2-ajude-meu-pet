import { Container, ContainerContent, PetsBox, NoCards } from "./styles";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { HeaderLogged } from "../../Components/HeaderLogged";
import { usePets } from "../../Providers/Pets";
import CardPets from "../../Components/CardPets";
import CatBox from "../../Assets/Img/catInBox.gif";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";
import { LightTip } from "../../Helpers/Tooltip";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Providers/Auth";
import ModalPet from "../../Components/Modals/ModalPet";

const PetsPage = () => {
  const { pets } = usePets();
  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [petId, setPetId] = useState(0);
  const [isPetAddition, setIsPetAddition] = useState(false);
  const [myPets, setMyPets] = useState([]);

  const editPet = (id) => {
    setOpenModal(true);
    setPetId(id);
    setIsPetAddition(false);
  };

  const addPet = () => {
    setOpenModal(true);
    setIsPetAddition(true);
  };

  useEffect(() => {
    if (pets.length > 0) {
      setMyPets(pets.filter((pet) => pet.userId === user.id));
    }
  }, [pets]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0 }}
    >

      <MainContainer>
        <ModalPet
          add={isPetAddition}
          open={openModal}
          handleClose={() => setOpenModal(false)}
          id={petId}
          />

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
                <button id="add" onClick={addPet}>
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
    </motion.div>
  );
};

export default PetsPage;
