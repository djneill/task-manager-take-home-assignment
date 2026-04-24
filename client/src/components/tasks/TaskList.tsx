import type { Task } from "../../types/task";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-sm text-[var(--powder-blue)] opacity-60 py-8">
        No tasks yet. Add one above.
      </p>
    );
  }

  const sorted = [...tasks].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <ul className="flex flex-col gap-2">
      {sorted.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
