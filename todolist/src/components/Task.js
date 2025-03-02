import './Task.css';

function Task({ task, onDelete, onEdit }) {
  return (
    <li className="task">
      <span onClick={onEdit} className="task-text">{task}</span>
      <button className="delete-button" onClick={onDelete}>✖</button>
    </li>
  );
}

export default Task;
