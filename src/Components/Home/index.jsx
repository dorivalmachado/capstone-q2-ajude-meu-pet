import {
  Assign,
  CarouselContainer,
  Container,
  ContentImg,
  Imagem,
  MainContainer,
  Paragraph,
  Subtitle,
  Text,
} from "./styles";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Adestramento1 from "../../Assets/Img/Adestramento1.jpg";
import Adestramento2 from "../../Assets/Img/Adestramento2.jpg";
import Adestramento3 from "../../Assets/Img/Adestramento3.jpg";
import Caminhada1 from "../../Assets/Img/Caminhada1.jpg";
import Caminhada2 from "../../Assets/Img/Caminhada2.jpg";
import { Link } from "react-router-dom";
import loveAnimals from "../../Assets/Img/loveAnimals.gif";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      delay: 50,
      duration: 1500,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

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
    <MainContainer>
      {width < 768 ? (
        <div data-aos="zoom-in">
          <Container id="home">
            <Subtitle>Cuide do seu melhor amigo</Subtitle>
            <img
              src={loveAnimals}
              alt="We love animals"
              className="imageMobile"
            />
            <Text>
              <Paragraph>
                Nós acreditamos que todo pet merece um cuidado especial. Por
                isso oferecemos serviços prestados por pessoas que amam animais
                tanto quanto nós. Acesse nossa plataforma e confira nossos
                serviços!
              </Paragraph>
            </Text>
          </Container>
        </div>
      ) : (
        <CarouselContainer>
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
        </CarouselContainer>
      )}
    </MainContainer>
  );
};

export default Home;
