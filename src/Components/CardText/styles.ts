import styled from "styled-components";

export const CardTextContainer = styled.div`
  background-color: ${(props: string) => (props ? "#FFF" : "var(--caramel75)")};
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  /* line-height: 1.5;
  font-size: 1.1rem;
  color: #FFF;
  text-align: center;
  vertical-align: center; */

  @media (min-width: 768px) {
    /* padding: 3rem 1rem; */
    width: 45%;
    margin: 1rem;
    border-radius: 10px;
    background-color: var(--caramel75);
    /* font-weight: 600; */

    /* margin: 1rem;
    border-radius: 10px; */
  }
`;

export const Main = styled.div`
  line-height: 1.5;
  font-size: 1.2rem;
  color: ${(props: string) => (props ? "var(--caramel75)" : "#FFF")};
  text-align: center;
  @media (min-width: 768px) {
    /* padding: 3rem 1rem; */
    /* width: 45%; */
    /* font-weight: 600; */
    /* font-size: 1.3rem; */
    font-size: 2.6vw;
    color: #fff;
    /* line-height: 2; */
    margin: 1rem;
    border-radius: 10px;
  }
`;

export const CardTextMobileTitle = styled.div`
  color: ${(props: string) => (props ? "var(--caramel75)" : "#FFF")};
  font-size: 30px;
  /* display: block; */
  /* width: 200px; */
  /* display: flex;
  justify-content: center; */
  /* padding: 15px; */
  /* border-bottom: 5px solid var(--caramel75); */
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const CardTextDesktopTitle = styled.div`
  /* display: none; */
  @media (min-width: 768px) {
    color: blue;
  }
`;
