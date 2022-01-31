import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .headerMobile {
    display: inherit;
    width: 100%;
  }

  .headerDesktop {
    display: none;
  }

  @media (min-width: 768px) {
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
  background-color: var(--grey60);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px;
  padding: 20px;
  width: 80%;
  height: 80%;

  .title {
    margin: 20px;
    font-size: 24px;
  }
`;
