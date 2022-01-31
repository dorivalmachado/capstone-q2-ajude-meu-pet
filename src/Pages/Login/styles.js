import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ad6d53;
`;

export const FormContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    text-decoration: none;
    color: white;
  }

  p {
    color: white;
  }

  h1 {
    margin-bottom: 20px;
    padding: 0;
    text-align: center;
    color: white;
  }
  form {
    height: 50%;
    width: 90%;
    max-width: 500px;
    /* border: 1px solid chartreuse; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    padding: 14px;
  }
`;
