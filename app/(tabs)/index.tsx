import { StyleSheet, View } from 'react-native';
import TasksScreen from '@/components/tasks/TasksScreen';

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
    paddingVertical: 60,
    backgroundColor: '#f9f9f9'
  },
});
