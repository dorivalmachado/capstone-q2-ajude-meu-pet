import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background-color: #8b5742;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    background: #fff;
  }
`;
export const Text = styled.div`
  width: 80vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Subtitle = styled.h2`
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    color: #8b5742;
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
  color: #fff;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 40vw;
    margin-right: 40px;
    color: #fff;
    background-color: #8b5742;
    height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    border-radius: 10px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;
