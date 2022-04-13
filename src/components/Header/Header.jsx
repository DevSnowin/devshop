import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./Header.scss";
import DevLogo from "../../assets/images/devshop.svg";

const Header = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <img src={DevLogo} alt='logo' className='logo' />
        </Link>
        <div className='nav-items'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/auth'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
