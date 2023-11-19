import useCart from "../../hooks/useCart";
import CartItem from "../../components/CartItem/CartItem";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes['cart-container']}>
        <div id={classes.title}>Cart</div>
        {cart.length === 0 ? (
          <p id={classes.empty}>Your cart is empty</p>
        ) : (
          <>
            <div className={classes['cart-display']}>
              {cart.map((event) => (
                <CartItem key={event.id} event={event} />
              ))}
            </div>
            <div id={classes.checkout}>
              <button onClick={() => navigate("/payment")}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
