import Task from './Task';
import './TaskList.css';

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          task={task} 
          onDelete={() => deleteTask(index)}
          onEdit={() => editTask(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
