import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import "./Checkout.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);

  return (
    <div style={{ marginTop: "80px" }}>
      <h1>Checkout Page</h1>
      {cartItems.map((item, i) => (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>
            <span style={{ paddingInline: "0.8rem" }}>{`<`}</span>
            {item.quantity}
            <span style={{ paddingInline: "0.8rem" }}>{`>`}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
