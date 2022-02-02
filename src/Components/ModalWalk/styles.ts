import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px 0;

  @media (min-width: 500px) {
    flex-direction: row;

    &:nth-child(2n) {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  position: relative;
  padding-top: 30px;

  svg{
    position: absolute;
    top: 10px;
    right: 20px;
  }
`

export const WalkDescription = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`

export const ContainerBottom = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: left;
  gap: 20px;
  flex-direction: column;

  /* @media (min-width: 800px) {
    .changeToRow {
      display: flex;
      flex-direction: row;
    }
  } */

  .dateTimeContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 400px;
  }

  .dateTimeContainer_box {
    width: 150px;
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

  .petContainer_box {
    width: 100%;
    height: auto;
    outline: 3px solid var(--cream);
    display: flex;
    overflow-x: scroll;
    padding: 10px;
  }

  .obsContainer {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
    width: 350px;
    flex: 1;
  }

  .buttonsContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 10px 0;

    /* @media (min-width: 300px) {
      flex-direction: row;
    } */
  }
`;