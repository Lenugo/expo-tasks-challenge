import { ModalProps } from "react-native/types";

export type ITask = {
  id: number;
  text: string;
}

export interface ITasksState {
  tasks: ITask[];
}

export type ITaskModal =  & ModalProps & {
  visible: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
}