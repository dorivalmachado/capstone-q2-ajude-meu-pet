import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 85vh;
  width: 100%;

  .headerMobile {
    display: flex;
    width: 100%;
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
      height: 100%;
      max-height: 100vh;
      width: 15%;
    }
  }
`;

export const ContainerContent = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.39);
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 15px;
  padding: 15px;
  width: 90%;

  .titleBox {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 20px;

    h3 {
      border-radius: 4px;
      border: 2px dashed #c9c9c9;
      color: var(--black50);
      font-size: 24px;
      font-weight: normal;
      padding: 10px;
    }

    button {
      background-color: var(--yellow60);
      border-radius: 50%;
      border: none;
      cursor: pointer;
      height: 40px;
      margin-left: 10px;
      width: 40px;

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
    height: 95vh;
    width: 80%;
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

export const NoCards = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  font-size: 1.25rem;
  height: 260px;
  justify-content: space-around;
  margin-top: 40px;
  text-align: center;

  img {
    max-width: 350px;
    width: 50vw;
  }

  @media (min-width: 768px) {
    height: 500px;
  }
`;
