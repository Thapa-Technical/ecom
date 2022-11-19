const filter_reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      let maxPrice = action.payload.map((product) => product.price);
      console.log("🚀 ~ file: filter_reducer.js ~ line 5 ~ maxPrice", maxPrice);

      /* NOTE: You try to pass array, but functions (min, max) accept only number arguments.
         You need to unpack array to array of arguments with the spread operator (...) */
      maxPrice = Math.max(...maxPrice);
      console.log(
        "🚀 ~ file: filter_reducer.js ~ line 11 ~ maxPrice",
        maxPrice
      );
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
        // we are only copying the value not the referencing bcz once we filter then we can't go back to the original data. that's why we need to use the ... dots .
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SORT_PRICE":
      return {
        ...state,
        sort: action.payload,
      };

    case "SORT_FILTER_PRICES":
      /* TODO: we need one temp var and stored the val. of filterproduct */

      const { filter_products, sort } = state;

      let tempProduct = [...filter_products];

      if (sort === "price-lowest") {
        tempProduct = tempProduct.sort((a, b) => a.price - b.price);
      }

      if (sort === "price-highest") {
        tempProduct = tempProduct.sort((a, b) => b.price - a.price);
      }

      if (sort === "name-a") {
        tempProduct = tempProduct.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (sort === "name-z") {
        tempProduct = tempProduct.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        filter_products: tempProduct,
      };

    // update the name and value in state variable
    case "UPDATE_FILTERS":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    // NOTE: sidebar filter conditions
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProd = [...all_products];

      // let tempFilterProd = [...filter_products];

      let { text, category, company, price, colors } = state.filters;

      if (text) {
        tempFilterProd = tempFilterProd.filter((search) =>
          // p.name.toLowerCase().startsWith(text)
          search.name.toLowerCase().includes(text)
        );
      }

      if (category !== "all") {
        tempFilterProd = [
          ...new Set(
            tempFilterProd.filter(
              (c) => c.category.toLowerCase() === category.toLowerCase()
            )
          ),
        ];
      }

      if (company !== "all") {
        tempFilterProd = tempFilterProd.filter((c) => c.company === company);
      }

      if (colors !== "all") {
        tempFilterProd = tempFilterProd.filter((prod) =>
          prod.colors.includes(colors)
        );
      }

      if (price === 0) {
        tempFilterProd = tempFilterProd.filter((prod) => prod.price === price);
      } else {
        tempFilterProd = tempFilterProd.filter((prod) => prod.price <= price);
      }

      return {
        ...state,
        filter_products: tempFilterProd,
      };

    case "CLEAR_FILTERS":
      console.log(
        "🚀 ~ file: filter_reducer.js ~ line 80 ~ state",
        action.payload
      );

      return {
        ...state,
        filters: {
          ...state.filters,
          category: "all",
          colors: "all",
          company: "all",
          min_price: 0,
          price: state.filters.max_price,
          // shipping: false,
          text: "",
        },
      };

    default:
      return state;
  }
  // return state;
};

export default filter_reducer;
