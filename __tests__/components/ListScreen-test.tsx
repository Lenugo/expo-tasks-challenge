
import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import ListScreen from '../../app/(tabs)/list';

global.fetch = jest.fn();

describe('ListScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays users after successful fetch', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];

    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUsers)
      })
    );

    const { getByText } = render(<ListScreen />);

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText('Jane Smith')).toBeTruthy();
    });
  });

  it('shows error message on fetch failure', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('API Error'))
    );

    const { getByText } = render(<ListScreen />);

    await waitFor(() => {
      expect(getByText('Something went wrong loading the data.')).toBeTruthy();
    });
  });

  it('filters users based on search input', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];

    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUsers)
      })
    );

    const { getByPlaceholderText, queryByText } = render(<ListScreen />);

    await waitFor(() => {
      const searchInput = getByPlaceholderText('Search your contact');
      fireEvent.changeText(searchInput, 'John');
      
      expect(queryByText('John Doe')).toBeTruthy();
      expect(queryByText('Jane Smith')).toBeFalsy();
    });
  });
});