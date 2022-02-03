import React from "react";
import { RadioPet } from "./styles";
import CatImage from "../../Assets/Img/cat.png";
import DogImage from "../../Assets/Img/dog.png";
import PawImage from "../../Assets/Img/pawprints.png";

interface RadioButtonPetsProps {
  label: string;
  name: string;
  register: (name: string) => void;
  animalType: string;
  value: number;
  id: string;
  petName: string;
}

const RadioButtonPets = ({
  label,
  name,
  register,
  animalType,
  value,
  id,
  petName,
  ...rest
}: RadioButtonPetsProps) => {
  const handleImage = () => {
    let image = "";
    switch (animalType) {
      case "gato":
        image = CatImage;
        break;
      case "cachorro":
        image = DogImage;
        break;
      default:
        image = PawImage;
        break;
    }
    return image;
  };

  return (
    <>
      <RadioPet
        type="radio"
        id={id}
        name={name}
        value={value}
        {...register(name)}
        {...rest}
      />
      <label htmlFor={id}>
        <img src={handleImage()} alt={animalType} />
        <p>{petName}</p>
      </label>
    </>
  );
};

export default RadioButtonPets;
