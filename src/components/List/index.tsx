import { FC, ReactNode } from 'react';
import { Container, StyledInput, Title } from './styled';
import { useState, useEffect, useRef } from 'react';
import Card from '../Card';
import { Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

interface ListProps {
  id: any;
  items: any;
  setCards: any;
  submit: any;
  title: string;
  provided: any;
}

const List: FC<ListProps> = ({
  id,
  items,
  setCards,
  submit,
  title,
  provided,
}) => {
  const [input, setInput] = useState('');
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
      id: id,
      title: title,
      tasks: [
        ...items,
        {
          id: uuidv4(),
          title: input,
        },
      ],
    });
    setInput('');
  };

  return (
    <Container {...provided.droppableProps} ref={provided.innerRef}>
      <Title>{title}</Title>
      {items.map((item: any, index: number) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                ...provided.draggableProps.style,
                opacity: snapshot.isDragging ? '0.5' : '1',
              }}
            >
              <Card item={item} />
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
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
