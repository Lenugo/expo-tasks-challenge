import { ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import RestartErrorMessage from '@/components/RestartErrorMessage';
import UsersList from '@/components/UsersList';
import { IUsers } from '@/types/users.types';
import WrapperScrollView from '@/components/WrapperScrollView';
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
      })
    } catch (error) {
      setErrorMessage(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUSers();
  }, []);
  
  return (
    <WrapperScrollView title='Contact List'>
      {
        isLoading ? <ActivityIndicator color='red' size='large' /> :
        errorMessage ? <RestartErrorMessage onCallFnc={getUSers} /> :
        <UsersList users={users} data={undefined} renderItem={undefined} />
      }
    </WrapperScrollView>
  );
}
