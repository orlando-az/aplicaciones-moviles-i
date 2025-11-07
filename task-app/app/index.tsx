import React, { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Index = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      window.alert("La tarea no puede estar vacía");
      return;
    }
    setTasks((prev) => [...prev, newTask]);
    setNewTask("");
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <View style={styles.taskCard}>
        <Text>
          {index + 1}. {item}
        </Text>
      </View>
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
  taskCard: {
    padding: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    marginBottom: 10,
    borderRadius: 5,
    shadowRadius: 5,

    elevation: 6,
  },
});
