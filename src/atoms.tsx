import { atom } from 'recoil';

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDoState',
  default: {
    ToDo: ['a', 'b', 'c'],
    Doing: ['d', 'e'],
    Done: ['f'],
  },
});
