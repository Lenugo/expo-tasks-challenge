import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UsersFilter from '../../components/list/UsersFilter';

describe('UsersFilter', () => {
  it('renders correctly with initial value', () => {
    const { getByPlaceholderText } = render(
      <UsersFilter searchInput="" onChangeInput={() => {}} />
    );
    
    expect(getByPlaceholderText('Search your contact')).toBeTruthy();
  });

  it('calls onChangeInput when text changes', () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <UsersFilter searchInput="" onChangeInput={mockOnChange} />
    );

    fireEvent.changeText(getByPlaceholderText('Search your contact'), 'John');
    expect(mockOnChange).toHaveBeenCalledWith('John');
  });

  it('updates input value when searchInput prop changes', () => {
    const { rerender, getByDisplayValue } = render(
      <UsersFilter searchInput="Initial" onChangeInput={() => {}} />
    );

    rerender(<UsersFilter searchInput="Updated" onChangeInput={() => {}} />);
    expect(getByDisplayValue('Updated')).toBeTruthy();
  });
});
