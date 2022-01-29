import styled from "styled-components";

export const SideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 2rem; */
`

export const TitleContent = styled.h1`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    font-size: 30px;
    /* display: block; */
    width: 200px;
    /* display: flex;
    justify-content: center; */
    padding: 15px;
    border-bottom: 5px solid var(--caramel75);
    margin-bottom: 8rem;
  }
`

export const ScreenFilled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `

export const LandingContent = styled.div`
  max-width: 1980px;
  width: 100vw;
  height: 100vh;
  margin: auto;

`