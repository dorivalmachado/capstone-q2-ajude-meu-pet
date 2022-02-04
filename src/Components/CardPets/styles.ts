import styled from "styled-components";

export const Container = styled.div`
  background: var(--blue150);
  border-radius: 20px;
  border: 2px dashed var(--black50);
  box-shadow: 1px 2px 6px var(--grey70);
  color: var(--black50);
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 20px;
  width: 250px;

  .iconBox {
    align-self: flex-end;
    color: var(--grey60);
    cursor: pointer;

    svg {
      font-size: 20px;
    }
  }

  .iconBox:hover {
    color: var(--grey90);
  }

  &:nth-child(1n) {
    background-color: var(--blue150);
  }

  &:nth-child(2n) {
    background-color: var(--cream);

    svg {
      color: var(--caramel300);
    }
  }

  &:nth-child(3n) {
    background: var(--orange);

    .iconBox {
      svg {
        color: var(--grey60);
      }
    }
  }

  &:nth-child(4n) {
    background: var(--caramel25);
    color: var(--white);

    svg {
      color: var(--white);
    }

    .iconBox {
      svg {
        color: var(--cream);
      }
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  justify-content: space-between;

  .firstBox {
    display: flex;
    flex-direction: row;
  }

  .imageBox {
    align-items: center;
    background: var(--white);
    border-radius: 50%;
    display: flex;
    height: 70px;
    justify-content: center;
    width: 130px;
  }

  img {
    width: 50px;
    height: 50px;
  }

  .secondBox {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 15px;
    width: 100%;

    p {
      text-transform: capitalize;
    }
  }

  svg {
    margin-left: 2px;
  }
`;
