import styled from "styled-components";

export const RadioStyle = styled.input`
  display: none;
  

  &:checked + label {
    background: #ff9b02;
    border: 2px solid #2c373f;
  }

  + label {
    background: #feb546;
    border-radius: 4px;
    color: #2c373f;
    cursor: pointer;
    font-size: 20px;
    padding: 10px;
    display: inline-block;
    width: 110px;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;
