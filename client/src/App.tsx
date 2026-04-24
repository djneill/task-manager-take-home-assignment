import "./index.css";
import { useTasks } from "./hooks/useTasks";
import { TaskForm } from "./components/tasks/TaskForm";
import { TaskList } from "./components/tasks/TaskList";

function App() {
  const { tasks, loading, error, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <div className="min-h-screen bg-[var(--prussian-blue)] px-4 py-10">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <h1 className="text-2xl font-semibold text-[var(--mint-cream)] tracking-tight">
          Task Manager
        </h1>

        <TaskForm onAdd={addTask} loading={loading} />

        {error && (
          <p className="text-sm text-red-400 bg-red-950 border border-red-800 rounded-md px-4 py-2">
            {error}
          </p>
        )}

        {loading && tasks.length === 0 ? (
          <p className="text-center text-sm text-[var(--powder-blue)] opacity-60 py-8">
            Loading tasks...
          </p>
        ) : (
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        )}
      </div>
    </div>
  );
}

export default App;
