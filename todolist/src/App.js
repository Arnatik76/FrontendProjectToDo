import { useState, useEffect } from 'react';
import styles from './styles/App.module.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import PomodoroTimer from './components/PomodoroTimer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark'); // ✅ Загружаем тему сразу
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks.map(task => ({
            id: task.id || Date.now() + Math.random(),
            text: typeof task.text === 'string' ? task.text : 'Без названия',
            status: task.status || 'in-progress',
          })));
        } else {
          setTasks([]);
        }
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      localStorage.removeItem('tasks');
    }
  }, [tasks]);

  useEffect(() => {
    if (isDark !== undefined) { // ✅ Проверяем, что isDark определён
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      document.body.classList.toggle(styles.darkTheme, isDark);
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const addTask = (newTask) => {
    if (!newTask || typeof newTask !== 'string') return;

    const newTaskObject = {
      id: Date.now(),
      text: newTask.trim(),
      status: 'in-progress',
    };

    setTasks(prevTasks => [...prevTasks, newTaskObject]);
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    if (!newText || typeof newText !== 'string') return;

    setTasks(prevTasks => prevTasks.map(task =>
      task.id === taskId ? { ...task, text: newText.trim() } : task
    ));
  };

  const toggleStatus = (taskId) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === taskId ? { ...task, status: task.status === 'in-progress' ? 'completed' : 'in-progress' } : task
    ));
  };

  const filteredTasks = tasks
    .filter(task => typeof task.text === 'string' && task.text.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(task => filterStatus === 'all' || task.status === filterStatus);

  return (
    <div className={styles.container}>
      <div className={styles.containerTimer}>
        <PomodoroTimer isDark={isDark} onModeChange={setIsBreak} />
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {isDark ? '🌞 Светлая' : '🌙 Тёмная'}
        </button>
      </div>
      <div className={styles.containerTodo}>
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="🔍 Поиск задач..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className={styles.filterSelect}>
          <option value="all">Все</option>
          <option value="in-progress">В процессе</option>
          <option value="completed">Выполнено</option>
        </select>

        <TaskForm addTask={addTask} />
        <TaskList 
          tasks={filteredTasks} 
          deleteTask={deleteTask} 
          editTask={editTask} 
          toggleStatus={toggleStatus} 
          isBreak={isBreak} 
        />
      </div>
    </div>
  );
}

export default App;
