import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskModal from '../../components/tasks/TaskModal';

describe('TaskModal', () => {
  const mockOnClose = jest.fn();
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <TaskModal
        visible={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
      />
    );

    expect(getByTestId('task-input')).toBeTruthy();
    expect(getByPlaceholderText('Write your task')).toBeTruthy();
  });

  it('handles submit with valid input', () => {
    const { getByTestId } = render(
      <TaskModal
        visible={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
      />
    );

    const input = getByTestId('task-input');
    fireEvent.changeText(input, 'New Task');
    
    const submitButton = getByTestId('submit-button');
    fireEvent.press(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith('New Task');
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('handles empty input submission', () => {
    const { getByTestId } = render(
      <TaskModal
        visible={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
      />
    );

    const submitButton = getByTestId('submit-button');
    fireEvent.press(submitButton);

    expect(mockOnSubmit).not.toHaveBeenCalled();
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});