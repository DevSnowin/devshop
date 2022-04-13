import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../CartIcon/CartIcon";

import DevLogo from "../../assets/images/devshop.svg";
import { UserContext } from "../../contexts/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

import "./Header.scss";
import CartDropdown from "../CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/Cart.context";

const Header = () => {
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
