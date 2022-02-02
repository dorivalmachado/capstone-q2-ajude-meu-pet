import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  padding-top: 30px;
  height: 100%;
  overflow: scroll;

  h2, h3{
    margin-bottom: 10px;
  }
  
  div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }

  svg{
    position: absolute;
    top: 10px;
    right: 20px;
  }

  
`
export const ErrorMessage = styled.p`
  color: #d32f2f;
  font-size: 12px;
  margin: 0 14px 15px;
`
