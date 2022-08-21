import { Draggable } from 'react-beautiful-dnd';

import styled from 'styled-components';

const Card = styled.li`
  padding: 1rem;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
`;

interface IDraggableProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({ toDo, index }: IDraggableProps) => {
  console.log(toDo, 'has been rendered');

  return (
    <Draggable draggableId={toDo} index={index} key={toDo}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default DraggableCard;
