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
    margin-right: 20px;
  }
`;

export const Form = styled.form`
  position: relative;
  padding-top: 30px;

  svg {
    position: absolute;
    top: 10px;
    right: 20px;
  }
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
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
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
  width: 100%;
  max-width: 535px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const TrainingType = styled.div`
  width: 100%;
  max-width: 375px;
  margin-right: 15px;
`;

export const TrainingOptions = styled.select`
  width: 100%;
  max-width: 250px;
  height: 35px;
  font-size: 16px;

  :focus {
    outline-color: var(--blue);
  }

  option {
    background-color: var(--blue);
    color: white;
  }
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
    width: 100%;
    height: auto;
    border: 3px solid var(--cream);
    display: flex;
    overflow-x: scroll;
    padding: 10px;

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
