import React from "react";
import { Container, ContentBox } from "./styles.ts";
import CatImage from "../../Assets/Img/cat.png";
import DogImage from "../../Assets/Img/dog.png";
import PawImage from "../../Assets/Img/pawprints.png";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { LightTip } from "../../Helpers/Tooltip/index.tsx";

const CardPets = ({
  name,
  size,
  animalType,
  petBirthDate,
  gender,
  editPet,
}) => {
  const handleImage = () => {
    return animalType === "gato"
      ? CatImage
      : animalType === "cachorro"
      ? DogImage
      : PawImage;
  };

  const handleAnimalType = () => {
    return animalType === "gato"
      ? `Gato`
      : animalType === "cachorro"
      ? `Cachorro`
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
      <LightTip title="Editar cadastro do pet">
        <div className="iconBox" onClick={editPet}>
          <FiEdit />
        </div>
      </LightTip>

      <ContentBox>
        <div className="firstBox">
          <div className="imageBox">
            <img src={handleImage()} alt={animalType} />
          </div>
          <div className="secondBox">
            <h3>
              {name}{" "}
              {gender === "female" ? <BsGenderFemale /> : <BsGenderMale />}
            </h3>

            <p>{handleAnimalType()}</p>
          </div>
        </div>

        <p>Animal de porte {size}</p>

        <p>Idade: {handleBirthDate()} anos</p>
      </ContentBox>
    </Container>
  );
};

export default CardPets;
