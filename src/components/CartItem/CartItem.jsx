/* eslint-disable react/prop-types */
import "./CartItem.css";
import { useCart } from "../../hooks/useCart";
import toast from "react-hot-toast";

const notify = () => toast('Removed Event from Cart');

const CartItem = ({ event }) => {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    notify();
    removeFromCart(event);
  };

  return (<>
    <div className="cart-item">
      <img src={event.picture} alt={event.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-title">{event.name}</h2>
        <div id="action">
          <h3 className="cart-item-price">₹ {event.amount}</h3>
          <button className="remove-button" onClick={handleRemoveFromCart}>
            Remove
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartItem;
