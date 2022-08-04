import React, { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducers/cart_reducer";

const getCartItems = () => {
  let cartItems = localStorage.getItem("cart");
  if (cartItems) {
    return JSON.parse(localStorage.getItem("cart"));
  } else return [];
};

const initialState = {
  // cart:[]
  cart: getCartItems(),
  total_item: 0,
  total_amount: 0,
  shipping_fee: 512,
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // don't do the destructure while accessing the arguments, I did the use {} and I regret it
  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, product },
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    console.log(
      "🚀 ~ file: cart_context.js ~ line 26 ~ useEffect ~ state.cart",
      state.cart
    );
  }, [state.cart]);

  const totalAmount = (amount, price) => {
    dispatch({ type: "CART_TOTAL_AMOUNT", payload: { amount, price } });
  };

  //Toggle Amount
  const toggleAmount = (newId, value) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { newId, value } });
  };

  // remove the item
  const removeItem = (id) => {
    return dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        totalAmount,
        removeItem,
        clearCart,
        toggleAmount,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
