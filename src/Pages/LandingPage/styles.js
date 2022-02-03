import styled from "styled-components";

export const Container = styled.div`
  .toTopBtn {
    border: none;
    color: transparent;
    height: 0;
    margin: 0;
    padding: 0;
    width: 0;
  }

  .toTopBtn svg {
    background-color: var(--yellow50);
    border-radius: 100%;
    bottom: 50px;
    color: var(--black50);
    cursor: pointer;
    font-size: 25px;
    position: fixed;
    right: 50px;
    z-index: 5;
  }

  .toTopBtn svg:hover {
    animation: moving 2s linear infinite;
  }

  @media (min-width: 768px) {
    .toTopBtn svg {
      font-size: 40px;
    }
  }

  @keyframes moving {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(7px);
    }
  }
`;
