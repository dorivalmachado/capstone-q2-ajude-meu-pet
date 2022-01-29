import { Container, ContainerContent, PetsBox } from "./styles";
import { FaPlus } from "react-icons/fa";
import { HeaderLogged } from "../../Components/HeaderLogged";
import { styled } from "@mui/material/styles";
import { usePets } from "../../Providers/Pets";
import CardPets from "../../Components/CardPets";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";
import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Button from "../../Components/Button";

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
  // const { pets, petDelete } = usePets();

  let pets = [
    {
      userId: 1,
      id: 1,
      petName: "Melina",
      petBreed: "labrador",
      petType: "sheep",
      petBirthDate: "20/01/2008",
      petSize: "médio",
      petGender: "female",
    },
    {
      userId: 1,
      id: 2,
      petName: "Mala",
      petBreed: "sda",
      petType: "horse",
      petBirthDate: "05/10/2010",
      petSize: "grande",
      petGender: "female",
    },
    {
      userId: 1,
      id: 3,
      petName: "Leo",
      petBreed: "labrador",
      petType: "cat",
      petBirthDate: "20/01/2018",
      petSize: "pequeno",
      petGender: "male",
    },
    {
      userId: 1,
      id: 4,
      petName: "Tito",
      petBreed: "siames",
      petType: "cat",
      petBirthDate: "20/01/2018",
      petSize: "grande",
      petGender: "male",
    },
    {
      userId: 1,
      id: 5,
      petName: "Jujuba",
      petBreed: "labrador",
      petType: "dog",
      petBirthDate: "20/01/2019",
      petSize: "grande",
      petGender: "female",
    },
    {
      userId: 1,
      id: 6,
      petName: "Mila",
      petBreed: "labrador",
      petType: "dog",
      petBirthDate: "20/01/2020",
      petSize: "grande",
      petGender: "female",
    },
    {
      userId: 1,
      id: 7,
      petName: "Mala",
      petBreed: "sda",
      petType: "horse",
      petBirthDate: "05/10/2010",
      petSize: "grande",
      petGender: "female",
    },
    {
      userId: 1,
      id: 8,
      petName: "Leo",
      petBreed: "labrador",
      petType: "cat",
      petBirthDate: "20/01/2018",
      petSize: "pequeno",
      petGender: "male",
    },
  ];

  return (
    <MainContainer>
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
                onClick={() => console.log("Abrir modal do formulário aqui")}
              >
                <FaPlus />
              </button>
            </LightTooltip>
          </div>

          <PetsBox>
            {pets.length > 0 ? (
              pets.map((pet) => (
                <CardPets
                  key={pet.id}
                  name={pet.petName}
                  breed={pet.petBreed}
                  size={pet.petSize}
                  animalType={pet.petType}
                  petBirthDate={pet.petBirthDate}
                  gender={pet.petGender}
                  // deleteCard={() => petDelete(pet.id)}
                />
              ))
            ) : (
              <h2>Nenhum pet cadastrado ainda.</h2>
            )}
          </PetsBox>
        </ContainerContent>
      </Container>
    </MainContainer>
  );
};

export default PetsPage;
