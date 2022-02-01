import styled from "styled-components";

export const Container = styled.aside`
  align-items: center;
  border-right: 2px solid var(--blue);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 150px;

  .content {
    display: flex;
    flex-direction: column;
    height: 90vh;
    justify-content: space-between;
  }

  p {
    font-family: var(--title-font);
    letter-spacing: 1px;
  }

  a {
    align-items: center;
    color: black;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 10px;
    text-decoration: none;
  }

  svg {
    font-size: 25px;
  }

  a:hover,
  svg:hover {
    color: var(--yellow80);
  }

  .menuBottom {
    margin: 0 auto;
  }
`;

export const Menu = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: flex-start;
  margin-top: 5vh;

  .menuTop {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
`;

export const LogoutBox = styled.div`
  height: fit-content;
  width: fit-content;
`;
