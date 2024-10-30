import { ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import RestartErrorMessage from '@/components/list/RestartErrorMessage';
import UsersList from '@/components/list/UsersList';
import { IUsers } from '@/types/users.types';
import WrapperScrollView from '@/components/list/WrapperScrollView';
import { ENV } from '../../config/env'

export default function ListScreen() {

  const [users, setUsers] = useState<IUsers[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

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
        setIsLoading(false);
      });
    } catch (error) {
      setErrorMessage(true);
      setIsLoading(false);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUSers();
  }, []);
  
  return (
    <WrapperScrollView title='Contact List'>
      {
        isLoading ? <ActivityIndicator color='blue' size='large' /> :
        errorMessage ? <RestartErrorMessage onCallFnc={getUSers} /> :
        <UsersList users={users} data={undefined} renderItem={undefined} />
      }
    </WrapperScrollView>
  );
}
