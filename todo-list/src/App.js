import { useState } from 'react';
import './App.css';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';

function App() {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <CategoryList categories={categories} addCategory={addCategory} />
      <TaskList tasks={tasks} addTask={addTask} />
    </div>
  );
}

export default App;
