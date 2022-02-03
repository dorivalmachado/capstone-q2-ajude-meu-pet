import styled from "styled-components";

export const CardImageContainer = styled.img`
  border-radius: 200px;
  /* width: 650px; */
  /* height: 560px; */
  display: none;
  margin: 1rem;
  @media (min-width: 768px) {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`