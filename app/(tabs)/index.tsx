import { StyleSheet, View } from 'react-native';
import TasksScreen from '@/components/TasksScreen';

export default function HomeScreen() {
  return (
    <View style={styles.tasksViewContainer}>
        <TasksScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  tasksViewContainer: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
    marginTop: 24,
    paddingVertical: 40,
    backgroundColor: '#f9f9f9'
  },
});
