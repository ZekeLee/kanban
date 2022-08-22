import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import styled from 'styled-components';

const Card = styled.li<{ isDragging: boolean }>`
  padding: 1rem;
  background-color: ${(props) =>
    props.isDragging ? props.theme.dragOver : props.theme.cardColor};
  border-radius: 5px;
  box-shadow: ${(props) => (props.isDragging ? props.theme.boxShadow : 'none')};
`;

interface IDraggableProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DraggableCard = ({ toDoId, toDoText, index }: IDraggableProps) => {
  return (
    <Draggable draggableId={toDoId + ''} index={index} key={toDoId}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
