import { useEffect, useState } from "react";
import Imagem from "../Imagem/index.tsx";
import { Container, Paragraph, Subtitle, Text } from "./styles.ts";
import LogoPetTaxi from "../../Assets/Img/LogoPetTaxi.jpg";

const TaxiPet = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();

  return (
    <Container id="taxi">
      <Subtitle>TaxiPet</Subtitle>
      <Text>
        <Paragraph>
          Se seu pet está com a agenda cheia de compromissos e você não tem
          tempo de levá-lo, nós fazemos isso para você. Com o taxi-pet seu
          animalzinho sempre estará na hora certa e no lugar certo.
        </Paragraph>
        {width > 767 && (
          <Imagem
            src={LogoPetTaxi}
            alt="cachorro de óculos na janela do carro"
          />
        )}
      </Text>
    </Container>
  );
};

export default TaxiPet;
