import React from "react";
import { categories } from "../../data/categoryData";

import Categories from "../../components/Categories/Categories";
import "./home.scss";

const Home = () => {
  return <Categories categories={categories} />;
};

export default Home;
