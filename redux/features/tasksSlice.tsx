import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITasksState } from '../../types/tasks.types';

const initialState: ITasksState = {
  tasks: []
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload
      });
    }
  }
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
