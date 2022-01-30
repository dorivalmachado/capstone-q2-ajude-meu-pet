import styled, { keyframes } from "styled-components";
import dog from "../../Assets/Img/flirting-dog.svg";

export const Container = styled.div`
  background-color: #ad6d53;
  height: 100vh;
  width: 100vw;
`;

export const FormContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 20px;
    padding: 0;
    text-align: center;
    color: white;
  }

  form {
    height: 70%;
    width: 90%;
    max-width: 500px;
    /* border: 1px solid chartreuse; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    padding: 14px;

    .radioContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    h2 {
      color: white;
    }
  }
`;

export const Bar = styled.div`
  width: ${(props) => `${props.width - 500}px`};
  /* width: 100px; */
  height: 100vh;
  background-color: white;
  background: url(${dog}) no-repeat center;
`;

// const logoFromRight = keyframes`
//   from {
//     transform: translate(100%, -50%);
//     opacity: 0;

//   }
//   to {
//     transform: translate(-50%,-50%);
//     opacity: 1;
//   }`;

// export const LoginLogo = styled.div`
//   @media (min-width: 1000px) {
//     width: 55%;
//     height: 55%;
//     background: url(${dog}) no-repeat center;
//     /* background-size: 1000px; */
//     background-size: contain;
//     animation: ${logoFromRight} 1s;
//     position: absolute;
//     z-index: 1;
//     right: 0;
//     transform: translate(-50%, -50%);
//     top: 50%;
//     left: 70%;
//   }
// `;

export const Teste = styled.div`
  display: flex;
`;
