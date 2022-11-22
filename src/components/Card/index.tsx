import { FC } from 'react';
import { Container } from './styled';

interface CardProps {
  item: {
    title: string;
  };
}

const Card: FC<CardProps> = ({ item }) => {
  return <Container>{item.title}</Container>;
};

export default Card;
