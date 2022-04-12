import React from "react";
import Categories from "./components/categories/Categories";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Laptop",
      imageUrl:
        "https://images.unsplash.com/photo-1622286346003-c5c7e63b1088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Headphone",
      imageUrl:
        "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Mouse",
      imageUrl:
        "https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 4,
      title: "Keyboard",
      imageUrl:
        "https://images.unsplash.com/photo-1643138591291-f9142828adcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      imageUrl:
        "https://images.unsplash.com/photo-1605957072929-4fd939a05e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return <Categories categories={categories} />;
};

export default App;
