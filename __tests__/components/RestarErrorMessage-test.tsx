import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RestartErrorMessage from '../../components/list/RestartErrorMessage';

describe('RestartErrorMessage', () => {
  it('renders error message correctly', () => {
    const { getByText } = render(<RestartErrorMessage onCallFnc={() => {}} />);
    expect(getByText('Something went wrong loading the data.')).toBeTruthy();
  });

  it('calls onCallFnc when restart button is pressed', () => {
    const mockOnCallFnc = jest.fn();
    const { getByText } = render(<RestartErrorMessage onCallFnc={mockOnCallFnc} />);
    
    fireEvent.press(getByText('Restart'));
    expect(mockOnCallFnc).toHaveBeenCalled();
  });
});
