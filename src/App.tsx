import { useState, useRef, useEffect } from 'react';
import Heading from './components/Heading';
import List from './components/List';
import Navbar from './components/Navbar';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import mockData from './mockData';
import { Body, ListWrapper, StyledInput } from './styled';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [data, setData] = useState(mockData);
  const [input, setInput] = useState('');
  const inputRef = useRef<any>(null);

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const addList = (e: any) => {
    e.preventDefault();

    const newData = [
      ...data,
      {
        id: uuidv4(),
        title: input,
        tasks: [],
      },
    ];

    inputRef.current.focus();
    setData(newData);
    setInput('');
  };

  const addListItem = (item: any) => {
    const newData = data.slice().map((list) => {
      return list.id === item.id ? item : list;
    });

    setData(newData);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };

  return (
    <>
      <Navbar />
      <Body>
        <Heading />
        <DragDropContext onDragEnd={onDragEnd}>
          <ListWrapper>
            {data.map((section) => (
              <Droppable key={section.id} droppableId={section.id}>
                {(provided) => (
                  <List
                    {...provided.droppableProps}
                    id={section.id}
                    items={section.tasks}
                    setCards={setData}
                    submit={addListItem}
                    title={section.title}
                    provided={provided}
                  />
                )}
              </Droppable>
            ))}
            <form onSubmit={addList}>
              <StyledInput
                type="text"
                placeholder="Add a list..."
                value={input}
                name="text"
                onChange={handleChange}
                ref={inputRef}
                autoComplete="off"
              />
            </form>
          </ListWrapper>
        </DragDropContext>
      </Body>
    </>
  );
}

export default App;
