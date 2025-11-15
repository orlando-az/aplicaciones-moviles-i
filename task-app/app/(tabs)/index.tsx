import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { create, Task } from "../../types/task";
import TaskItem from "../../components/TaskItem";

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

  const handleDeleteTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleToggleImportant = (id: string) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, important: !item.important } : item
      )
    );
  };

  const handleToggleDone = (id: string) => {
    const taskDone = tasks.find((item) => item.id === id);
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
    if (taskDone) {
      setTasksCompleted((prev) => [...prev, taskDone]);
      setTasks((prev) => prev.filter((item) => item.id !== id));
    }
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const renderItem: ListRenderItem<Task> = ({ item, index }) => {
    return (
      <TaskItem
        task={item}
        index={index}
        onDelete={() => handleDeleteTask(index)}
        onToggleImportant={() => handleToggleImportant(item.id)}
        onToggleDone={() => handleToggleDone(item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Task APP!</Text>
      <Text style={styles.subtitle}>Lista de Tareas:</Text>

      <TextInput
        placeholder="Escribe tu tarea"
        placeholderTextColor={"#ccc"}
        style={styles.input}
        onChangeText={setNewTask}
        value={newTask}
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={tasks}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <FlatList
        ListHeaderComponent={<Text>Tareas completadas</Text>}
        showsHorizontalScrollIndicator={false}
        data={tasksCompleted}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <Pressable style={styles.btn} onPress={handleAddTask}>
        <Text style={{ textAlign: "center", color: "#fff" }}>
          Agregar Tarea
        </Text>
      </Pressable>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  btn: {
    position: "absolute",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#22c55e",
    bottom: 20,
    width: "90%",
    alignSelf: "center",
  },
});
