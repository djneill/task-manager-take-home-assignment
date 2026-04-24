import type { Task } from "../../types/task";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-md bg-[var(--oxford-navy)] border border-[var(--regal-navy)]">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-4 h-4 accent-[var(--powder-blue)] cursor-pointer shrink-0"
      />
      <span
        onClick={() => onToggle(task.id)}
        className={`flex-1 text-sm cursor-pointer select-none ${
          task.completed
            ? "line-through opacity-40 text-[var(--powder-blue)]"
            : "text-[var(--mint-cream)]"
        }`}
      >
        {task.title}
      </span>
      <Badge
        label={task.completed ? "Complete" : "Pending"}
        variant={task.completed ? "complete" : "pending"}
      />
      <Button variant="danger" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </div>
  );
}
