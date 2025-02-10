import { useState } from 'react';
import './CategoryList.css';

function CategoryList({ categories, addCategory }) {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      addCategory(newCategory.trim());
      setNewCategory('');
    }
  };

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <div className="input-section">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New category..."
        />
        <button onClick={handleAddCategory}>+</button>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
