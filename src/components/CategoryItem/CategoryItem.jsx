import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <Link to='/shop' className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='overlay'></div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
