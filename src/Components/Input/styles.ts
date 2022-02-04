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
    font-size: 12px;
  }

  .MuiOutlinedInput-root {
    border-radius: 20px;
  }

  .css-1laqsz7-MuiInputAdornment-root {
    cursor: pointer;
  }

  input,
  placeholder,
  placeholder-shown,
  label {
    font-size: 14px;
  }

  input:placeholder-shown {
    font-family: inherit;
    font-style: italic;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px transparent inset;
    font-size: 14px;
    font-family: var(--main-font);
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  }
`;
