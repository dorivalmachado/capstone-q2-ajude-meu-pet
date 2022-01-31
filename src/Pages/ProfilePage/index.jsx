import { Container, ContainerContent } from "./styles";
import { HeaderLogged } from "../../Components/HeaderLogged";
import { useAuth } from "../../Providers/Auth";
import { useState } from "react";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";
import Profile from "../../Components/Profile";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);

    const { user } = useAuth();

  return (
    <MainContainer>
      <Container>
        <aside className="headerMobile">
          <Header isLogged={true} />
        </aside>
        <aside className="headerDesktop">
          <HeaderLogged />
        </aside>

        <ContainerContent>
          <div className="profileData">
            <h2>Perfil</h2>
            <ul>
              <li>
                <strong>Nome:</strong> {user.name}
              </li>
              <li>
                <strong>Email:</strong> {user.email}
              </li>
              <li>
                <strong>Telefone:</strong> {user.phone}
              </li>
              <li>
                <strong>Endereço:</strong> {user.address}
              </li>
            </ul>
            <Button buttonColor="yellow" onClick={() => setOpen(true)}>
              Editar Informações
            </Button>
          </div>
        </ContainerContent>

        <Profile open={open} onClose={() => setOpen(false)} />
      </Container>
    </MainContainer>
  );
};

export default ProfilePage;
