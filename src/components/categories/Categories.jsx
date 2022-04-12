import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./categories.scss";

const Categories = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
