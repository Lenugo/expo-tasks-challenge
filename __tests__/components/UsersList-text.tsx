import React from 'react';
import { render } from '@testing-library/react-native';
import UsersList from '../../components/list/UsersList';
import { IUsers } from '@/types/users.types';

const mockUsers: IUsers[] = [
  { id: '1', name: 'John Doe', createdAt: '291902', avatar: 'http://image-test1.png' },
  { id: '2', name: 'Jane Smith', createdAt: '290918', avatar: 'http://image-test2.png' }
];

describe('UsersList', () => {
  it('renders empty state correctly', () => {
    const { getByText } = render(<UsersList users={[]} data={undefined} renderItem={undefined} />);
    expect(getByText('No users to display')).toBeTruthy();
  });

  it('renders list of users correctly', () => {
    const { getByText } = render(<UsersList users={mockUsers} data={undefined} renderItem={undefined} />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();
  });
});