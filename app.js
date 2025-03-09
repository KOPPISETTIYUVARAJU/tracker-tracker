import React, { useState } from "react";
import "./index.css"
import './'
export default function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (!taskName.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskName, completed: false }]);
    setTaskName("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
      <div className="flex w-full max-w-md gap-2">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="flex-1 p-2 border rounded shadow"
          placeholder="Enter a task..."
        />
        <button onClick={addTask} className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          Add
        </button>
      </div>
      <ul className="mt-4 w-full max-w-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border-b bg-white shadow-sm hover:bg-gray-50 transition-all"
          >
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TaskTracker />);

