import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--grey40);
  box-shadow: 0 8px 6px -6px var(--grey40);
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
    color: var(--black50);
    font-family: var(--title-font);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  button {
    background-color: transparent;
    color: var(--black50);
    cursor: pointer;
    font-size: 25px;
  }

  a:nth-child(6) {
    color: var(--yellow50);
  }

  a svg {
    vertical-align: middle;
  }

  a:nth-child(6):hover {
    color: var(--orange);
  }

  a:after {
    display: block;
    content: "";
    border-bottom: solid 2px var(--yellow50);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  a:nth-child(6):after {
    border-color: var(--black50);
    padding: 1px;
  }

  a:hover:after {
    transform: scaleX(1);
  }
`;

interface DrawerContentProps {
  isLogged: boolean;
}

export const DrawerContent = styled.div<DrawerContentProps>`
  height: ${(props: boolean) => (props ? "150px" : "100px")};
  margin-left: 20px;

  ul {
    height: 100%;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  li {
    align-items: center;
    display: inline-flex;
  }

  a,
  li {
    color: var(--black50);
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.5px;
    vertical-align: super;
  }

  a:hover,
  li:hover {
    color: var(--orange50);
  }

  svg {
    font-size: 20px;
    margin-right: 10px;
    color: var(--yellow80);
  }
`;

export const Title = styled.h1`
  align-self: center;
  color: var(--caramel25);
  font-family: var(--title-font);
  font-size: 24px;
  margin-top: 10px;
  padding-left: 0px;
  text-align: center;
  text-shadow: 1px 1px var(--caramel100);
`;

export const Imagem = styled.img`
  margin-left: 5vw;
  width: 32px;

  @media (min-width: 768px) {
    margin-left: 2vw;
  }
`;



