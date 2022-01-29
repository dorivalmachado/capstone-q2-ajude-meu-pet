import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  /* border: 1px solid chartreuse; */
  overflow-x: scroll;
  max-height: 300px;
  padding: 20px;
  display: flex;
  gap: 20px;
`;

export const Card = styled.div`
  width: 200px;
  height: 170px;
  border-radius: 5px;
  border: 1px solid var(--grey60);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  /* padding: 10px; */
  transition: all ease-in-out 0.2s;

  &:hover {
    border: 1px dashed var(--blue);
    scale: 1.1;
    transition: all ease-in-out 0.2s;

    hr {
      border: 1px dashed var(--blue);
      transition: all ease-in-out 0.2s;
    }
  }

  hr {
    width: 100%;
    margin: 0;
    border: 1px solid var(--grey60);
    transition: all ease-in-out 0.2s;
  }

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 5px;
    margin-left: 15px;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    padding: 5px;

    p {
      font-size: 14px;
    }

    .line {
      padding: 5px;
      /* margin: 5px; */
      display: flex;
      gap: 10px;
      align-items: center;

      .iconContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50px;
        span {
          margin-top: 5px;
          font-size: 8px;
        }
      }
    }
  }
`;
