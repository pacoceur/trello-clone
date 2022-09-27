import { FC, useState } from "react";
import { ButtonWrapper, Container, Title } from "./styled";
import { faLock, faLockOpen, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button";

interface HeadingProps {}

const Heading: FC<HeadingProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPrivate, setIsPrivate] = useState(true);

  return (
    <Container>
      <Title>Tablero</Title>
      <ButtonWrapper>
        <Button icon={isFavorite ? faStarSolid : faStarRegular} onClick={() => setIsFavorite(!isFavorite)} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          label={isPrivate ? "Private" : "Public"}
          icon={isPrivate ? faLock : faLockOpen}
          onClick={() => setIsPrivate(!isPrivate)}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default Heading;
