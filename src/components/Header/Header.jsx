import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import DevLogo from "../../assets/images/devshop.svg";
import { UserContext } from "../../contexts/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

import "./Header.scss";

const Header = () => {
  const { currentUser } = useContext(UserContext);

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
          {!currentUser ? (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          ) : (
            <span className='nav-link' onClick={SignOutUser}>
              Sign Out
            </span>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
