export interface Task {
  id: string;
  text: string;
  done: boolean;
  important?: boolean;
  createdAt: Date;
}

export const createTask = (text: string): Task => ({
  id: crypto.randomUUID(),
  text,
  done: false,
  important: false,
  createdAt: new Date(),
});
