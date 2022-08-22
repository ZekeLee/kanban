import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export interface IToDo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: IToDo[];
}

const { persistAtom } = recoilPersist();

export const toDoState = atom<IToDoState>({
  key: 'toDoState',
  default: {
    ToDo: [],
    Doing: [],
    Done: [],
  },
  effects_UNSTABLE: [persistAtom],
});
