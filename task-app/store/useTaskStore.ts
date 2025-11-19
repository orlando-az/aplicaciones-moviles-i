import { create } from "zustand";
import { createTask, Task } from "../types/task";

type TaskStore = {
  tasks: Task[];
  addTask: (text: string) => void;
  setTasks: (tasks: Task[]) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (text: string) => {
    const t = createTask(text);
    set((state) => ({ tasks: [...state.tasks, t] }));
  },
  setTasks: (tasks) => ({ tasks }),
}));
