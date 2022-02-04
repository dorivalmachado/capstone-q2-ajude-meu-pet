import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;

  .darkBrown {
    background: var(--caramel100);
    color: white;
    font-size: 16px;
    width: 200px;
  }

  .darkBrown:hover {
    background: var(--caramel);
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
  }

  .darkBrown:active {
    background: var(--caramel60);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }

  .lightBrown {
    background: var(--caramel25);
    color: white;
    font-size: 18px;
    width: 220px;
  }

  .lightBrown:hover {
    background: var(--caramel60);
  }

  .lightBrown:active {
    background: var(--caramel75);
  }

  .blue {
    background: var(--blue);
    color: white;
    font-size: 16px;
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
    color: var(--black50);
    font-size: 16px;
    width: 200px;
  }

  .yellow:hover {
    background: #ffa51c;
  }

  .yellow:active {
    background: var(--yellow80);
  }

  .red {
    background: var(--red);
    color: var(--white);
    font-size: 16px;
  }

  .red:hover {
    background: #ff00009c;
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
