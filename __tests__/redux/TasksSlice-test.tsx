import tasksReducer, { addTask, removeTask, toggleTask } from '../../redux/features/tasksSlice';
import { ITasksState } from '../../types/tasks.types';

describe('tasks reducer', () => {
  const initialState: ITasksState = {
    tasks: []
  };

  it('should handle initial state', () => {
    expect(tasksReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle adding a task', () => {
    const actual = tasksReducer(initialState, addTask('New Task'));
    expect(actual.tasks).toHaveLength(1);
    expect(actual.tasks[0].text).toEqual('New Task');
    expect(actual.tasks[0].completed).toBeFalsy();
  });

  it('should handle toggling a task', () => {
    const state: ITasksState = {
      tasks: [{ id: 1, text: 'Test Task', completed: false }]
    };
    const actual = tasksReducer(state, toggleTask(1));
    expect(actual.tasks[0].completed).toBeTruthy();
  });

  it('should handle removing a task', () => {
    const state: ITasksState = {
      tasks: [{ id: 1, text: 'Test Task', completed: false }]
    };
    const actual = tasksReducer(state, removeTask(1));
    expect(actual.tasks).toHaveLength(0);
  });
});
