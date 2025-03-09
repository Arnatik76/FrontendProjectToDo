import { useState } from 'react'; 
import styles from '../styles/Task.module.css';
import PomodoroTimer from './PomodoroTimer';

function Task({ task, onDelete, onEdit, onToggleStatus, onBreakModeChange, isDark }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  
  const handleEdit = () => {
    if (task.isBreak) return;
    if (isEditing && newText.trim()) {
      onEdit(newText.trim());
    }
    setIsEditing(!isEditing);
  };
  
  return (
    <li className={`${styles.task} 
                    ${task.status === 'completed' ? styles.completed : ''} 
                    ${task.isBreak ? styles.disabled : ''}
                    ${isDark ? styles.dark : ''}`}>
      <input 
        type="checkbox" 
        checked={task.status === 'completed'}
        onChange={() => {
          if (!task.isBreak) onToggleStatus();
        }}
        className={styles.taskCheckbox}
        disabled={task.isBreak}
      />
      
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className={styles.taskInput}
        />
      ) : (
        <span className={styles.taskText}>
          {task.text}
        </span>
      )}

      {task.status !== 'completed' && (
        <button
          className={styles.editButton}
          onClick={() => {
            if (!task.isBreak) handleEdit();
          }}
          disabled={task.isBreak}
        >
          {isEditing ? '💾' : '✏️'}
        </button>
      )}

      <button
        className={styles.deleteButton}
        onClick={() => {
          if (!task.isBreak) onDelete();
        }}
        disabled={task.isBreak}
      >
        🗑
      </button>
      {task.status !== 'completed' && (
        <PomodoroTimer 
          taskId={task.id} 
          isDark={isDark} 
          isBreak={task.isBreak}
          onModeChange={onBreakModeChange}
          allowTimerControl={true} // Always allow timer control
        />
      )}
    </li>
  );
}

export default Task;