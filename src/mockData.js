import { v4 as uuidv4 } from 'uuid';

const mockData = [
  {
    id: uuidv4(),
    title: 'To do',
    tasks: [
      {
        id: uuidv4(),
        title: 'Aprender Javascript',
      },
      {
        id: uuidv4(),
        title: 'Aprender Git',
      },
      {
        id: uuidv4(),
        title: 'Aprender Python',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Doing',
    tasks: [
      {
        id: uuidv4(),
        title: 'Aprender CSS',
      },
      {
        id: uuidv4(),
        title: 'Aprender HTML',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Done',
    tasks: [
      {
        id: uuidv4(),
        title: 'Aprender Typescript',
      },
      {
        id: uuidv4(),
        title: 'Aprender Go',
      },
    ],
  },
];

export default mockData;
