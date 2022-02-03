import styled from "styled-components";

export const CardTextContainer = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.alternate ? "var(--white)" : "var(--caramel75)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  @media (min-width: 768px) {
    background-color: var(--caramel75);
    border-radius: 10px;
    margin: 1rem;
    width: 45%;
  }
`;

export const Main = styled.div`
  line-height: 1.5;
  font-size: 1.2rem;
  color: ${(props) => (props.alternate ? "var(--caramel75)" : "var(--white)")};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.6vw;
    color: var(--white);
    margin: 1rem;
    border-radius: 10px;
  }
`;

export const CardTextMobileTitle = styled.div`
  color: ${(props) => (props.alternate ? "var(--caramel75)" : "var(--white)")};
  font-size: 30px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CardTextDesktopTitle = styled.div`
  @media (min-width: 768px) {
    color: blue;
  }
`;
