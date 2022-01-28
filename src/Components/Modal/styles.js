import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px 0;

  @media (min-width: 500px) {
    flex-direction: row;

    &:nth-child(2n) {
      margin-right: 10px;
    }
  }
`;
