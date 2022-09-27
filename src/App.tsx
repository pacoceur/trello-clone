import React from "react";
import Card from "./components/Card";
import Heading from "./components/Heading";
import List from "./components/List";
import Navbar from "./components/Navbar";
import styled from "styled-components";

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.brand.primary};
  padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(4)};
  height: 100vh;
`;

export const ListWrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <Navbar />
      <Body>
        <Heading />
        <ListWrapper>
          <List>
            <Card />
            <Card />
            <Card />
          </List>
          <List>
            <Card />
            <Card />
            <Card />
          </List>
          <List>
            <Card />
            <Card />
            <Card />
          </List>
        </ListWrapper>
      </Body>
    </>
  );
}

export default App;
