import { Container, Box } from "./styles";
import CardServices from "../../Components/CardsServices";
import Header from "../../Components/Header";
import { HeaderLogged } from "../../Components/HeaderLogged";
import { HiredServices } from "../../Components/HiredServices";
import MainContainer from "../../Components/MainContainer";

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
            <p>Selecione os serviços:</p>
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
