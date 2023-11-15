import { useCart } from "../../hooks/useCart";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-display">
      {cart.map((event) => (
        <CartItem key={event.id} event={event} />
      ))}
    </div>
      )}
    </>
  );
};

export default Cart;
