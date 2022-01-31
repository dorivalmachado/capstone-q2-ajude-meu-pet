import Imagem from "../Imagem";
import { Container, Paragraph, Subtitle, Text } from "./styles";
import LogoCaminhada from "../../Assets/LogoCaminhada.jpg";
import { useEffect, useState } from "react";

const Ride = () => {
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
    <Container id='passeio'>
      <Subtitle>Passeios</Subtitle>
      <Text>
        <Paragraph>
          Você acha que o seu animalzinho de estimação está fora de forma?
          Nossos passeios são a alternativa certa para você. Nossos
          profissionais fazem caminhadas ou corridas com os pets nas mais
          variadas distâncias, para que seu pet tenha a medida certa de
          exercícios.
        </Paragraph>
        {width > 767 && (
          <Imagem src={LogoCaminhada} alt="mulher caminhando com cachorro" />
        )}
      </Text>
    </Container>
  );
};

export default Ride;
