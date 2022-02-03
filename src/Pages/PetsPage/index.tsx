import { Container, ContainerContent, PetsBox, NoCards } from "./styles";
import { FaPlus } from "react-icons/fa";
import { HeaderLogged } from "../../Components/HeaderLogged";
import { usePets } from "../../Providers/Pets";
import CardPets from "../../Components/CardPets";
import CatBox from "../../Assets/Img/catInBox.gif";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";
import { useEffect, useState } from "react";
import { LightTip } from "../../Helpers/Tooltip";
import { useAuth } from "../../Providers/Auth";
import ModalPet from "../../Components/ModalPet";

interface Pets {
  petName: string;
  petType: string;
  petGender: string;
  petSize: string;
  petBirthDate: string;
  userId: number;
  id: number;
}

const PetsPage = () => {
  const { pets } = usePets();
  const { user } = useAuth();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [petId, setPetId] = useState<number>(0);
  const [isPetAddition, setIsPetAddition] = useState<boolean>(false);
  const [myPets, setMyPets] = useState<Pets[]>([] as Pets[]);

  const editPet = (id: number) => {
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
      const anyPets = pets.filter((pet) => pet.userId === user.id);

      setMyPets(anyPets);
    }
  }, [pets]);

  return (
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
