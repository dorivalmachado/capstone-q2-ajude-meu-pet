import styled from "styled-components";
import Image from "../../Assets/Img/girlLaptopCat.gif";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 25px;

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

  @media (min-width: 768px) {
    background: url(${Image}) center no-repeat;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-width: 275px;
  transition: all ease 0.5s;

  @media (min-width: 768px) {
    margin-left: 125px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: var(--orange);
  }
`;

export const Subtitle = styled.h2`
  color: var(--black50);
  font-family: var(--title-font);
  letter-spacing: 1px;
  font-size: 1.75rem;
  margin-bottom: 30px;
`;
