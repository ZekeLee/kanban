import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';

import styled, { ThemeProvider } from 'styled-components';
import { toDoState } from './atoms';
import DraggableCard from './components/DraggableCard';
import GlobalStyle from './GlobalStyle';
import { lightTheme } from './theme';

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Boards = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const Board = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    if (destination?.index === undefined) return;
    setToDos((oldToDos) => {
      const copyToDos = [...oldToDos];
      copyToDos.splice(source.index, 1); // Delete Item copyToDos[sourceIndex]
      copyToDos.splice(destination.index, 0, draggableId); // Put back the item on the destination.index
      return copyToDos;
    });
  };
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          <Boards>
            <Droppable droppableId="droppable-1">
              {(provided) => (
                <Board ref={provided.innerRef} {...provided.droppableProps}>
                  {toDos.map((toDo, index) => (
                    <DraggableCard key={toDo} toDo={toDo} index={index} />
                  ))}
                  {provided.placeholder}
                </Board>
              )}
            </Droppable>
          </Boards>
        </Container>
      </DragDropContext>
    </ThemeProvider>
  );
};

export default App;
