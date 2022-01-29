import { Container, Box } from "./styles";
import CardServices from "../../Components/CardsServices";
import Header from "../../Components/Header";
import { HeaderLogged } from "../../Components/HeaderLogged";
import { HiredServices } from "../../Components/HiredServices";

export const ServicesPage = () => {
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
        <HiredServices />
      </Box>
    </Container>
  );
};
