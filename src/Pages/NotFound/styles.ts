import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 85vh;
  justify-content: center;
  margin: 30px;

  img {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: space-around;

    img {
      display: flex;
      height: auto;
      max-width: 550px;
      width: 40vw;
    }
  }
`;
export const ContainerContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  height: 100%;
  justify-content: center;
  max-width: 260px;

  h2 {
    font-size: 38px;
  }

  p {
    font-size: 16px;
    line-height: 22px;
  }

  span {
    font-weight: bold;
  }

  #notFound__button {
    max-width: 260px;
    width: 70vw;
  }

  @media (min-width: 768px) {
    max-width: 330px;

    h2 {
      font-size: 58px;
    }

    p {
      font-size: 18px;
    }

    #notFound__button {
      max-width: 330px;
    }
  }
`;
