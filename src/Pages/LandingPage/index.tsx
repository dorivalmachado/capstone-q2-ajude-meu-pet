import { Container } from "./styles.ts";
import Footer from "../../Components/Footer/index.tsx";
import Header from "../../Components/Header/index.tsx";
import Home from "../../Components/Home/index.tsx";
import MainContainer from "../../Components/MainContainer/index.tsx";
import Ride from "../../Components/Ride/index.tsx";
import TaxiPet from "../../Components/TaxiPet/index.tsx";
import Testimonial from "../../Components/Testimonial/index.tsx";
import Training from "../../Components/Training/index.tsx";

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
