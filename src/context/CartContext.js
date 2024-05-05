import React, { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

const Storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = { cartItems: Storage };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = payload => {
    dispatch({type: 'ADD', payload});
    return state.cartItems;
  };

  const removeProduct = payload => {
    dispatch({type: 'REMOVE', payload});
    return state.cartItems;
  };

  const increaseQuantity = payload => {
    dispatch({type: 'INCREASEQTY', payload});
    return state.cartItems;
  };

  const reduceQuantity = payload => {
    dispatch({type: 'DECREASEQTY', payload});
    return state.cartItems;
  };

  const clearCart = () => {
    dispatch({type: 'CLEARCART', payload: undefined});
    return state.cartItems;
  };

  const getItems = () => {
    return state.cartItems;
  };

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    reduceQuantity,
    clearCart,
    getItems,
    ...state
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;