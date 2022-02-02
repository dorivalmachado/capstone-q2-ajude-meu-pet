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
      background-color: var(--blue50);
    }

    div:nth-child(3n + 2) > .inner {
      background-color: #fff5db;
    }

    div:nth-child(3n + 3) > .inner {
      background-color: var(--caramel25);
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
  font-size: 24px;
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotateY(180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-bottom: 10px;
    font-size: 18px;
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
