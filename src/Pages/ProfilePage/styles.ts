import styled from "styled-components";
import userImg from "../../Assets/Img/womanHome.gif";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 85vh;
  width: 100%;

  .headerMobile {
    display: flex;
    width: 100%;
  }

  .headerDesktop {
    display: none;
  }

  ul {
    backdrop-filter: blur(2.7px);
    background: rgba(255, 255, 255, 0.13);
    border-radius: 16px;
    border: 2px dashed var(--black50);
    box-shadow: 0 0px 20px rgb(0 0 0 / 10%);
    list-style: none;
    max-width: 400px;
    outline: 1px solid rgba(255, 255, 255, 0.05);
    padding: 20px;
    -webkit-backdrop-filter: blur(2.7px);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;

    .headerMobile {
      display: none;
    }

    .headerDesktop {
      display: flex;
      height: 100%;
      max-height: 100vh;
      width: 15%;
    }
  }
`;

export const ContainerContent = styled.div`
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.39);
  color: var(--black50);
  height: 100%;
  margin: 15px;
  padding: 15px;
  width: 90%;

  .profileData {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: space-evenly;
    margin: 0 auto;
    min-height: 340px;
    width: 90%;
  }

  h2 {
    font-family: var(--title-font);
    font-size: 1.75rem;
    letter-spacing: 1.5px;
  }

  li {
    font-size: 18px;
    line-height: 35px;
  }

  @media (min-width: 768px) {
    background: url(${userImg}) no-repeat bottom right;
    background-size: clamp(70vh, 60%, 1410px) auto;
    height: 95vh;

    .profileData {
      align-items: start;
      margin: 50px;
      max-height: 750px;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    li {
      font-size: 20px;
      line-height: 45px;
    }
  }
`;
