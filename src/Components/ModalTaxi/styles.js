import { TextField } from "@mui/material";
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

export const Form = styled.form`
  position: relative;
  padding-top: 30px;

  svg{
    position: absolute;
    top: 10px;
    right: 20px;
  }
`

export const ContainerTaxi = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    max-width: 910px;

    h3{
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 15px;
    }

    @media screen and (min-width: 768px){
        flex-direction: row;
    }
`

export const DepartureAddress = styled.div`
  width: 100%;
  max-width: 375px;
  margin-bottom: 20px;
  
  @media screen and (min-width: 768px){
    margin-bottom: 0;
  }
`

export const DepartureAddressButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: ${props => props.isVisible ? 'block' : 'none'};
`

export const DepartureAddressForm = styled.div`
  display: ${props => props.isVisible ? 'none' : 'block'};
`

export const ArrivalAddress = styled.div`
  width: 100%;
  max-width: 535px;
  
`

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

  /* @media (min-width: 800px) {
    .changeToRow {
      display: flex;
      flex-direction: row;
    }
  } */

  .dateTimeContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 400px;
  }

  .dateTimeContainer_box {
    width: 150px;
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

  .petContainer_box {
    width: 100%;
    height: auto;
    outline: 3px solid var(--cream);
    display: flex;
    overflow-x: scroll;
    padding: 10px;
  }

  .obsContainer {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
    width: 350px;
    flex: 1;
  }

  .buttonsContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 10px 0;

    /* @media (min-width: 300px) {
      flex-direction: row;
    } */
  }
`;