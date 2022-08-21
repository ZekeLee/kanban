import { Droppable } from 'react-beautiful-dnd';
import DraggableCard from './DraggableCard';

import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
`;

const BoardEl = styled.ul<IItemProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
  padding: 1rem;
  width: 100%;
  background-color: ${(props) =>
    props.isDraggingOver
      ? props.theme.overlay
      : props.draggingFromThisWith
      ? '#dfe6e9'
      : 'transparent'};
  transition: background-color 0.3s ease-in-out;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

interface IItemProps {
  isDraggingOver: boolean;
  draggingFromThisWith: string | undefined;
}

const Board = ({ boardId, toDos }: IBoardProps) => {
  return (
    <Container>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <BoardEl
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={snapshot.draggingFromThisWith}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {provided.placeholder}
          </BoardEl>
        )}
      </Droppable>
    </Container>
  );
};

export default Board;
