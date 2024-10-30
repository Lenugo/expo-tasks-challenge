import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../../redux/features/tasksSlice';
import TasksScreen from '../../components/tasks/TasksScreen';

const createTestStore = () => {
  return configureStore({
    reducer: {
      tasks: tasksReducer,
    }
  });
};

describe('TasksScreen', () => {
  it('renders empty state correctly', () => {
    const store = createTestStore();
    const { getByText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    expect(getByText('No tasks to display')).toBeTruthy();
  });

  it('opens modal when add button is pressed', () => {
    const store = createTestStore();
    const { getByText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    fireEvent.press(getByText('Add New Task'));
    expect(getByText('New Task')).toBeTruthy();
  });

  it('adds new task when submitted through modal', () => {
    const store = createTestStore();
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    fireEvent.press(getByText('Add New Task'));
    
    const input = getByPlaceholderText('Write your task');
    fireEvent.changeText(input, 'My first test task');
    fireEvent.press(getByText('Save'));

    expect(getByText('My first test task')).toBeTruthy();
  });
});
