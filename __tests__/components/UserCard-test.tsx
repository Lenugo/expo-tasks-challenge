import React from 'react';
import { render } from '@testing-library/react-native';
import UserCard from '../../components/list/UserCard';
import { IUsers } from '@/types/users.types';

describe('UserCard', () => {
  const mockUser: IUsers = { id: '1', name: 'John Doe', avatar: '', createdAt: '' };

  it('renders user name correctly', () => {
    const { getByText } = render(<UserCard item={mockUser} />);
    expect(getByText('John Doe')).toBeTruthy();
  });

  it('renders first letter of name in letter container', () => {
    const { getByText } = render(<UserCard item={mockUser} />);
    expect(getByText('J')).toBeTruthy();
  });

  it('applies correct styles', () => {
    const { getByTestId } = render(<UserCard item={mockUser} />);
    const container = getByTestId('user-card-container');
    expect(container.props.style).toHaveProperty('flexDirection', 'row');
  });
});