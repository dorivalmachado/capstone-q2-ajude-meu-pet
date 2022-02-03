import { Container } from "./styles.js";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Home from "../../Components/Home";
import MainContainer from "../../Components/MainContainer";
import Ride from "../../Components/Ride";
import TaxiPet from "../../Components/TaxiPet";
import Testimonial from "../../Components/Testimonial";
import Training from "../../Components/Training";
import { useEffect, useState } from "react";
import {BsArrowUpCircle} from 'react-icons/bs'

const LandingPage = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      <MainContainer>
        <Container>
          {showArrow && (
            <button onClick={scrollToTop} className="toTopBtn">
              <BsArrowUpCircle />
            </button>
          )}
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
