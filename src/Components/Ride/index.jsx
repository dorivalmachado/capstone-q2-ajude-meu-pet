import { Container, Paragraph, Subtitle, Text } from "./styles";
import LogoCaminhada from "../../Assets/Img/LogoCaminhada.jpg";
import { useEffect, useState } from "react";
import AOS from "aos";

const Ride = () => {

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
    <Container id="passeio">
      <div data-aos="fade-right">
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
            <img src={LogoCaminhada} alt="mulher caminhando com cachorro" />
          )}
        </Text>
      </div>
    </Container>
  );
};

export default Ride;
