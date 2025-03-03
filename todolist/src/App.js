import { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import PomodoroTimer from './components/PomodoroTimer';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    const newTask = prompt('Редактировать задачу:', tasks[index]);
    if (newTask !== null && newTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTask;
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="container">
      <div className="container_timer">
        <PomodoroTimer />
      </div>
      <div className="container_todo">
        <h1>To-Do List</h1>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
    
  );
}

export default App;
