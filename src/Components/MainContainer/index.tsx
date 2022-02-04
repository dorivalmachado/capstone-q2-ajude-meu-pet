import { ReactNode } from "react";
import { Container } from "./styles";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
