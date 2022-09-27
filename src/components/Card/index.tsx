import { FC } from "react";
import { Container } from "./styled";

interface CardProps {}

const Card: FC<CardProps> = () => {
  return (
    <Container>
      <p>Card</p>
    </Container>
  );
};

export default Card;
