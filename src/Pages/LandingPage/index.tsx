import { Container } from "./styles";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Home from "../../Components/Home";
import MainContainer from "../../Components/MainContainer";
import Ride from "../../Components/Ride";
import TaxiPet from "../../Components/TaxiPet";
import Testimonial from "../../Components/Testimonial";
import Training from "../../Components/Training";

const LandingPage = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <Header />
          <Home />
          <Ride />
          <Training />
          <TaxiPet />
          <Testimonial />
          <Footer />
        </Container>
      </MainContainer>
    </>
  );
};

export default LandingPage;
