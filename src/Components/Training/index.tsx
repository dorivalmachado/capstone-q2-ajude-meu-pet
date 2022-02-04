import { useEffect, useState } from "react";
import {
  Container,
  Content,
  Images,
  Paragraph,
  Subtitle,
  Text,
} from "./styles";
import givePaw from "../../Assets/Img/givePaw.gif";
import Adestramento1 from "../../Assets/Img/LogoAdestramento1.png";
import Adestramento2 from "../../Assets/Img/LogoAdestramento2.png";
import Adestramento3 from "../../Assets/Img/LogoAdestramento3.png";
import Adestramento4 from "../../Assets/Img/LogoAdestramento4.png";
import Adestramento5 from "../../Assets/Img/LogoAdestramento5.png";
import Adestramento6 from "../../Assets/Img/LogoAdestramento6.png";

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

  const { width } = useWindowDimensions();

  const trainingImgs = [
    Adestramento1,
    Adestramento2,
    Adestramento3,
    Adestramento4,
    Adestramento5,
    Adestramento6,
  ];

  return (
    <Container id="adestramento">
      <Subtitle>Adestramento</Subtitle>
      <Content>
        <Text>
          <div className="contentContainer">
            <Paragraph>
              <strong>Adestramento básico</strong>: Como o próprio nome já diz,
              o adestramento básico ensina ao pet conceitos de obediência
              simples. Alguns exemplos são: senta, deita, fica, junto, dar a
              pata, entender o não, aqui e meia volta.
            </Paragraph>
            <img src={givePaw} alt="Cachorro dando a patinha" />
          </div>
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
        {width > 767 && (
          <Images>
            {trainingImgs.map((image, index) => (
              <div
                style={{ backgroundImage: `url(${image})` }}
                className={"adestramento" + index}
                key={"Adestramento de pet" + index}
              ></div>
            ))}
          </Images>
        )}
      </Content>
    </Container>
  );
};

export default Training;
