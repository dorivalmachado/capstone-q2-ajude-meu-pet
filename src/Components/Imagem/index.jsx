import { Container } from "./styles";

const Imagem = ({ src, alt }) => {
  return (
    <>
      <Container src={src} alt={alt}></Container>
    </>
  );
};

export default Imagem;
