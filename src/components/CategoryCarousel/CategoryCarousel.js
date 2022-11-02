import React, { useEffect, useState } from 'react';
import './CategoryCarousel.scss';

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    fetch('/data/categories.json')
      .then(res => res.json())
      .then(json => {
        setCategories(json.categories);
      });
  }, []);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="category-wrap">
      <h3>Category</h3>
      <div
        className="thumbnail-list"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <ul>
          {categories.map(category => {
            return (
              <li className="item" key={category.id}>
                <div
                  className={'categoryImg ' + category.eng_category + 'Img'}
                />
                <div className={'category ' + category.eng_category}>
                  <div className="title">
                    <span>{category.category}</span>
                    <span>{category.category_count}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <button
          className={
            isHovering
              ? 'on category-btn previous'
              : 'off category-btn previous'
          }
        />
        <button
          className={
            isHovering ? 'on category-btn next' : 'off category-btn next'
          }
        />
      </div>
    </div>
  );
};

export default CategoryCarousel;
