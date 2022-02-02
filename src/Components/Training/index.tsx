import { useEffect, useState } from "react";
import Imagem from "../Imagem";
import {
  Container,
  Content,
  Images,
  Paragraph,
  Subtitle,
  Text,
} from "./styles";
import LogoAdestramento1 from "../../Assets/Img/LogoAdestramento1.jpeg";
import LogoAdestramento2 from "../../Assets/Img/LogoAdestramento2.jpeg";

const Training = () => {
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
    <Container id="adestramento">
      <Subtitle>Adestramento</Subtitle>
      <Content>
        {width > 767 && (
          <Images>
            <Imagem
              src={LogoAdestramento1}
              alt="Cachorro dando a pata para uma mulher"
            />
            <Imagem src={LogoAdestramento2} alt="Gato com um homem" />
          </Images>
        )}
        <Text>
          <Paragraph>
            <strong>Adestramento básico</strong>: Como o próprio nome já diz, o
            adestramento básico ensina ao pet conceitos de obediência simples.
            Alguns exemplos são: senta, deita, fica, junto, dar a pata, entender
            o não, aqui e meia volta.
          </Paragraph>
          <Paragraph>
            <strong>Adestramento avançado</strong>: treinamento oferecido para
            cães de trabalho e para esportes. Dentro do adestramento no pet
            shop, há algumas atividades, como saltar e buscar objetos, por
            exemplo.
          </Paragraph>
          <Paragraph>
            <strong>Adestramento grupal</strong>: Para os donos que veem a
            necessidade de seu animal ter contato com outros pets, essa é a
            opção ideal. Nele, são ensinados comandos de obediência que podem
            ser usados fora de casa, assim como adequar o comportamento em
            passeios e em momentos de socialização com pessoas ou outros
            animais.
          </Paragraph>
        </Text>
      </Content>
    </Container>
  );
};

export default Training;
