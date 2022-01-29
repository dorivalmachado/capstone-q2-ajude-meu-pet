import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;

  input:placeholder-shown {
    font-style: italic;
    font-family: inherit;
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
