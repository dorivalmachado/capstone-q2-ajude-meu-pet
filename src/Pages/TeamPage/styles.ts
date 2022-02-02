import styled from "styled-components";

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-around;
  width: 100%;
`;

export const Title = styled.h1`
  color: var(--caramel25);
  font-size: 24px;
  margin-top: 10px;
  padding-left: 0px;
`;

export const Imagem = styled.img`
  width: 60px;

  @media (min-width: 768px) {
    width: 90px;
  }
`;

export const Refs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff6ed;
  height: 60vh;
  border-radius: 100px;
  margin: 50px 0;

  @media (min-width: 768px) {
    width: 45vw;
    height: 130vh;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dev = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 70vw;

  @media (min-width: 768px) {
    width: 30vw;
  }

  @media (min-width: 1024px) {
    width: 35vw;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const SubText = styled.p`
  font-size: 16px;
  text-align: center;
  margin-left: 15px;

  @media (min-width: 768px) {
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const Gif = styled.img`
  width: 45vw;
`;

export const Photo = styled.img`
  width: 100px;
  border-radius: 50%;

  @media (min-width: 1024px) {
    width: 150px;
  }
`;

export const Card = styled.div`
  background-color: transparent;
  width: 224px;
  height: 20vh;
  border-radius: 10px;
  perspective: 1000px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  :hover .inner {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-size: 24px;
`;

export const CardBack = styled.div`
  width: 100px;
  position: absolute;
  transform: rotateY(180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
