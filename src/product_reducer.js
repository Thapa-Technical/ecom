const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "API_SUCCESS":
      const featured = action.payload.filter(
        (curElem) => curElem.featured === true
      );
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featured,
      };

    case "SET_PRODUCTS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LODING":
      return {
        ...state,
        isSinglePageLoading: true,
      };

    case "GET_SINGLE_PRODUCT":
      return {
        ...state,
        isSinglePageLoading: false,
        singleProduct: action.payload,
      };
  }
  return state;
};

export default reducer;
