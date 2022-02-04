import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 20px;

  .closeButton {
    align-self: end;
    background: transparent;
    cursor: pointer;

    svg {
      color: var(--grey70);
      font-size: 25px;
    }

    svg:hover {
      color: var(--grey80);
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px 0;

  @media (min-width: 500px) {
    flex-direction: row;
    margin-right: 20px;
  }
`;

export const Form = styled.form``;

export const WalkDescription = styled.h3`
  font-size: 20px;
  font-family: var(--title-font);
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
`;

export const ContainerBottom = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: left;
  gap: 20px;
  flex-direction: column;

  .dateTimeContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 400px;
  }

  .dateTimeContainer_box {
    width: 180px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
  }

  .changeToRow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 900px;
    gap: 20px;
  }

  .petContainer {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    max-width: 350px;
    flex: 1;
  }
  .noPets {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 143px;
    gap: 20px;
    min-width: 180px;

    img {
      width: 150px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
    }
  }

  .petContainer_box {
    border-radius: 10px;
    border: 3px dashed var(--cream);
    display: flex;
    height: auto;
    overflow-x: scroll;
    padding: 10px;
    width: 100%;

    a {
      text-decoration: none;
      color: black;
    }
  }

  .obsContainer {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
    width: 350px;
    flex: 1;
  }
`;

export const ErrorMessage = styled.p`
  color: #d32f2f;
  font-size: 12px;
  margin: 0 14px 15px;
`;
