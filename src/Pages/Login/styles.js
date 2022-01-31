import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: var(--caramel25);
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const ContentContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  width: 85vw;
`;

export const FormContainer = styled.div`
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 0px 6px 4px var(--caramel100);
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-evenly;
  max-height: 500px;

  a {
    color: var(--yellow80);
    font-weight: 500;
    text-decoration: none;
  }

  a:hover{
    color: var(--yellow50);
    font-weight: 500;
  }

  p {
    color: var(--black50);
    font-size: 14px;
    line-height: 20px;
    padding: 0 12px;
    text-align: center;
  }

  h1 {
    color: var(--black50);
    font-family: var(--title-font);
    font-size: 2rem;
    letter-spacing: 3px;
    margin-bottom: 20px;
    padding: 0;
    text-align: center;
  }

  form {
    align-items: center;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 50%;
    justify-content: center;
    margin: 0 auto;
    max-width: 500px;
    padding: 14px;
    width: 90%;
  }
`;
