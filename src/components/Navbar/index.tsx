import { FC } from "react";
import { Container } from "./styled";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <Container>
      <h2>Trello</h2>
    </Container>
  );
};

export default Navbar;
