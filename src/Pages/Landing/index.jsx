import CardText from "../../Components/CardText";
import CardImage from "../../Components/CardImage";
import pet1 from "../../Assets/images/dog_walking.png";
import { LandingContent, ScreenFilled, SideContent, TitleContent } from "./styles";

const Landing = () => {
  return (
    <LandingContent>
      <ScreenFilled>
        <TitleContent>PASSEIOS</TitleContent>
        <SideContent>
          <CardText
            title="PASSEIOS">
            <p>Você acha que o seu animalzinho de estimação está fora de forma? Nossos passeios são a alternativa certa para você. Nossos profissionais fazem caminhadas ou corridas com os pets nas mais variadas distâncias, para que seu pet tenha a medida certa de exercícios.</p>
          </CardText>
          <CardImage
            img={pet1}
            src="dog on a side walking with guided by a person"
          />
        </SideContent>
        <TitleContent>PASSEIOS</TitleContent>
        <SideContent>
          <CardText
            alternate
            title="PASSEIOS">
            <p>Você acha que o seu animalzinho de estimação está fora de forma? Nossos passeios são a alternativa certa para você. Nossos profissionais fazem caminhadas ou corridas com os pets nas mais variadas distâncias, para que seu pet tenha a medida certa de exercícios.</p>
          </CardText>
          <CardImage
            img={pet1}
            src="dog on a side walking with guided by a person"
          />
        </SideContent>
      </ScreenFilled>
    </LandingContent>
  );
};

export default Landing;
