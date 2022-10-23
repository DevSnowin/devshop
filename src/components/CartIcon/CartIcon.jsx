import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./CardIcon.Styles";

const CartIcon = () => {
  const { setIsCartOpen, cartCount, isCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
