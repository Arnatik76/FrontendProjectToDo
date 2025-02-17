import React, { useState } from 'react';
import './CategoryList.css';

function CategoryList({ categories, setCategories }) {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

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