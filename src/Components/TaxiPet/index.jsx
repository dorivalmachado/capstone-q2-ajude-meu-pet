import { useEffect, useState } from "react";
import { Container, Paragraph, Subtitle, Text } from "./styles";
import LogoPetTaxi from "../../Assets/Img/LogoPetTaxi.jpg";
import AOS from "aos";

const TaxiPet = () => {
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
    <div data-aos="fade-right">
      <Container id="taxi">
        <Subtitle>TaxiPet</Subtitle>
        <Text>
          <Paragraph>
            Se seu pet está com a agenda cheia de compromissos e você não tem
            tempo de levá-lo, nós fazemos isso para você. Com o taxi-pet seu
            animalzinho sempre estará na hora certa e no lugar certo.
          </Paragraph>
          {width > 767 && (
            <img
              src={LogoPetTaxi}
              alt="cachorro de óculos na janela do carro"
            />
          )}
        </Text>
      </Container>
    </div>
  );
};

export default TaxiPet;
