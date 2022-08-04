import React, { createContext, useReducer, useEffect, useContext } from "react";
import { useGlobalContext } from "../context";
import reducer from "../reducers/filter_reducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
    price: 0,
    min_price: 0,
    max_price: 0,
    shipping: false,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useGlobalContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  /* NOTE: grid view */
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  /* NOTE: List View */
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // NOTE: Sort Price & value
  const sortUpdate = (e) => {
    const value = e.target.value;
    return dispatch({ type: "SORT_PRICE", payload: value });
  };

  // NOTE: Updating the Search Input & all the filters
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    /* NOTE: we use textContent bcz button doesn't support value  */
    if (name === "category") {
      value = e.target.textContent;
    }

    /* NOTE: we don't have any option to get the values of the colors so we use data attribute */
    if (name === "colors") {
      alert("Hii");
      value = e.target.dataset.color;
    }

    // NOTE: Range input return string value, so need to convert into number
    if (name === "price") {
      value = Number(value);
    }

    // NOTE: to check the checkbox is ticked or not
    if (name === "shipping") {
      value = e.target.checked;
    }

    return dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };

  //to clear the filter

  const clearFilters = () => {
    return dispatch({ type: "CLEAR_FILTERS" });
  };

  // NOTE: For Sorting Prices and Names.Also we need to change when filters changes
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_FILTER_PRICES" });
  }, [products, state.sort, state.filters]);

  // to add the product to both the filter product and all product
  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sortUpdate,
        updateFilters,
        clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
