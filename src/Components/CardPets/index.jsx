import React from "react";
import { Container, ContentBox } from "./styles";
import CatImage from "../../Assets/Img/cat.png";
import DogImage from "../../Assets/Img/dog.png";
import PawImage from "../../Assets/Img/pawprints.png";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

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

const CardPets = ({
  name,
  breed,
  size,
  animalType,
  petBirthDate,
  gender,
  deleteCard,
}) => {
  const handleImage = () => {
    return animalType === "cat"
      ? CatImage
      : animalType === "dog"
      ? DogImage
      : PawImage;
  };

  const handleAnimalType = () => {
    return animalType === "cat"
      ? "Gato"
      : animalType === "dog"
      ? "Cachorro"
      : "Animal";
  };

  const handleBreed = () => {
    return animalType === "cat"
      ? `Gato - ${breed}`
      : animalType === "dog"
      ? `Cachorro - ${breed}`
      : animalType;
  };

  const handleBirthDate = () => {
    const now = new Date();
    const formatDate = Intl.DateTimeFormat(["pt-br"]).format(now);
    const todayDate = formatDate.split("/");
    const arrayPetDate = petBirthDate.split("/");
    let year = todayDate[2] - arrayPetDate[2];
    let month = todayDate[1] - arrayPetDate[1];
    let day = todayDate[0] - arrayPetDate[0];

    if (month < 0) return year - 1;
    if (month === 0 && day < 0) return year - 1;

    return year;
  };

  return (
    <Container>
      <LightTooltip title="Excluir Pet">
        <div className="trashIconBox" onClick={deleteCard}>
          <FaTrash />
        </div>
      </LightTooltip>

      <ContentBox>
        <div className="firstBox">
          <img src={handleImage()} alt={animalType} />
          <div className="secondBox">
            <h3>
              {name}{" "}
              {gender === "female" ? <BsGenderFemale /> : <BsGenderMale />}
            </h3>

            <p>{handleBreed()}</p>
          </div>
        </div>

        <p>
          {handleAnimalType()} de porte {size}
        </p>

        <p>Idade: {handleBirthDate()} anos</p>
      </ContentBox>
    </Container>
  );
};

export default CardPets;
