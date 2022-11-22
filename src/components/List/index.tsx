import { FC } from 'react';
import { Container, StyledInput, Title } from './styled';
import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import Card from '../Card';
import { Draggable, DroppableProvided } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

export interface ListProps {
  id: string;
  items: { id: string; title: string }[];
  submit: (item: {
    id: string;
    title: string;
    tasks: { id: string; title: string }[];
  }) => void;
  title: string;
  provided: DroppableProvided;
}

const List: FC<ListProps> = ({
  id,
  items,
  submit,
  title,
  provided,
}) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
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
    inputRef.current?.focus();
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
          autoFocus
        />
      </form>
    </Container>
  );
};

export default List;
