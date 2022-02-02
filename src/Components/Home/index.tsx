import {
  Assign,
  Container,
  ContentImg,
  Imagem,
  Paragraph,
  Subtitle,
  Text,
} from "./styles.ts";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Adestramento1 from "../../Assets/Img/Adestramento1.jpg";
import Adestramento2 from "../../Assets/Img/Adestramento2.jpg";
import Adestramento3 from "../../Assets/Img/Adestramento3.jpg";
import Caminhada1 from "../../Assets/Img/Caminhada1.jpg";
import Caminhada2 from "../../Assets/Img/Caminhada2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
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

  return (
    <>
      {width < 768 ? (
        <Container id="home">
          <Subtitle>Cuide do seu melhor amigo</Subtitle>
          <Text>
            <Paragraph>
              Nós acreditamos que todo pet merece um cuidado especial. Por isso
              oferecemos serviços prestados por pessoas que amam animais tanto
              quanto nós. Acesse nossa plataforma e confira nossos serviços
            </Paragraph>
          </Text>
        </Container>
      ) : (
        <>
          <Carousel>
            <ContentImg>
              <Imagem src={Adestramento1} alt="Adestramento" />
            </ContentImg>
            <ContentImg>
              <Imagem src={Adestramento2} alt="Adestramento" />
            </ContentImg>
            <ContentImg>
              <Imagem src={Adestramento3} alt="Adestramento" />
            </ContentImg>
            <ContentImg>
              <Imagem src={Caminhada1} alt="Caminhada" />
            </ContentImg>
            <ContentImg>
              <Imagem src={Caminhada2} alt="Caminhada" />
            </ContentImg>
          </Carousel>
          <Assign>
            <p>
              Não é cadastrado ainda? <Link to="/register">Cadastre-se</Link>
            </p>
          </Assign>
        </>
      )}
    </>
  );
};

export default Home;
