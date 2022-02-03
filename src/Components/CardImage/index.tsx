import { CardImageContainer } from "./styles";

interface CardImageProps {
  img: string;
  desc: string;
}

const CardImage = ({ img, desc }: CardImageProps) => {
  return <CardImageContainer src={img} alt={desc} />;
};

export default CardImage;
