import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-top: 50px;
    height: 580px;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
  }

  @media (min-width: 1024px) {
    height: 530px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const Card = styled.div`
  align-items: center;
  background-color: var(--caramel60);
  border-radius: 20px;
  border: 4px solid var(--white);
  outline: 3px dashed var(--caramel200);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
  padding: 20px 0px;
  width: 60vw;

  @media (min-width: 768px) {
    box-shadow: 2px 2px 6px 1px var(--grey100);
    height: 500px;
    justify-content: space-around;
    margin: 0 10px;
    max-width: 350px;
    width: 28vw;

    &:hover {
      outline-color: var(--black50);
      background-color: #d98100;
      transform: scale(1.02);
      transition: all 0.6s ease-in-out;
      -moz-transition: all 0.6s ease-in-out;
      -webkit-transition: all 0.6s ease-in-out;

      img {
        transform: scale(1.2);
        border-radius: 4%;
        transition: all 0.6s ease-in-out;
        -moz-transition: all 0.6s ease-in-out;
        -webkit-transition: all 0.6s ease-in-out;
      }

      p {
        font-weight: 400;
      }
    }
  }

  @media (min-width: 1024px) {
    height: 420px;
  }
`;

export const Subtitle = styled.h2`
  color: var(--caramel50);
  font-family: var(--title-font);
  font-size: 1.25rem;
  letter-spacing: 1px;
  margin: 40px 0 20px;
  text-align: center;
  text-shadow: 1px 1px var(--grey70);

  @media (min-width: 768px) {
    color: var(--black50);
    font-size: 1.75rem;
    font-weight: 100;
    margin: 0;
    text-shadow: 1px 1px var(--grey20);
  }
`;

export const Imagem = styled.img`
  border-radius: 50%;
  height: 7rem;
  width: 7rem;

  @media (min-width: 768px) {
    height: 10rem;
    width: 10rem;
  }
`;

export const Text = styled.p`
  align-items: center;
  border-radius: 10%;
  color: var(--white);
  display: flex;
  font-size: 15px;
  font-weight: 300;
  justify-content: center;
  line-height: normal;
  padding: 20px;
  max-width: 500px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 17px;
`;
