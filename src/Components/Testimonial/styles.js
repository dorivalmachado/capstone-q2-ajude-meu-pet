import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 100vh;
    margin-top: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  height: 70vh;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: #945339;
  margin: 10px 0;
  border-radius: 10px;

  @media (min-width: 768px) {
    margin: 0 10px;
    width: 25vw;
    border-bottom: 1px solid black;
  }
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  color: #945339;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    border-bottom: 1px solid black;
    padding: 0 20px;
    margin-bottom: 100px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Imagem = styled.img`
  height: 9rem;
  width: 9rem;
  border-radius: 50%;
`;

export const Text = styled.p`
  color: #fff;
  padding: 0 20px;

  @media (min-width: 1024px) {
    font-size: 22px;
`;
