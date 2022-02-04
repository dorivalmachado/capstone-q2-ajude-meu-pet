import React from "react";
import { motion } from "framer-motion";
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

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0 }}
    >

      <MainContainer>
        <Container>
          <Header isLogged={false} />
          <Home />
          <Ride />
          <Training />
          <TaxiPet />
          <Testimonial />
          <Footer />
        </Container>
      </MainContainer>
    
    </motion.div>
    
  );
};

export default LandingPage;
