import fs from "fs";
import path from "path";
import { Task } from "../types/tasks";

const DATA_PATH = path.join(__dirname, "tasks.json");

function readTasks(): Task[] {
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf-8");
    return JSON.parse(raw) as Task[];
  } catch {
    return [];
  }
}

function writeTasks(tasks: Task[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(tasks, null, 2), "utf-8");
}

export function getTasks(): Task[] {
  return readTasks();
}

export function getTaskById(id: string): Task | undefined {
  return readTasks().find((t) => t.id === id);
}

export function createTask(title: string): Task {
  const tasks = readTasks();
  const task: Task = {
    id: crypto.randomUUID(),
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  writeTasks(tasks);
  return task;
}

export function updateTask(
  id: string,
  patch: Partial<Pick<Task, "title" | "completed">>
): Task | undefined {
  const tasks = readTasks();
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return undefined;
  tasks[index] = { ...tasks[index]!, ...patch } as Task;
  writeTasks(tasks);
  return tasks[index];
}

export function deleteTask(id: string): boolean {
  const tasks = readTasks();
  const filtered = tasks.filter((t) => t.id !== id);
  if (filtered.length === tasks.length) return false;
  writeTasks(filtered);
  return true;
}
