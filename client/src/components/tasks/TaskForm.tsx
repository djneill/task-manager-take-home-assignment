import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface TaskFormProps {
  onAdd: (title: string) => void;
  loading?: boolean;
}

export function TaskForm({ onAdd, loading = false }: TaskFormProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        autoFocus
      />
      <Button type="submit" variant="primary" disabled={loading}>
        Add
      </Button>
    </form>
  );
}
