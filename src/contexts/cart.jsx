/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

// Define the initial state
const initialState = {
  cart: [],
};

// Create the context
export const CartContext = createContext();

// Define the reducer function
const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Check if the event is not already in the cart
      if (!state.cart.some(item => item.id === action.payload.id)) {
        return { ...state, cart: [...state.cart, action.payload] };
      }
      return state; // If it's a duplicate, do not modify the state
      case 'REMOVE_FROM_CART':
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
      case 'CLEAR_CART':
        return initialState;
      default:
        return state;
    }
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Define actions
  const addToCart = (event) => {
    dispatch({ type: "ADD_TO_CART", payload: event });
  };

  const removeFromCart = (event) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: event });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
