import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  width: 80vw;
  height: 40vh;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  color: #945339;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;
export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Imagem = styled.img`
  width: 60vw;
  height: 60vh;
`;

export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
export const Assign = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  p {
    color: var(--black50);
    margin-top: 25px;
    font-size: 20px;
  }

  a {
    color: var(--black50);
    font-weight: 700;
  }

  a:hover {
    color: var(--yellow80);
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;