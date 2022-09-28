import { useState } from "react";
import Heading from "./components/Heading";
import List from "./components/List";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Body = styled.div`
  height: 100vh;

  ${({ theme }) => `
    background-color: ${theme.colors.brand.primary};
    padding: ${theme.spacing(2.5)} ${theme.spacing(4)};
  `}
`;

const ListWrapper = styled.div`
  display: flex;
`;

function App() {
  const [items, setItems] = useState([]);

  const addListItem = (item: any) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    const newListListItem: any = [...items, item];
    setItems(newListListItem);
  };

  const removeItem = (id: any) => {
    setItems((previousItems) =>
      [...previousItems].filter((item: any) => item.id !== id)
    );
  };

  return (
    <>
      <Navbar />
      <Body>
        <Heading />
        <ListWrapper>
          <List items={items} setCards={setItems} submit={addListItem} />
        </ListWrapper>
      </Body>
    </>
  );
}

export default App;
