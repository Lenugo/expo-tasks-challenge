import { ModalProps } from "react-native/types";

export type ITask = {
  id: number;
  text: string;
}

export interface ITasksState {
  tasks: ITask[];
}

export type IRenderItem = {
  item:  ITask
}

export type ITasksScreen = {
  tasks: {
    tasks: ITask[]
  }
}

export type ITaskModal =  & ModalProps & {
  visible: boolean;
  onClose: any;
  onSubmit: Function;
}