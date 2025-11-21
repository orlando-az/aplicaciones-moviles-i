import { useEffect, useState } from "react";
import { Task } from "../types/task";
import { useTaskStore } from "../store/useTaskStore";

const useTasks = () => {
  const [newTask, setNewTask] = useState("");

  const { tasks, setTasks, addTask, loadTask, toggleDone, toggleImportant } =
    useTaskStore();

  const tasksCompleted = tasks.filter((t) => t.done);
  const activeTasks = tasks.filter((t) => !t.done);

  useEffect(() => {
    loadTask();
  }, []);

  const handleAddTask = async () => {
    if (newTask.trim() === "") {
      window.alert("La tarea no puede estar vacía");
      return;
    }

    await addTask(newTask);
    setNewTask("");
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggleImportant = async (id: number) => {
    await toggleImportant(id);
  };

  const handleToggleDone = async (id: number) => {
    await toggleDone(id);
  };
  return {
    handleAddTask,
    handleDeleteTask,
    handleToggleDone,
    handleToggleImportant,
    tasks,
    tasksCompleted,
    activeTasks,
    newTask,
    setNewTask,
  };
};

export default useTasks;
