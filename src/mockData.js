import { v4 as uuidv4 } from 'uuid';

const mockData = [
  {
    id: uuidv4(),
    title: 'To do',
    tasks: [
      {
        id: uuidv4(),
        title: 'Learn Javascript',
      },
      {
        id: uuidv4(),
        title: 'Learn Git',
      },
      {
        id: uuidv4(),
        title: 'Learn Python',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Doing',
    tasks: [
      {
        id: uuidv4(),
        title: 'Learn CSS',
      },
      {
        id: uuidv4(),
        title: 'Learn HTML',
      },
      {
        id: uuidv4(),
        title: 'Learn JS',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Done',
    tasks: [
      {
        id: uuidv4(),
        title: 'Learn Typescript',
      },
      {
        id: uuidv4(),
        title: 'Learn Go',
      },
      {
        id: uuidv4(),
        title: 'Learn Ruby',
      },
    ],
  },
];

export default mockData;
