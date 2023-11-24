/* eslint-disable react/prop-types */
import classes from  "./CartItem.module.css";
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
      <div className={classes["cart-item"]}>
        <img src={event.picture} alt={event.name} className={classes["cart-item-image"]} />
        <div className={classes["cart-item-details"]}>
          <div className={classes["cart-item-header"]}>
            <h2 className={classes["cart-item-title"]}>{event.name}</h2>
          </div>
          <div className={classes["cart-item-subtitle"]}>
            <p className={classes["cart-item-date"]}>
              {new Date(event.datetime).toLocaleDateString()}
            </p>
            <p className={classes["cart-item-price"]}>₹ {event.amount}</p>
          </div>
        </div>
        <button className={classes["remove-button"]} onClick={handleRemoveFromCart}>
          Remove
        </button>
      </div>
    </>
  );
};

export default CartItem;
