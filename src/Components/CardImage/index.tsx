import { CardImageContainer } from "./styles";

const CardImage = ({ img, desc }) => {
  return <CardImageContainer src={img} alt={desc} />;
};

export default CardImage;
