import { useForm } from 'react-hook-form';
import { Droppable } from 'react-beautiful-dnd';
import DraggableCard from './DraggableCard';

import styled from 'styled-components';
import { IToDo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';

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

const Form = styled.form`
  padding: 0 1rem;
  width: 100%;
  input {
    padding: 0.5rem;
    width: 100%;
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 5px;
  }
`;

interface IBoardProps {
  toDos: IToDo[];
  boardId: string;
}

interface IItemProps {
  isDraggingOver: boolean;
  draggingFromThisWith: string | undefined;
}

interface IForm {
  toDo: string;
}

const Board = ({ boardId, toDos }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newToDo],
      };
    });
    setValue('toDo', '');
  };
  return (
    <Container>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register('toDo', { required: true })}
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <BoardEl
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={snapshot.draggingFromThisWith}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {provided.placeholder}
          </BoardEl>
        )}
      </Droppable>
    </Container>
  );
};

export default Board;
