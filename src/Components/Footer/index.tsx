import { Container, LeftBox, RightBox } from "./styles";
import Logo from "../../Assets/Img/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <LeftBox>
        <div className="logoBox">
          <h2>Ajude meu pet</h2>
          <img src={Logo} alt="dog logo" />
        </div>

        <div className="linkBox">
          <Link to="/companyInfo">Saiba mais</Link>
          <Link to="/team">Sobre nós</Link>
        </div>
      </LeftBox>
      <RightBox>
        <p>@2022 Ajude Meu Pet</p>
        <p>All Rights Reserved</p>
      </RightBox>
    </Container>
  );
};

export default Footer;
