import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Task } from "../types/task";

interface ItemTaskProps {
  task: Task;
  index: number;
  onDelete: () => void;
}

const TaskItem = ({ task, index, onDelete }: ItemTaskProps) => {
  return (
    <View style={styles.taskCard}>
      <Text>
        {index + 1}. {task.text}
      </Text>
      <Pressable
        onLongPress={onDelete}
        delayLongPress={1000}
        style={({ pressed }) => [
          styles.btnDelete,
          pressed && styles.btnPressed,
        ]}
      >
        <Ionicons name="trash" size={20} color={"red"} />
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnDelete: {
    backgroundColor: "#fff",
    padding: 8,
  },
  btnPressed: {
    backgroundColor: "rgba(255,0,0,0.1)",
    padding: 8,
    borderRadius: 20,
    borderColor: "red",
  },
});
