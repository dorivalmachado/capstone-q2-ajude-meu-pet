import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-around;
  width: 100%;

  .logoBox {
    display: flex;
    flex-direction: row;
    width: fit-content;
    justify-content: space-around;
  }

  a {
    font-weight: 500;
    color: var(--black-50);
  }

  a:hover {
    color: var(--yellow80);
    font-weight: 500;
  }

  button {
    background-color: transparent;
    color: var(--black50);
    cursor: pointer;
    font-size: 25px;
  }
`;

interface DrawerContentProps {
  isLogged: boolean;
}

export const DrawerContent = styled.div<DrawerContentProps>`
  height: ${(props: boolean) => (props ? "150px" : "100px")};
  margin-left: 20px;

  a,
  li {
    color: var(--black50);
    font-weight: 500;
    cursor: pointer;
  }

  a:hover,
  li:hover {
    color: var(--blue);
  }

  ul {
    height: 100%;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  svg {
    margin-right: 8px;
    color: var(--yellow80);
  }
`;

export const Title = styled.h1`
  color: var(--caramel25);
  font-size: 24px;
  margin-top: 10px;
  padding-left: 0px;
`;

export const Imagem = styled.img`
  width: 45px;
`;
