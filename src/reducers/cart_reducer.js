const cat_reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;

      //Note:  we are doing this to find the already existing item in cart with the same color
      const tempItem = state.cart.find((i) => i.id === id + color);
      console.log("🚀 ~ file: cart_reducer.js ~ line 12 ~ tempItem", tempItem);

      let newItem;
      if (tempItem) {
        const tempItem = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            // the cart amount should never go above the aval. stock
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return {
              ...cartItem,
              amount: newAmount,
            };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempItem };
      } else {
        newItem = {
          id: id + color,
          name: product.name,
          color: color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
      }

      return {
        ...state,
        cart: [...state.cart, newItem],
      };

    case "TOGGLE_AMOUNT":
      let { newId, value } = action.payload;

      const tempAmount = state.cart.map((item) => {
        if (item.id === newId) {
          if (value == "inc") {
            let newItem = item.amount + 1;

            if (newItem >= item.max) {
              newItem = item.max;
            }

            return {
              ...item,
              amount: newItem,
            };
          }

          if (value == "dec") {
            let newItem = item.amount - 1;
            if (newItem < 1) {
              newItem = 1;
            }
            return {
              ...item,
              amount: newItem,
            };
          }
        } else {
          return item;
        }
      });

      return { ...state, cart: tempAmount };

    case "REMOVE_ITEM":
      const updatedItems = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: updatedItems,
      };

    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
      };
    }

    case "CART_TOTAL_AMOUNT":
      let { price } = action.payload;
      let totalPrice = price * amount;
      return {
        ...state,
        total_amount: totalPrice,
      };
  }
};

export default cat_reducer;
