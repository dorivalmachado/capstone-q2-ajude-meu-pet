import { Container, Imagem, Title } from "./styles";
import Logo from "../../Assets/Logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
    <>
      {width < 768 ? (
        <Container>
          <Title>AJUDE MEU PET</Title>
          <Imagem src={Logo} alt="Logo" />
          <GiHamburgerMenu />
        </Container>
      ) : (
        <Container>
          <Title>AJUDE MEU PET</Title>
          <Imagem src={Logo} alt="Logo" />
          <a href="#home">HOME</a>
          <a href='#passeio'>PASSEIOS</a>
          <a href='#adestramento'>ADESTRAMENTO</a>
          <a href='#taxi'>TAXI-PET</a>
          <Link to='/login'>LOGIN</Link>
        </Container>
      )}
    </>
  );
};

export default Header;
