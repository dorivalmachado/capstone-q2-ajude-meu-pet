import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  border-top: 8px solid var(--caramel100);
  color: var(--black50);
  display: flex;
  flex-flow: row nowrap;
  height: 10vh;
  justify-content: space-evenly;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 30px;

  .logoBox {
    display: none;
  }

  .linkBox {
    display: flex;
    flex-direction: column;
    line-height: 22px;
    width: 70px;
  }

  .linkBox a {
    color: #484c4efa;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
  }

  .linkBox a {
    color: var(--black50);
  }

  .linkBox a:hover {
    color: var(--yellow80);
  }

  img,
  h2 {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 270px;

    .logoBox {
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 160px;
    }

    img,
    h2 {
      display: flex;
    }

    img {
      align-self: center;
      width: 40px;
    }

    h2 {
      align-self: center;
      color: var(--caramel25);
      font-family: var(--title-font);
      font-size: 14px;
      margin-top: 10px;
      padding-left: 0px;
      text-shadow: 1px 1px var(--caramel100);
    }
  }
`;

export const RightBox = styled.div`
  color: grey;
  font-size: 10px;
  line-height: 16px;
  margin: 0 30px;
  text-align: center;

  p {
    width: 100px;
  }
`;
