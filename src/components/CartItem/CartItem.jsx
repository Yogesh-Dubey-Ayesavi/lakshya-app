/* eslint-disable react/prop-types */
import "./CartItem.css";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";

const notify = () => toast("Removed Event from Cart");

const CartItem = ({ event }) => {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    notify();
    removeFromCart(event);
  };

  return (
    <>
      <div className="cart-item">
        <img src={event.picture} alt={event.name} className="cart-item-image" />
        <div className="cart-item-details">
          <div className="cart-item-header">
            <h2 className="cart-item-title">{event.name}</h2>
          </div>
          <div className="cart-item-subtitle">
            <p className="cart-item-date">
              {new Date(event.datetime).toLocaleDateString()}
            </p>
            <p className="cart-item-price">₹ {event.amount}</p>
          </div>
        </div>
        <button className="remove-button" onClick={handleRemoveFromCart}>
          Remove
        </button>
      </div>
    </>
  );
};

export default CartItem;
