import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 140vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;
export const Text = styled.div`
  width: 80vw;
  height: 100vh;

  @media (min-width: 768px) {
    height: 115vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 60px;
    background-color: #8b5742;
    border-radius: 10px;
    padding: 0 30px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  color: #8b5742;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 100px;
    padding: 0 20px;
    border-bottom: 1px solid black;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    color: #fff;
    padding: 0 30px;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
`;
