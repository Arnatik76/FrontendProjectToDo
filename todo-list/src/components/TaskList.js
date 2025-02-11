import React from 'react';
import './TaskList.css';

function TaskList({ tasks }) {

  return (
    <div className="task-list">
      <h1>To Do List</h1>
      <div className="input-section">
        <input type="text" id="taskInput" placeholder="Add a new task..." />
        <button id="addTaskBtn">Add</button>
      </div>
      <ul id="taskList">
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