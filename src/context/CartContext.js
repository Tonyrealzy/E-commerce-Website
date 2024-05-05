import React, { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext(); 

const initialState = { cartItems: [] };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = payload => {
    dispatch({type: 'ADD', payload});
  };

  const removeProduct = payload => {
    dispatch({type: 'REMOVE', payload});
  };

  const increaseQuantity = payload => {
    dispatch({type: 'INCREASEQTY', payload});
  };

  const reduceQuantity = payload => {
    dispatch({type: 'DECREASEQTY', payload});
  };

  const clearCart = () => {
    dispatch({type: 'CLEARCART', payload: undefined});
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