import React from "react";
import { Container, ContentBox } from "./styles";
import CatImage from "../../Assets/Img/cat.png";
import DogImage from "../../Assets/Img/dog.png";
import PawImage from "../../Assets/Img/pawprints.png";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const CardPets = ({ name, breed, size, animalType, petBirthDate, sex, deleteCart }) => {
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
      : "Outro";
  };

  const handleBreed = () => {
    return animalType === "cat" || animalType === "dog" ? breed : "Outro";
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
    if (day < 0) return year - 1;

    return year;
  };

  return (
    <Container>
      <div className="trashIconBox" onClick={deleteCart}>
      <FaTrash/>
      </div>
      <ContentBox>
      <div className="firstBox">
        <img src={handleImage()} alt={animalType} />
        <div className="secondBox">
          <h3>
            {name} {sex === "female" ? <BsGenderFemale /> : <BsGenderMale />}
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
