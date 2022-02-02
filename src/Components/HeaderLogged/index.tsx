import { CgProfile } from "react-icons/cg";
import { Container, Menu, LogoutBox } from "./styles";
import { GoSignOut } from "react-icons/go";
import { LightTip } from "../../Helpers/Tooltip";
import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { SiDatadog } from "react-icons/si";
import { useAuth } from "../../Providers/Auth";
import LogoImg from "../../Assets/Img/logo.svg";

export const HeaderLogged = () => {
  const { logout } = useAuth();

  return (
    <Container>
      <div className="content">
        <img src={LogoImg} alt="logo" />
        <Menu>
          <div className="menuTop">
            <div>
              <Link to="/profile">
                <CgProfile />
                <p>Perfil</p>
              </Link>
            </div>
            <div>
              <Link to="/pets">
                <MdPets />
                <p>Meus pets</p>
              </Link>
            </div>
            <div>
              <Link to="/services">
                <SiDatadog />
                <p>Serviços</p>
              </Link>
            </div>
          </div>
        </Menu>
        <div className="menuBottom">
          <LightTip title="Sair">
            <LogoutBox onClick={() => logout()}>
              <GoSignOut size={40} cursor="pointer" />
            </LogoutBox>
          </LightTip>
        </div>
      </div>
    </Container>
  );
};
