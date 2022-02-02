import { Container, Imagem, Title, DrawerContent } from "./styles";
import { Drawer } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSignIn, GoSignOut, GoPencil } from "react-icons/go";
import { LightTip } from "../../Helpers/Tooltip";
import { Link } from "react-router-dom";
import { MdPets, MdPerson } from "react-icons/md";
import { SiDatadog } from "react-icons/si";
import { useAuth } from "../../Providers/Auth";
import { useEffect, useState } from "react";
import logo from "../../Assets/Img/logo.png";

interface HeaderProps {
  isLogged: boolean;
}

const Header = ({ isLogged = false }: HeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { logout } = useAuth();

  const toggleDrawer = (event: any, status: boolean) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(status);
  };

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
        <Container>
          <div className="logoBox">
            <Title>AJUDE MEU PET</Title>
          </div>
          <Imagem src={logo} alt="Logo" />
          <LightTip title="Menu">
            <button onClick={(event) => toggleDrawer(event, true)}>
              <GiHamburgerMenu />
            </button>
          </LightTip>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={(event) => toggleDrawer(event, false)}
          >
            <DrawerContent isLogged={isLogged}>
              {isLogged ? (
                <ul>
                  <li>
                    <MdPets />
                    <Link to="/pets">Meus Pets</Link>
                  </li>
                  <li>
                    <SiDatadog />
                    <Link to="/services">Serviços</Link>
                  </li>
                  <li>
                    <MdPerson />
                    <Link to="/profile">Perfil</Link>
                  </li>
                  <li onClick={() => logout()}>
                    <GoSignOut />
                    Sair
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <GoSignIn />
                    <Link to="/login">Logar</Link>
                  </li>
                  <li>
                    <GoPencil />
                    <Link to="/register">Cadastrar</Link>
                  </li>
                </ul>
              )}
            </DrawerContent>
          </Drawer>
        </Container>
      ) : (
        <Container>
          <Title>AJUDE MEU PET</Title>
          <Imagem src={logo} alt="Logo" />
          <a href="#home">HOME</a>
          <a href="#passeio">PASSEIOS</a>
          <a href="#adestramento">ADESTRAMENTO</a>
          <a href="#taxi">TAXI-PET</a>
          <Link to="/login">LOGIN</Link>
        </Container>
      )}
    </>
  );
};

export default Header;
