import styled from "styled-components";

export const Container = styled.div`
  background: #4682b4;
  border-radius: 8px;
  box-shadow: 1px 2px 6px #b5b5b5;
  color: white;
  display: flex;
  flex-direction: column;
  height: 250px;
  padding: 20px;
  width: 220px;

  .trashIconBox {
    cursor: pointer;
    align-self: flex-end;
  }

  .trashIconBox:hover{
    color: #b5b5b5;
  }

  &:nth-child(1n) {
    background-color: #74A8BD;
  }
  &:nth-child(2n) {
    background-color: #4682B4;
  }
  &:nth-child(3n) {
    background-color: #AD6D53;
  }
  &:nth-child(4n) {
    background-color: #cd920d;
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

  .secondBox {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 15px;
    width: 100%;
  }

  img {
    width: 70px;
    height: 70px;
  }

  svg {
    margin-left: 2px;
  }
`;
