import React, { ButtonHTMLAttributes } from "react";
import { Container, ButtonStyle } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor: string;
}

const Button = ({
  type = "button",
  onClick,
  children,
  buttonColor,
  ...rest
}: ButtonProps) => {
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
