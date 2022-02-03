import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;

  img {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
    justify-content: space-around;
    min-height: 750px;

    img {
      display: flex;
      left: 9vw;
      position: relative;
      width: 42vw;
      z-index: -1;
    }
  }
`;

export const ContentContainer = styled.div`
  align-items: center;
  background-color: var(--caramel50);
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 60vw;
  }
`;

export const FormContainer = styled.div`
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px rgb(0 0 0 / 39%);
  color: var(--black50);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 15px;
  width: 90%;
  min-height: 750px;
  max-width: 470px;

  h1 {
    color: var(--black50);
    font-family: var(--title-font);
    font-size: 32px;
    letter-spacing: 1px;
    padding: 0;
    text-align: center;
  }

  h2 {
    color: var(--black50);
    font-family: var(--title-font);
    font-weight: normal;
  }

  .cDUxdC {
    margin-bottom: 15px;
  }

  .css-ahj2mt-MuiTypography-root {
    font-size: 15px;
  }

  form {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;

    div {
      align-items: center;
    }

    .css-1wc848c-MuiFormHelperText-root.Mui-error {
      text-align: center;
      font-size: 11px;
      line-height: 12px;
    }

    .css-7cjq23-MuiFormControl-root-MuiTextField-root {
      max-width: 350px;
    }

    .radioContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--black50);
    }

    svg {
      color: var(--yellow50);
    }
  }

  p {
    color: var(--black50);
    font-size: 14px;
  }

  a {
    color: var(--yellow80);
    font-weight: 500;
    text-decoration: none;
  }

  a:hover {
    color: var(--yellow50);
  }
`;

