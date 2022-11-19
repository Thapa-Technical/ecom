import axios from "axios";
import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/product_reducer";

// const API = "https://thapa-store.up.railway.app/api/products";
const API = "https://api.pujakaitem.com/api/products";

const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  stock_count: 0,
  isSinglePageLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 1st we need to call the api for all the products
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      // console.log(res.data);
      const products = res.data;
      dispatch({ type: "API_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "SET_PRODUCTS_ERROR" });
    }
  };

  // 2nd we need to call the api for all the single products
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LODING" });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({ type: "GET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// creating a global context api
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
