import { Container, ContainerContent } from "./styles.js";
import Button from "../../Components/Button";
import DogImage from "../../Assets/Img/hello.gif";
import MainContainer from "../../Components/MainContainer";

const NotFound = () => {
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
            onClick={() => console.log("click")}
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
