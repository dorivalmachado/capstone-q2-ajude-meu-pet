import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: var(--caramel60);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0;
  width: 100%;

  @media (min-width: 768px) {
    background-color: var(--white);
    border-bottom: 1px dashed var(--black50);
    display: flex;
    height: 520px;
    justify-content: space-around;
  }
`;

export const Text = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 80vw;

  @media (min-width: 768px) {
    img {
      box-shadow: 0px 8px 5px 0px var(--black50);
      clip-path: polygon(180px 0, 800px 0, 800px 100%, 0 100%);
      height: 380px;
      max-width: 580px;
      object-fit: cover;
      width: 50vw;
      z-index: 2;
      -webkit-clip-path: polygon(180px 0, 800px 0, 800px 100%, 0 100%);
    }

    &:after {
      background-color: var(--yellow80);
      content: "";
      height: 380px;
      position: relative;
      width: 30px;
      z-index: 1;
    }
  }
`;

export const Subtitle = styled.h2`
  color: var(--white);
  font-family: var(--title-font);
  margin-top: 10px;
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  text-align: center;
  text-shadow: 1px 1px var(--black50);

  @media (min-width: 768px) {
    color: var(--black50);
    font-size: 2rem;
    font-weight: 100;
    margin: 0;
    text-shadow: 1px 1px var(--grey20);
  }
`;

export const Paragraph = styled.p`
  align-items: center;
  border-radius: 10%;
  color: var(--white);
  display: flex;
  font-size: 16px;
  font-weight: 300;
  justify-content: center;
  line-height: normal;
  margin: 20px;
  max-width: 500px;
  text-align: center;

  @media (min-width: 768px) {
    color: var(--black50);
    font-size: 20px;
    height: 220px;
    justify-content: center;
    margin: 0;
    width: 40%;
  }
`;
