import { useState } from "react";
import type { ChangeEvent } from "react";

const initialTasks = [
  "Build  React Projects",
  "Practice 10 Finger Print",
  "Go to the Gym",
];

export default function TodoListVariation2() {
  const [tasks, setTasks] = useState<string[]>(initialTasks);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const updateTasks = (from: number, to: number) => {
    const updated = [...tasks];
    [updated[from], updated[to]] = [updated[to], updated[from]];
    setTasks(updated);
  };

  return (
    <div className="todo-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleChange}
        />
        <button className="add-button" onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, i) => (
          <li key={i}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => setTasks(tasks.filter((_, j) => j !== i))}>Delete</button>
            <button className="move-button" onClick={() => i > 0 && updateTasks(i, i - 1)}>👆</button>
            <button className="move-button" onClick={() => i < tasks.length - 1 && updateTasks(i, i + 1)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
