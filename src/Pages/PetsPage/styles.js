import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85vh;

  .headerMobile {
    display: flex;
    height: 10vh;
  }

  .headerDesktop {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;

    .headerMobile {
      display: none;
    }

    .headerDesktop {
      display: flex;
      width: 15%;
      height: 100%;
      max-height: 100vh;
    }
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  width: 90%;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.39);
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
  flex-direction: column;
  height: 100%;

  .titleBox {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 20px;

    h3 {
      color: var(--black50);
      border: 2px dashed #c9c9c9;
      padding: 10px;
      border-radius: 4px;
      font-size: 24px;
      font-weight: normal;
    }

    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--yellow60);
      margin-left: 10px;
      border: none;
      cursor: pointer;

      svg {
        color: white;
        font-size: 16px;
      }
    }

    button:hover {
      background: var(--yellow50);
    }
  }

  @media (min-width: 768px) {
    width: 80%;
    height: 95vh;
  }
`;

export const PetsBox = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(220px, auto));
  justify-content: space-evenly;
  justify-items: center;
  overflow: scroll;
  scroll-behavior: smooth;

  @media (min-width: 768px) {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    justify-content: space-evenly;
    justify-items: center;
    overflow: scroll;
    scroll-behavior: smooth;
  }
`;
