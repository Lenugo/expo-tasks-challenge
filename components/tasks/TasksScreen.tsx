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
import { addTask, removeTask, toggleTask } from '../../redux/features/tasksSlice';
import TaskModal from './TaskModal';
import { ITask } from '@/types/tasks.types';
import { RootState } from '@/redux/store';
import { Ionicons } from '@expo/vector-icons';

const TasksScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (text: string): void => {
    dispatch(addTask(text));
  };

  const renderItem = ({ item }: { item: ITask }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity 
        style={styles.touchable}
        onPress={() => dispatch(toggleTask(item.id))}
        testID={`task-item-${item.id}`}
      >
        <Text style={[ styles.taskText, item.completed && styles.taskTextDone ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <Ionicons name='trash' color='#ff0000' size={24} onPress={() => dispatch(removeTask(item.id))} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>My Tasks</Text>
          <Text style={styles.tasksLength}>{ tasks.length >= 1 && tasks.length }</Text>
        </View>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
          testID="add-task-button"
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
        testID="tasks-list"
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
  contentTitle: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  tasksLength: {
    fontSize: 20,
    color: '#333'
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
    shadowRadius: 2.22,
    flexDirection: 'row',
    alignItems: 'center'
  },
  touchable: {
    width: '90%'
  },
  taskText: {
    fontSize: 16,
    flexShrink: 1
  },
  taskTextDone: {
    fontSize: 16,
    flexShrink: 1,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    fontSize: 16
  }
});

export default TasksScreen;
