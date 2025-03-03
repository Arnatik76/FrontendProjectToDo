import { useState } from 'react';
import styles from '../styles/TaskForm.module.css';

function TaskForm({ addTask, isDark }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form className={`${styles.taskForm} ${isDark ? styles.dark : ''}`} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите задачу..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={isDark ? styles.dark : ''}
      />
      <button type="submit" className={isDark ? styles.dark : ''}>Добавить</button>
    </form>
  );
}

export default TaskForm;
