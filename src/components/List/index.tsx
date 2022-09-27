import { FC, ReactNode } from "react";
import { Container } from "./styled";

interface ListProps {
  children: ReactNode;
}

const List: FC<ListProps> = ({ children }) => {
  return (
    <Container>
      <h5>List</h5>
      {children}
    </Container>
  );
};

export default List;
