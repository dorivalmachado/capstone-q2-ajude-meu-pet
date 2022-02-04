import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 20px;

  .closeButton {
    align-self: end;
    background: transparent;
    cursor: pointer;

    svg {
      color: var(--grey70);
      font-size: 25px;
    }

    svg:hover {
      color: var(--grey80);
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px 0;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const Form = styled.form``;

export const ContainerTaxi = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  max-width: 910px;

  h3 {
    font-size: 17px;
    font-family: var(--title-font);
    font-weight: 400;
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const DepartureAddress = styled.div`
  width: 100%;
  max-width: 535px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const DepartureAddressButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export const DepartureAddressForm = styled.div`
  display: ${(props) => (props.isVisible ? "none" : "block")};
`;

export const ArrivalAddress = styled.div`
  width: 100%;
  max-width: 535px;
`;

export const CepContainer = styled.div`
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

export const CssTextField = styled(TextField)({
  fieldset: {
    borderColor: "#F5F5F5",
  },
  "& input:valid:focus + fieldset": {
    borderColor: "black",
    borderLeftWidth: 2,
  },
});

export const ContainerBottom = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: left;
  gap: 20px;
  flex-direction: column;

  .dateTimeContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 400px;
  }

  .dateTimeContainer_box {
    width: 180px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
  }

  .changeToRow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 900px;
    gap: 20px;
  }

  .petContainer {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    max-width: 350px;
    flex: 1;
  }

  .noPets {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 143px;
    gap: 20px;
    min-width: 180px;

    img {
      width: 150px;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
    }
  }

  .petContainer_box {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 3px dashed var(--cream);
    display: flex;
    overflow-x: scroll;
    padding: 10px;

    a {
      text-decoration: none;
      color: black;
    }
  }

  .obsContainer {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
    width: 350px;
    flex: 1;
  }
`;

export const ErrorMessage = styled.p`
  color: #d32f2f;
  font-size: 12px;
  margin: 0 14px 15px;
`;
