import { Container } from "./styles";
import LogoCaminhada from "../../Assets/LogoCaminhada.jpg";

const Imagem = ({ src, alt }) => {
  return (
    <>
      <Container src={src} alt={alt}></Container>
    </>
  );
};

export default Imagem;
