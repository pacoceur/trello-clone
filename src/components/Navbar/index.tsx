import { FC } from "react";
import Button from "../Button";
import { Container, Logo, SideItem } from "./styled";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <Container>
      <SideItem>
        <Button
          label="Boards"
          icon={faBorderAll}
          onClick={() => console.log("Boards")}
        />
      </SideItem>
      <Logo>
        <FontAwesomeIcon icon={faBorderAll} /> Trello
      </Logo>
      <SideItem />
    </Container>
  );
};

export default Navbar;
