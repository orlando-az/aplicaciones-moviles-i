import React, { useEffect, useState } from "react";
import {
  FlatList,
  ListRenderItem,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { create, Task } from "../../../types/task";
import TaskItem from "../../../components/TaskItem";

const Index = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      window.alert("La tarea no puede estar vacía");
      return;
    }
    setTasks((prev) => [...prev, create(newTask)]);
    setNewTask("");
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setTasksCompleted((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleImportant = (id: string) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, important: !item.important } : item
      )
    );
    setTasksCompleted((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, important: !item.important } : item
      )
    );
  };

  const handleToggleDone = (id: string) => {
    const inActive = tasks.find((t) => t.id === id);
    const inCompleted = tasksCompleted.find((t) => t.id === id);

    if (inActive) {
      const updated = { ...inActive, done: true };
      setTasks((prev) => prev.filter((t) => t.id !== id));
      setTasksCompleted((prev) => [updated, ...prev]);
      return;
    }

    if (inCompleted) {
      const updated = { ...inCompleted, done: false };
      setTasksCompleted((prev) => prev.filter((t) => t.id !== id));
      setTasks((prev) => [updated, ...prev]);
      return;
    }
  };

  useEffect(() => {
    console.log("Tareas activas:", tasks);
    console.log("Tareas completadas:", tasksCompleted);
  }, [tasks, tasksCompleted]);

  const renderActive: ListRenderItem<Task> = ({ item, index }) => {
    return (
      <TaskItem
        index={index}
        task={item}
        onDelete={() => handleDeleteTask(item.id)}
        onToggleImportant={() => handleToggleImportant(item.id)}
        onToggleDone={() => handleToggleDone(item.id)}
      />
    );
  };

  const renderCompleted: ListRenderItem<Task> = ({ item, index }) => {
    return (
      <TaskItem
        index={index}
        task={item}
        onDelete={() => handleDeleteTask(item.id)}
        onToggleImportant={() => handleToggleImportant(item.id)}
        onToggleDone={() => handleToggleDone(item.id)}
      />
    );
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-2 text-center">
        Bienvenido a Task APP!
      </Text>

      <Text className="text-lg font-medium mb-2">Lista de Tareas:</Text>

      <TextInput
        placeholder="Escribe tu tarea"
        placeholderTextColor="#999"
        className="p-4 border border-gray-300 rounded mb-3"
        onChangeText={setNewTask}
        value={newTask}
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={tasks}
        renderItem={renderActive}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        ListEmptyComponent={
          <Text className="text-center text-gray-500">No hay tareas</Text>
        }
      />

      <Text className="text-lg font-medium mt-3 mb-2">Tareas completadas</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={tasksCompleted}
        renderItem={renderCompleted}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        ListEmptyComponent={
          <Text className="text-center text-gray-500">
            No hay tareas completadas
          </Text>
        }
      />

      <Pressable
        className="absolute bottom-5 w-[90%] self-center bg-green-500 p-4 rounded"
        onPress={handleAddTask}
      >
        <Text className="text-center text-white">Agregar Tarea</Text>
      </Pressable>
    </View>
  );
};

export default Index;
