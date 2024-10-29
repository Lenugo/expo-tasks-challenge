import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.notFoundText}>404</Text>
        <Text>not found</Text>
        <Link href="/" style={styles.link}>
          <Button color='green' title='Go to home screen' />
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    paddingVertical: 15,
  },
  notFoundText: {
    fontSize: 48
  },
});
