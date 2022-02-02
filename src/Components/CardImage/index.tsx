import { CardImageContainer } from "./styles.ts";

const CardImage = ({ img, desc }) => {
  return <CardImageContainer src={img} alt={desc} />;
};

export default CardImage;
