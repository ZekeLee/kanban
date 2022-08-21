import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { toDoState } from './atoms';
import Board from './components/Board';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './GlobalStyle';

const Boards = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { draggableId, source, destination } = info;
    if (!destination) return;
    if (source.droppableId === destination?.droppableId) {
      // same board movement
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];

        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);
        return { ...allBoards, [source.droppableId]: boardCopy };
      });
    }
    if (source.droppableId !== destination.droppableId) {
      // cross board movement
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const targetBoard = [...allBoards[destination.droppableId]];

        sourceBoard.splice(source.index, 1);
        targetBoard.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: targetBoard,
        };
      });
    }
  };
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </DragDropContext>
    </ThemeProvider>
  );
};

export default App;
