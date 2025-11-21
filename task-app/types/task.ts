export interface Task {
  id?: number;
  text: string;
  done: boolean;
  important?: boolean;
  createdAt: Date;
}

export const createTask = (text: string): Task => ({
  text,
  done: false,
  important: false,
  createdAt: new Date(),
});
