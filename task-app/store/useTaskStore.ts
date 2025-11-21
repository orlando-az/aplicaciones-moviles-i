import { create } from "zustand";
import { createTask, Task } from "../types/task";
import { supabase } from "../utils/supabase";

type TaskStore = {
  tasks: Task[];
  loadTask: () => Promise<void>;
  addTask: (text: string) => Promise<void>;
  toggleDone: (id: number) => Promise<void>;
  toggleImportant: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  setTasks: (tasks: Task[]) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  loadTask: async () => {
    try {
      const { data, error } = await supabase
        .from("task")
        .select("*")
        .order("createdAt", { ascending: false });

      if (error) {
        console.error("Error al cargas las tareas: ", error);
      }
      set({ tasks: data ?? [] });
    } catch (error) {
      console.error("Excepción al cargar las tareas:", error);
    }
  },
  addTask: async (text: string) => {
    const t = createTask(text);
    // set((state) => ({ tasks: [...state.tasks, t] }));
    try {
      const { data, error } = await supabase
        .from("task")
        .insert([
          {
            text: t.text,
            done: t.done,
            important: t.important,
          },
        ])
        .select()
        .single();
      if (error) {
        console.error("Error al crear una tarea:", error);
      }
      set((state) => ({ tasks: [...state.tasks, data] }));
    } catch (error) {
      console.error("Excepcion al agregar", error);
    }
  },
  toggleDone: async (id: number) => {
    try {
      const currentTask = useTaskStore
        .getState()
        .tasks.find((t) => t.id === id);

      if (!currentTask) return;
      const { error } = await supabase
        .from("task")
        .update({ done: !currentTask.done })
        .eq("id", id);

      if (error) {
        console.error("Error al actualizar:", error);
        return;
      }
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === id ? { ...t, done: !t.done } : t
        ),
      }));
    } catch (error) {
      console.error("Excepción al actualizar:", error);
    }
  },
  toggleImportant: async (id: number) => {
    try {
      const currentTask = useTaskStore
        .getState()
        .tasks.find((t) => t.id === id);

      if (!currentTask) return;
      const { error } = await supabase
        .from("task")
        .update({ important: !currentTask.important })
        .eq("id", id);

      if (error) {
        console.error("Error al actualizar:", error);
        return;
      }
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === id ? { ...t, important: !t.important } : t
        ),
      }));
    } catch (error) {
      console.error("Excepción al actualizar:", error);
    }
  },

  deleteTask: async (id: number) => {},
  setTasks: (tasks) => ({ tasks }),
}));
