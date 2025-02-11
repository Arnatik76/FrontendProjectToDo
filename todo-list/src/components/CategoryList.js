import React from 'react';
import './CategoryList.css';

function CategoryList({ categories}) {

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <div className="input-section">
        <input type="text" placeholder="New category..." />
        <button>+</button>
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
