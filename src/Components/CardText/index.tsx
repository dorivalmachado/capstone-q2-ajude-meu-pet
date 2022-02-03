import { CardTextContainer, CardTextMobileTitle, Main } from "./styles";

interface CardTextProps {
  alternate: string;
  children: any;
  title: string;
}

const CardText = ({ alternate, children, title = "" }: CardTextProps) => {
  return (
    <CardTextContainer alternate={alternate}>
      <Main alternate={alternate}>
        <CardTextMobileTitle alternate={alternate}>{title}</CardTextMobileTitle>
        {children}
      </Main>
    </CardTextContainer>
  );
};

export default CardText;
