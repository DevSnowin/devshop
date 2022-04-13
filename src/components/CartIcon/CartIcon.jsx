import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import "./CardIcon.scss";

const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen((prev) => !prev);

  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
