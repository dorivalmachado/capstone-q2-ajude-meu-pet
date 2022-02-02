import { Container, ContainerContent } from "./styles.ts";
import Button from "../../Components/Button/index.tsx";
import DogImage from "../../Assets/Img/hello.gif";
import MainContainer from "../../Components/MainContainer";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
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
  );
};

export default NotFound;
