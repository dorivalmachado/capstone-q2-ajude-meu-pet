import { Container, ContainerContent } from "./styles.js";
import { motion } from "framer-motion";
import Button from "../../Components/Button";
import DogImage from "../../Assets/Img/hello.gif";
import MainContainer from "../../Components/MainContainer";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0 }}
    >
      <MainContainer>
        <Container>
          <ContainerContent>
            <h2>Ooops!</h2>
            <p>
              Não encotramos a página que você procurou,{" "}
              <span>aperte o botão para voltar para a home.</span>
            </p>
            <Button
              onClick={() => history.push("/")}
              buttonColor="darkBrown"
              id="notFound__button"
            >
              Home
            </Button>
          </ContainerContent>
          <img src={DogImage} alt="Dog waving its paw" />
        </Container>
      </MainContainer>
    </motion.div>
  );
};

export default NotFound;
