import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../redux/features/tasksSlice';
import TaskModal from './TaskModal';
import { ITask } from '@/types/tasks.types';
import { RootState } from '@/redux/store';

const TasksScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (text: string): void => {
    dispatch(addTask(text));
  };

  const renderItem = ({ item }: { item: ITask }): React.JSX.Element => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>- {item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>Add New Task</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={task => task.id.toString()}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks to display</Text>
        }
      />

      <TaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleAddTask}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    borderRadius: 16
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  addButton: {
    backgroundColor: '#007AAA',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  list: {
    flex: 1
  },
  listContent: {
    padding: 15
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  },
  taskText: {
    fontSize: 16
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    fontSize: 16
  }
});

export default TasksScreen;
