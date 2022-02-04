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

export const Content = styled.div`
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

export const Form = styled.form`
`;

export const ContainerTraining = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  max-width: 910px;

  .desktop {
    display: none;
  }

  h3 {
    font-family: var(--title-font);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  h3 + p {
    font-size: 15px;
    font-weight: 400;
    line-height: normal;
    text-align: justify;
   
  }

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }
  }
`;

export const TrainingDescription = styled.div`
  border-radius: 10px;
  border: 3px dashed var(--cream);
  margin-bottom: 20px;
  max-width: 535px;
  padding: 10px;
  width: 100%;

  h3{
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const TrainingType = styled.div`
  margin-right: 15px;
  max-width: 375px;
  width: 100%;
`;

export const TrainingOptions = styled.select`
  border-radius:10px;
  color: var(--black);
  font-size: 15px;
  height: 35px;
  margin-bottom: 5px;
  max-width: 250px;
  width: 100%;
  background-color: var(--white);
  text-align: center;

  :focus {
    outline-color: var(--blue150);
  }

  option {
    background-color: var(--blue150);
    color: var(--white);
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  justify-content: left;
  width: 100%;

  .dateTimeContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 400px;
  }

  .dateTimeContainer_box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    width: 180px;
  }

  .changeToRow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    max-width: 900px;
  }

  .petContainer {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
    margin-top: 10px;
    max-width: 350px;
    width: 100%;
  }

  .noPets {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 143px;
    justify-content: center;
    min-width: 180px;
    width: 100%;

    img {
      width: 150px;
    }
    div {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }

  .petContainer_box {
    border-radius: 8px;
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

    input{
      font-size: 15px;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: #d32f2f;
  font-size: 12px;
  margin: 0 14px 15px;
`;
