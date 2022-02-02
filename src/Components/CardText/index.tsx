import { CardTextContainer, CardTextMobileTitle, Main } from "./styles";

const CardText = ({ alternate, children, title = "" }) => {
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
