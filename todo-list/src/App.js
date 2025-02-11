import './App.css';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';

function App() {
  const categories = ["Hobbies", "Education"]
  const tasks = ["Make a game", "Learn Economics"]

  return (
    <div className="App">
      <CategoryList categories={categories} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;