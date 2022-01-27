import React from "react";
import { Container, ButtonStyle } from "./styles";

const Button = ({
  type = "button",
  onClick,
  children,
  buttonColor,
  ...rest
}) => {
  return (
    <Container>
      <ButtonStyle
        type={type}
        onClick={onClick}
        className={buttonColor}
        {...rest}
      >
        {children}
      </ButtonStyle>
    </Container>
  );
};

export default Button;
