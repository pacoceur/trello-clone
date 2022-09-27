import React from "react";
import Card from "./components/Card";
import Heading from "./components/Heading";
import List from "./components/List";
import Navbar from "./components/Navbar";
import styled from "styled-components";

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.brand.primary};
  padding: ${({theme}) => theme.spacing(2.5)} ${({theme}) => theme.spacing(4)};
  height: 100vh;
`;

function App() {
  return (
    <>
      <Navbar />
      <Body>
        <Heading />
        <List />
        {/* <Card /> */}
      </Body>
    </>
  );
}

export default App;
