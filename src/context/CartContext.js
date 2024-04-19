import React, { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext(); 

const initialState = { cartItems: [] };

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer();
  const addProduct = payload => {};
  const contextValues = {
    addProduct,
    ...initialState
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;