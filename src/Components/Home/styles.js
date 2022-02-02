import styled from "styled-components";

export const MainContainer = styled.div`
  @media (min-width: 768px) {
    height: 720px;
    border-bottom: 1px dashed var(--black50);
  }
`;

export const Container = styled.div`
  align-items: center;
  background: var(--white);
  border-radius: 20px;
  border: 2px solid var(--grey60);
  box-shadow: 0 0 5px 0px var(--grey80);
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-block: 30px;
  padding: 10px;
  width: 90%;

  .imageMobile {
    height: 150px;
    width: auto;
  }

  @media (min-width: 768px) {
    height: 80vh;
  }
`;

export const Text = styled.div`
  width: 80vw;
`;

export const Subtitle = styled.h2`
  color: var(--caramel50);
  font-family: var(--title-font);
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-align: center;
  text-shadow: 1px 1px var(--grey70);
`;

export const Paragraph = styled.p`
  color: var(--black50);
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  text-align: center;
`;

export const Imagem = styled.img`
  border-radius: 10px;
  box-shadow: 0px 0px 9px 1px var(--grey80);
  height: 60vw;
  max-height: 540px;
  max-width: 740px;
  object-fit: cover;
  width: 80vh;
`;

export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Assign = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  p {
    color: var(--black50);
    margin-top: 25px;
    font-size: 18px;
  }

  a {
    color: var(--yellow80);
    font-weight: 700;
  }

  a:hover {
    color: var(--yellow50);
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const CarouselContainer = styled.div`
  svg {
    color: var(--caramel25);
  }
`;
