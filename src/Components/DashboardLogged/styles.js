import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--cream);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .headerMobile {
    display: inherit;
  }

  .headerDesktop {
    display: none;
  }

  @media (min-width: 900px) {
    & {
      flex-direction: row;
    }

    .headerDesktop {
      display: inherit;
    }

    .headerMobile {
      display: none;
    }
  }
`;

export const Box = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin: 20px;

  .title {
    margin: 20px;
    font-size: 24px;
  }
`;
