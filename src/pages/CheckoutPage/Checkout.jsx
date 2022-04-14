import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../contexts/Cart.context";
import "./Checkout.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const decrement = (quantity, id) => {};

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>price</span>
        </div>
        <div className='header-block'>
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((item, i) => (
        <CheckoutItem key={i} cartItem={item} />
      ))}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
