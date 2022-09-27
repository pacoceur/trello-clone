import { FC } from "react";
import { Container } from "./styled";

interface HeadingProps {}

const Heading: FC<HeadingProps> = () => {
  return (
    <Container>
      <h4>Tablero</h4>
    </Container>
  );
};

export default Heading;
