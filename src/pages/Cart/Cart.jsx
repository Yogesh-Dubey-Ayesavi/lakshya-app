import useCart from "../../hooks/useCart";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div className="cart-container">
        <div id="title">Cart</div>
        {cart.length === 0 ? (
          <p id="empty">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-display">
              {cart.map((event) => (
                <CartItem key={event.id} event={event} />
              ))}
            </div>
            <div id="checkout">
              <button onClick={() => navigate("/payment")}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
