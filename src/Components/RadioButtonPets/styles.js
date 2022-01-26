import styled from "styled-components";

export const RadioPet = styled.input`
  visibility: hidden;

  &:checked + label {
    border: 2px solid #feb546;
  }

  + label {
    align-items: center;
    background: #fff6ed;
    border-radius: 50px;
    border: 2px solid transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    height: 143px;
    justify-content: space-evenly;
    padding: 10px;
    width: 128px;
  }

  + img {
    width: 71px;
    height: 71px;
  }
`;
