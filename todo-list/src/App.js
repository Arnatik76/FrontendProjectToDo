import React, { useState, useEffect } from 'react';
import './App.css';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';

function App() {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories'));
    if (storedCategories) {
      setCategories(storedCategories);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  return (
    <div className="App">
      <CategoryList categories={categories} setCategories={setCategories} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;