import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 85vh;
  width: 100%;

  .message{
    font-style: italic;
    color: var(--black50);
  }

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

    .headerDesktop {
      display: flex;
      height: 100%;
      max-height: 100vh;
      width: 15%;
    }

    .headerMobile {
      display: none;
    }
  }
`;

export const Box = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.39);
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 15px;
  padding: 15px;
  width: 90%;

  .title {
    h2 {
      font-family: var(--title-font);
      font-size: 18px;
      font-weight: normal;
      margin: 15px 0 0px 5px;
    }
  }

  @media (min-width: 768px) {
    height: 95vh;
    width: 80%;
  }
`;
