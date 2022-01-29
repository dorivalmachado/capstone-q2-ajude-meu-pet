import styled from "styled-components";
import logo from "../../Assets/Img/logo.svg";

export const Container = styled.aside`
  width: 150px;
  height: 100vh;
  border-right: 2px solid var(--blue);
  a {
    text-decoration: none;
    color: black;
  }
`;

export const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Logo = styled.div`
  background: url(${logo}) no-repeat center;
  height: 100px;
  object-fit: contain;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  height: calc(100vh - 110px);
  justify-content: space-between;

  .menuTop {
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin-top: 100px;
  }

  .menuBottom {
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* margin-top:100px; */
  }
`;
