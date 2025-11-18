import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Task } from "../types/task";

interface ItemTaskProps {
  task: Task;
  index: number;
  onDelete: () => void;
  onToggleImportant: () => void;
  onToggleDone: () => void;
  onPress: () => void;
}

const TaskItem = ({
  task,
  index,
  onDelete,
  onToggleImportant,
  onToggleDone,
  onPress,
}: ItemTaskProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="p-4 bg-white mb-3 rounded-md shadow-md flex-row justify-between items-center"
    >
      <View className="flex-row items-center gap-3">
        <Pressable onPress={onToggleDone}>
          {task.done ? (
            <FontAwesome name="check-circle" size={20} color="#22c55e" />
          ) : (
            <FontAwesome name="circle-thin" size={20} color="#22c55e" />
          )}
        </Pressable>

        <Text
          className={task.done ? "line-through text-gray-500" : "text-black"}
        >
          {index + 1}. {task.text}
        </Text>
      </View>

      <View className="flex-row items-center gap-3">
        <Pressable
          onLongPress={onDelete}
          delayLongPress={1000}
          className="p-2 bg-white rounded-full"
        >
          <Ionicons name="trash" size={20} color="red" />
        </Pressable>

        <Pressable onPress={onToggleImportant}>
          {task.important ? (
            <Ionicons name="star" size={20} color="blue" />
          ) : (
            <Ionicons name="star-outline" size={20} color="blue" />
          )}
        </Pressable>
      </View>
    </Pressable>
  );
};

export default TaskItem;
