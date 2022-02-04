import styled from "styled-components";
import { DialogContent } from "@mui/material";

export const StyledDialogContent = styled(DialogContent)`
  align-items: center;
  display: flex;
  flex-direction: column;

  .closeButton {
    align-self: end;
    background: transparent;
    cursor: pointer;
    padding-bottom: 3px;

    svg {
      color: var(--grey70);
      font-size: 25px;
    }

    svg:hover {
      color: var(--grey80);
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: all ease 0.5s;

  h2 {
    color: var(--black50);
    font-family: var(--title-font);
    letter-spacing: 1px;
    font-size: 1.1rem;
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const Form = styled.form`
  padding: 7px;
  height: 100%;
  overflow: scroll;
  position: relative;

  h3 {
    margin-bottom: 8px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .buttonBox {
    justify-content: center;
    margin-top: -20px;
  }
  
  .buttonsBox{
    justify-content: space-around;
    margin-top: -20px;
  }

  @media (min-width: 500px) {
    div {
      justify-content: start;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: #d32f2f;
  font-size: 12px;
  margin: 0 14px 15px;
`;
