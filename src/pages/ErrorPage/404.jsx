import React from "react";
import "./404.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='error-container'>
      <h1 className='emoji'>⚠️</h1>
      <h3 className='error-msg'>Page not found!</h3>
      <Link to='/' className='go-back'>
        <h4>Go home</h4>
      </Link>
    </div>
  );
};

export default ErrorPage;
