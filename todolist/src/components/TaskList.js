import Task from './Task';
import styles from '../styles/TaskList.module.css';

function TaskList({ tasks, deleteTask, editTask, toggleStatus, toggleTaskBreakMode, isDark }) {
  return (
    <ul className={styles.taskList}>
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          onDelete={() => deleteTask(task.id)}
          onEdit={(newText) => editTask(task.id, newText)}
          onToggleStatus={() => toggleStatus(task.id)}
          onBreakModeChange={(isBreak) => toggleTaskBreakMode(task.id, isBreak)}
          isDark={isDark}
        />
      ))}
    </ul>
  );
}

export default TaskList;
