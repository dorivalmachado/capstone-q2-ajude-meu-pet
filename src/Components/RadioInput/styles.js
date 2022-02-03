import styled from "styled-components";

export const RadioStyle = styled.input`
  display: none;

  &:checked + label {
    background: var(--orange);
    border: 2px dashed var(--black50);
  }

  + label {
    border: 2px solid transparent;
    background: var(--yellow50);
    border-radius: 4px;
    color: var(--black50);
    cursor: pointer;
    font-size: 14px;
    padding: 10px;
    font-weight: 500;
    display: inline-block;
    width: 110px;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;
