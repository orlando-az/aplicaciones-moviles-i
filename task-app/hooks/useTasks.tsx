import { useState } from "react";
import { create, Task } from "../types/task";

const useTasks = () => {
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
  return {
    handleAddTask,
    handleDeleteTask,
    handleToggleDone,
    handleToggleImportant,
    tasks,
    tasksCompleted,
    newTask,
    setNewTask,
  };
};

export default useTasks;
