import { Container } from "./styles";

interface ImagemProps {
  src: string;
  alt: string;
}

const Imagem = ({ src, alt }: ImagemProps) => {
  return (
    <>
      <Container src={src} alt={alt}></Container>
    </>
  );
};

export default Imagem;
