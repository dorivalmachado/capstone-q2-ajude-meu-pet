import styled from "styled-components";

export const Container = styled.div`
  .darkBrown {
    background: #6f4635;
    color: white;
    font-size: 18px;
    width: 200px;
  }

  .darkBrown:hover {
    background: rgb(132, 90, 73, 0.87);
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
  }

  .darkBrown:active {
    background: #8b5742;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }

  .lightBrown {
    background: #ad6d53;
    color: white;
    font-size: 22px;
    width: 220px;
  }

  .lightBrown:hover {
    background: #8b5742;
  }

  .lightBrown:active {
    background: #845d4e;
  }

  .blue {
    background: #74a8bd;
    color: white;
    font-size: 18px;
    width: 200px;
  }

  .blue:hover {
    background: rgba(116, 168, 189, 0.7);
  }

  .blue:active {
    background: #7eafc2;
  }

  .yellow {
    background: #ffc04a;
    color: #2c373f;
    font-size: 18px;
    width: 200px;
  }

  .yellow:hover {
    background: #ffa51c;
  }

  .yellow:active {
    background: #ff9b02;
  }
`;

export const ButtonStyle = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-weight: 600;
  height: 50px;
  padding: 10px;

  &:hover {
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
    transition: 0.3s transform ease-out;
  }

  &:active {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
    transition: 0.3s transform ease-out;
  }
`;
