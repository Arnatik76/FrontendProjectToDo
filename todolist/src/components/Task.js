import { useState } from 'react'; 
import styles from '../styles/Task.module.css';

function Task({ task, onDelete, onEdit, onToggleStatus, isBreak }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isBreak) return;
    if (isEditing && newText.trim()) {
      onEdit(newText.trim());
    }
    setIsEditing(!isEditing);
  };
  return (
    <li className={`${styles.task} ${task.status === 'completed' ? styles.completed : ''} ${isBreak ? styles.disabled : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className={styles.taskInput}
        />
      ) : (
        <span
          onClick={() => {
            if (!isBreak) onToggleStatus();
          }}
          className={styles.taskText}
        >
          {task.text}
        </span>
      )}

      {task.status !== 'completed' && (
        <button
          className={styles.editButton}
          onClick={() => {
            if (!isBreak) handleEdit();
          }}
        >
          {isEditing ? '💾' : '✏️'}
        </button>
      )}

      <button
        className={styles.deleteButton}
        onClick={() => {
          if (!isBreak) onDelete();
        }}
      >
        🗑
      </button>
    </li>
  );
}

export default Task;