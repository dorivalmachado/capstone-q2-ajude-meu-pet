import { Container, MainPage, Logo, Menu } from "./styles";
import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/Auth";

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
            <Link to="">
              <p>Serviços</p>
            </Link>
          </div>
        </div>
        <div className="menuBottom">
          <div>
            <Link to="">
              <p>Perfil</p>
            </Link>
          </div>
          <GoSignOut size={40} cursor="pointer" onClick={() => logout} />
        </div>
      </Menu>
    </Container>
  );
};
