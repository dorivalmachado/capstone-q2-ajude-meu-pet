import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;

  span {
    color: var(--red);
    margin-top: 5px;
    font-size: 14px;
  }

  input:placeholder-shown {
    font-family: inherit;
    font-style: italic;
  }

  input:-webkit-autofill {
    border: 1px solid white;
    box-shadow: 0 0 0px 1000px transparent inset;
    font-family: inherit;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  }
`;
