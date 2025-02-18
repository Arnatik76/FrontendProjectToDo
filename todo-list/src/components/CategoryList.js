import React from 'react';
import './CategoryList.css';

function CategoryList({ categories, newCategory, setNewCategory, handleAddCategory }) {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="New category..."
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
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