import {
  Container,
  Title,
  Imagem,
  Refs,
  Dev,
  Text,
  Gif,
  Header,
  Photo,
  Card,
  CardFront,
  CardBack,
  Content,
  SubText,
  TitleText,
} from "./styles.ts";
import Logo from "../../Assets/Img/Logo.webp";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect, useState } from "react";
import Group from "../../Assets/Img/Group.gif";
import Lucas from "../../Assets/Img/Lucas.jpeg";
import Dorival from "../../Assets/Img/Dorival.jpeg";
import Sarah from "../../Assets/Img/Sarah.jpeg";
import Rafael from "../../Assets/Img/Rafael.jpeg";
import Gustavo from "../../Assets/Img/Gustavo.jpeg";

export const TeamPage = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { width } = useWindowDimensions();

  return (
    <>
      {width < 768 ? (
        <div>
          <Container>
            <Title>AJUDE MEU PET</Title>
            <Imagem src={Logo} alt="Logo" />
            <Link to="/">Voltar</Link>
          </Container>
          <Refs>
            <Dev>
              <a href="https://www.linkedin.com/in/lcsreiser/" target="blank">
                <LinkedInIcon sx={{ color: "#0e76a8", fontSize: 30 }} />
              </a>
              <a href="https://github.com/lcsreiser " target="blank">
                <GitHubIcon sx={{ color: "#171515", fontSize: 30 }} />
              </a>
              <SubText>
                <strong>PO:</strong> Lucas Reiser
              </SubText>
            </Dev>

            <Dev>
              <a
                href="https://www.linkedin.com/in/dorivalmachado/"
                target="blank"
              >
                <LinkedInIcon sx={{ color: "#0e76a8", fontSize: 30 }} />
              </a>
              <a href="https://github.com/dorivalmachado" target="blank">
                <GitHubIcon sx={{ color: "#171515", fontSize: 30 }} />
              </a>
              <SubText>
                <strong>TL:</strong> Dorival Machado
              </SubText>
            </Dev>

            <Dev>
              <a
                href="https://www.linkedin.com/in/sarah-scardini-a93025223/"
                target="blank"
              >
                <LinkedInIcon sx={{ color: "#0e76a8", fontSize: 30 }} />
              </a>
              <a href="https://github.com/SarahScardini" target="blank">
                <GitHubIcon sx={{ color: "#171515", fontSize: 30 }} />
              </a>
              <SubText>
                <strong>SM:</strong> Sarah Scardini
              </SubText>
            </Dev>

            <Dev>
              <a
                href="https://www.linkedin.com/in/gustavooliveir4/"
                target="blank"
              >
                <LinkedInIcon sx={{ color: "#0e76a8", fontSize: 30 }} />
              </a>
              <a href="https://github.com/guztavo-oliveira" target="blank">
                <GitHubIcon sx={{ color: "#171515", fontSize: 30 }} />
              </a>
              <SubText>
                <strong>QA:</strong> Gustavo Oliveira
              </SubText>
            </Dev>

            <Dev>
              <a href="https://www.linkedin.com/in/raf2019" target="blank">
                <LinkedInIcon sx={{ color: "#0e76a8", fontSize: 30 }} />
              </a>
              <a href="https://github.com/raf2019" target="blank">
                <GitHubIcon sx={{ color: "#171515", fontSize: 30 }} />
              </a>
              <SubText>
                <strong>QA:</strong> Rafael Monteiro
              </SubText>
            </Dev>
          </Refs>
          <Footer />
        </div>
      ) : (
        <div>
          <Header>
            <Title>AJUDE MEU PET</Title>
            <Imagem src={Logo} alt="Logo" />
            <Link to="/">Voltar á pagina anterior</Link>
          </Header>

          <Container>
            <Gif src={Group} alt="desenho de 4 personagens conversando" />
            <Refs>
              <Dev>
                <Card>
                  <Content className="inner">
                    <CardFront>
                      <Photo src={Lucas} alt="Lucas" />
                    </CardFront>

                    <CardBack>
                      <a
                        href="https://www.linkedin.com/in/lcsreiser/"
                        target="blank"
                      >
                        <LinkedInIcon sx={{ color: "#0e76a8", fontSize: 30 }} />
                      </a>
                      <a href="https://github.com/lcsreiser " target="blank">
                        <GitHubIcon sx={{ color: "#171515", fontSize: 30 }} />
                      </a>
                    </CardBack>
                  </Content>
                </Card>
                <Text>
                  <TitleText>PO</TitleText>
                  <SubText>Lucas Reiser</SubText>
                </Text>
              </Dev>

              <Dev>
                <Card>
                  <Content className="inner">
                    <CardFront>
                      <Photo src={Dorival} alt="Dorival" />
                    </CardFront>

                    <CardBack>
                      <a
                        href="https://www.linkedin.com/in/dorivalmachado/"
                        target="blank"
                      >
                        <LinkedInIcon sx={{ color: "#0e76a8", fontSize: 30 }} />
                      </a>
                      <a
                        href="https://github.com/dorivalmachado"
                        target="blank"
                      >
                        <GitHubIcon sx={{ color: "#171515", fontSize: 30 }} />
                      </a>
                    </CardBack>
                  </Content>
                </Card>
                <Text>
                  <TitleText>TL</TitleText>
                  <SubText>Dorival Machado</SubText>
                </Text>
              </Dev>

              <Dev>
                <Card>
                  <Content className="inner">
                    <CardFront>
                      <Photo src={Sarah} alt="Sarah" />
                    </CardFront>

                    <CardBack>
                      <a
                        href="https://www.linkedin.com/in/sarah-scardini-a93025223/"
                        target="blank"
                      >
                        <LinkedInIcon sx={{ color: "#0e76a8", fontSize: 30 }} />
                      </a>
                      <a href="https://github.com/SarahScardini" target="blank">
                        <GitHubIcon sx={{ color: "#171515", fontSize: 30 }} />
                      </a>
                    </CardBack>
                  </Content>
                </Card>
                <Text>
                  <TitleText>SM</TitleText>
                  <SubText>Sarah Scardini</SubText>
                </Text>
              </Dev>

              <Dev>
                <Card>
                  <Content className="inner">
                    <CardFront>
                      <Photo src={Gustavo} alt="Gustavo" />
                    </CardFront>

                    <CardBack>
                      <a
                        href="https://www.linkedin.com/in/gustavooliveir4/"
                        target="blank"
                      >
                        <LinkedInIcon sx={{ color: "#0e76a8", fontSize: 30 }} />
                      </a>
                      <a
                        href="https://github.com/guztavo-oliveira"
                        target="blank"
                      >
                        <GitHubIcon sx={{ color: "#171515", fontSize: 30 }} />
                      </a>
                    </CardBack>
                  </Content>
                </Card>
                <Text>
                  <TitleText>QA</TitleText>
                  <SubText>Gustavo Oliveira</SubText>
                </Text>
              </Dev>

              <Dev>
                <Card>
                  <Content className="inner">
                    <CardFront>
                      <Photo src={Rafael} alt="Rafael" />
                    </CardFront>

                    <CardBack>
                      <a
                        href="https://www.linkedin.com/in/raf2019"
                        target="blank"
                      >
                        <LinkedInIcon sx={{ color: "#0e76a8", fontSize: 30 }} />
                      </a>
                      <a href="https://github.com/raf2019" target="blank">
                        <GitHubIcon sx={{ color: "#171515", fontSize: 30 }} />
                      </a>
                    </CardBack>
                  </Content>
                </Card>
                <Text>
                  <TitleText>QA</TitleText>
                  <SubText>Rafael Monteiro</SubText>
                </Text>
              </Dev>
            </Refs>
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
};
