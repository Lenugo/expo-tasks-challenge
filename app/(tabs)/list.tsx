import { ActivityIndicator, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import RestartErrorMessage from '@/components/list/RestartErrorMessage';
import UsersList from '@/components/list/UsersList';
import { IUsers } from '@/types/users.types';
import WrapperScrollView from '@/components/list/WrapperScrollView';
import { ENV } from '../../config/env'
import UsersFilter from '@/components/list/UsersFilter';

export default function ListScreen() {

  const [users, setUsers] = useState<IUsers[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  const getUSers = async () => {
    setIsLoading(true);
    setErrorMessage(false);
    const URL = `${ENV.development.MOCK_URL}/elements`;

    try {
      await fetch(URL).then(res => {
        if (!res.ok) throw new Error('Something went wrong');
        return res.json();
      }).then(data => {
        setUsers(data);
      });
    } catch (error) {
      setErrorMessage(true);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUSers();
  }, []);
  
  const onInputChange = (value: string): void => {
    setSearchInput(value);
  };
  
  const filteredNames = users.filter(user =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  
  return (
    <WrapperScrollView title='Contact List'>
      {
        isLoading ? <ActivityIndicator testID='loading-indicator' color='blue' size='large' /> :
          errorMessage ? <RestartErrorMessage onCallFnc={getUSers} /> :
            <>
              <UsersFilter searchInput={searchInput} onChangeInput={onInputChange} />  
              <UsersList users={filteredNames} data={undefined} renderItem={undefined} />
            </>
      }
    </WrapperScrollView>
  );
}
