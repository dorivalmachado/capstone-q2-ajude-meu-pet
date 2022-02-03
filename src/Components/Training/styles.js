import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: var(--white);
  border-radius: 20px;
  border: 2px solid var(--grey60);
  box-shadow: 0 0 5px 0px var(--grey80);
  display: flex;
  flex-direction: column;
  height: 780px;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-block: 30px;
  padding: 20px;
  width: 90%;

  @media (min-width: 530px) {
    height: 500px;
  }

  @media (min-width: 768px) {
    border: 2px solid transparent;
    border-bottom: 1px dashed var(--black50);
    border-radius: 0;
    box-shadow: none;
    height: 100%;
    margin-top: 50px;
    width: 100%;
  }
`;

export const Text = styled.div`
  .contentContainer {
    display: flex;
    flex-direction: column;
  }

  img {
    align-self: center;
    margin-bottom: 20px;
    width: 110px;
  }

  @media (min-width: 530px) {
    .contentContainer {
      flex-direction: row;
    }
  }

  @media (min-width: 768px) {
    align-items: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 600px;
    height: fit-content;
    justify-content: space-around;
    width: 80%;

    img {
      display: none;
    }
  }
`;

export const Subtitle = styled.h2`
  color: var(--caramel50);
  font-family: var(--title-font);
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-align: center;
  text-shadow: 1px 1px var(--grey70);

  @media (min-width: 768px) {
    color: var(--black50);
    font-size: 1.75rem;
    font-weight: 100;
    margin-bottom: 50px;
    text-shadow: 1px 1px var(--grey20);
  }
`;

export const Paragraph = styled.p`
  align-self: center;
  color: var(--black50);
  font-size: 15px;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
    text-align: justify;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Images = styled.div`
  align-items: stretch;
  background: var(--yellow80);
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
  width: 100%;
  margin-top: 30px;
  width: fit-content;

  div {
    background-color: var(--yellow80);
    background-repeat: no-repeat;
    background-size: contain;
    height: 12vw;
    max-height: 183px;
    max-width: 230px;
    width: 15vw;
  }

  div:nth-child(1) {
    clip-path: polygon(50px 0, 700px 0, 700px 100%, 0 100%);
  }

  div:nth-child(6) {
    clip-path: polygon(0px 0px, 211px 0, 0 810px, 0 0);
  }
`;
