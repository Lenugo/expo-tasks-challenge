import { View, Text, Button, StyleSheet } from 'react-native';
import { IRestarError } from '@/types/users.types';

export default function RestartErrorMessage({ onCallFnc = () => {} }: IRestarError) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something went wrong loading the data.</Text>
      <Button title='Restart' onPress={() => onCallFnc()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 250,
  },
  title: {
    margin: 'auto',
    paddingBottom: 6,
    fontSize: 16,
  }
})