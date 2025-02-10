import React, { useState } from 'react';
import './TaskList.css';

function TaskList({ tasks, addTask }) {
  const [newTask, setNewTask] = useState('');
  const [taskStatuses, setTaskStatuses] = useState(tasks.map(() => false));

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setTaskStatuses([...taskStatuses, false]);
      setNewTask('');
    }
  };

  const toggleTaskStatus = (index) => {
    const updatedStatuses = [...taskStatuses];
    updatedStatuses[index] = !updatedStatuses[index];
    setTaskStatuses(updatedStatuses);
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
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${taskStatuses[index] ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={taskStatuses[index]}
              onChange={() => toggleTaskStatus(index)}
            />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
