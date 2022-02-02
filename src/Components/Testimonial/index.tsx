import { Card, Container, Content, Imagem, Subtitle, Text } from "./styles.ts";
import Depo1 from "../../Assets/Img/Depo1.webp";
import Depo2 from "../../Assets/Img/Depo2.jpg";
import Depo3 from "../../Assets/Img/Depo3.jpg";

const Testimonial = () => {
  return (
    <Container>
      <Subtitle>DEPOIMENTOS</Subtitle>
      <Content>
        <Card>
          <Imagem src={Depo1} alt="cachorro deitado no carpet" />
          <Text>
            Eu era gordinha e cansadinha, sempre comendo demais e não fazendo
            nenhum exercício, mas com Ajude meu pet, fiquei malhada e gostosa!
          </Text>
        </Card>
        <Card>
          <Imagem
            src={Depo2}
            alt="cachorro andando na rua com a coleira na boca"
          />
          <Text>
            Meu dono não me levava para passear, mas com Ajude meu Pet, estou
            caminhando 10km por dia, e treinando para a São Silvestre.
          </Text>
        </Card>
        <Card>
          <Imagem src={Depo3} alt="cachorro de óculos" />
          <Text>
            Eu era um vida loka, não estava nem aí para as leis e muros, fugia
            de casa voltava a hora que queria, estava despediçando meu tempo,
            mas com o Ajude meu pet, dei a volta por cima, e esse ano, me formo
            em direito.
          </Text>
        </Card>
      </Content>
    </Container>
  );
};

export default Testimonial;
