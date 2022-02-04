import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  width: 100%;
  overflow: auto;

  > div {
    display: flex;
    width: 700px;
    justify-content: space-between;

    div:nth-child(3n + 1) > .inner {
      border: 2px dashed var(--white);
      background-color: var(--blue150);
    }

    div:nth-child(3n + 2) > .inner {
      border: 2px dashed var(--white);
      background-color: var(--caramel25);
    }

    div:nth-child(3n + 3) > .inner {
      border: 2px dashed var(--white);
      background-color: var(--orange);
    }
  }

  @media screen and (min-width: 900px) {
    > div {
      width: 100%;
      justify-content: space-around;
    }
  }
`;

export const Card = styled.div`
  background-color: transparent;
  width: 224px;
  height: 272px;
  border-radius: 10px;
  perspective: 1000px;
  overflow: hidden;

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

  h2 {
    color: var(--white);
    font-family: var(--title-font);
    font-size: 22px;
    font-weight: lighter;
    text-shadow: 1px 1px var(--black50);
  }
`;

export const CardBack = styled.div`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 18px;
  position: absolute;
  transform: rotateY(180deg);
  width: 100%;
  
  .cardText {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    line-height: normal;
    justify-content: center;
  }

  p {
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    text-shadow: 0.5px 0.5px var(--black100);
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonStyled = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  background-color: var(--blue);
  cursor: pointer;
  border: 1px solid transparent;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 600;

  :hover {
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
    transition: 0.3s transform ease-out;
    background: rgba(116, 168, 189, 0.7);
  }

  :active {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
    transition: 0.3s transform ease-out;
    background: #7eafc2;
  }
`;

export const ButtonYellow = styled(ButtonStyled)`
  background-color: var(--yellow50);

  :hover {
    background: #ffa51c;
  }

  :active {
    background: #ff9b02;
  }
`;
