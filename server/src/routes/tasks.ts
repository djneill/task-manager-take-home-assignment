import { Router } from "express";
import { getTasks, createTask, updateTask, deleteTask } from "../data/store";

const router = Router();

router.get("/", (req, res) => {
  res.json(getTasks());
});

router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title || typeof title !== "string" || !title.trim()) {
    res.status(400).json({ error: "title is required" });
    return;
  }
  const task = createTask(title.trim());
  res.status(201).json(task);
});

router.patch("/:id", (req, res) => {
  const { title, completed } = req.body;
  const patch: { title?: string; completed?: boolean } = {};
  if (title !== undefined) patch.title = title;
  if (completed !== undefined) patch.completed = completed;
  const task = updateTask(req.params.id, patch);
  if (!task) {
    res.status(404).json({ error: "task not found" });
    return;
  }
  res.json(task);
});

router.delete("/:id", (req, res) => {
  const deleted = deleteTask(req.params.id);
  if (!deleted) {
    res.status(404).json({ error: "task not found" });
    return;
  }
  res.status(204).send();
});

export default router;
