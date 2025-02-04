import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <h2>Categories</h2>
        <div className="input-section">
          <input type="text" id="categoryInput" placeholder="New category..." />
          <button id="addCategoryBtn">+</button>
        </div>
        <ul id="categoryList">
          <li className="category-item">Hobbies</li>
        </ul>
      </div>
      <div className="container">
        <h1>To Do List</h1>
        <div className="input-section">
          <input type="text" id="taskInput" placeholder="Add a new task..." />
          <button id="addTaskBtn">Add</button>
        </div>
        <ul id="taskList">
          <li className="task-item">Make a game</li>
        </ul>
      </div>
    </div>
  );
}

export default App;