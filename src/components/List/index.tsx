import { FC, ReactNode } from "react";
import { Container, StyledInput, Title } from "./styled";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Card from "../Card";

interface ListProps {
  items: ReactNode[];
  setCards: any;
  submit: any;
}

const List: FC<ListProps> = ({ items, setCards, submit }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    submit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <Container axis="y" values={items} onReorder={setCards}>
      <Title>List</Title>
      <AnimatePresence mode={"popLayout"}>
        {items.map((item: any) => (
          <Card item={item} key={item.id} />
        ))}
      </AnimatePresence>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Add a card..."
          value={input}
          name="text"
          onChange={handleChange}
          ref={inputRef}
          autoComplete="off"
        />
      </form>
    </Container>
  );
};

export default List;
