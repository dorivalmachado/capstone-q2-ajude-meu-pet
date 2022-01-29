import { Container, Box } from "./styles";
import CardServices from "../CardsServices";
import Header from "../Header";
import { HeaderLogged } from "../HeaderLogged";

export const DashboardLogged = () => {
  return (
    <Container>
      <div className="headerMobile">
        <Header />
      </div>
      <div className="headerDesktop">
        <HeaderLogged />
      </div>
      <Box>
        <div className="title">
          <p>Selecione os serviços:</p>
        </div>
        <CardServices />
        <div className="title">
          <p>Serviços em andamento</p>
        </div>
      </Box>
    </Container>
  );
};
