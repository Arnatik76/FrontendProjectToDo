import React, { useState } from 'react';
import './TaskList.css';

function TaskList({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="task-list">
      <h1>To Do List</h1>
      <div className="input-section">
        <input
          type="text"
          id="taskInput"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button id="addTaskBtn" onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;