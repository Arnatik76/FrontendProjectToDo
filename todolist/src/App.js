import { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // Загрузка задач из localStorage при первом рендере
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); // Обновляем состояние
    }
  }, []);

  // Сохранение задач в localStorage при каждом изменении
  useEffect(() => {
    if (tasks.length > 0) { // Записываем только если есть задачи
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Добавление новой задачи
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  // Удаление задачи
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Редактирование задачи
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
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
