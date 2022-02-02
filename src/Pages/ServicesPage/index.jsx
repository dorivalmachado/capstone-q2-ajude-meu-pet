import { Container, Box } from "./styles.ts";
import CardServices from "../../Components/CardsServices/index.tsx";
import Header from "../../Components/Header/index.tsx";
import { HeaderLogged } from "../../Components/HeaderLogged/index.tsx";
import { HiredServices } from "../../Components/HiredServices/index.tsx";
import MainContainer from "../../Components/MainContainer/index.tsx";

export const ServicesPage = () => {
  return (
    <MainContainer>
      <Container>
        <div className="headerMobile">
          <Header isLogged={true} />
        </div>
        <div className="headerDesktop">
          <HeaderLogged />
        </div>
        <Box>
          <div className="title">
            <p>Selecione os serviços</p>
          </div>
          <CardServices />
          <div className="title">
            <p>Serviços em andamento</p>
          </div>
          <HiredServices />
        </Box>
      </Container>
    </MainContainer>
  );
};
