import { Container, Logo, Menu, LogoutBox } from "./styles";
import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/Auth";
import { LightTip } from "../../Helpers/Tooltip";

export const HeaderLogged = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Logo />
      <Menu>
        <div className="menuTop">
          <div>
            <Link to="/pets">
              <p>Meus pets</p>
            </Link>
          </div>
          <div>
            <Link to="/services">
              <p>Serviços</p>
            </Link>
          </div>
        </div>
        <div className="menuBottom">
          <div>
            <Link to="/profile">
              <p>Perfil</p>
            </Link>
          </div>
          <LightTip title="Sair">
            <LogoutBox onClick={() => logout()}>
              <GoSignOut size={40} cursor="pointer" />
            </LogoutBox>
          </LightTip>
        </div>
      </Menu>
    </Container>
  );
};
