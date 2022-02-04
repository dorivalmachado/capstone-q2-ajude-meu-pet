import { Container, Box } from "./styles";
import { motion } from "framer-motion";
import CardServices from "../../Components/CardsServices";
import Header from "../../Components/Header";
import { HeaderLogged } from "../../Components/HeaderLogged";
import { HiredServices } from "../../Components/HiredServices";
import MainContainer from "../../Components/MainContainer";

export const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0 }}
    >

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
              <h2>Selecione os serviços</h2>
            </div>
            <CardServices />
            <div className="title">
              <h2>Serviços em andamento</h2>
            </div>
            <HiredServices />
          </Box>
        </Container>
      </MainContainer>
    </motion.div>
  );
};
