import React from "react";
import { useCartContext } from "../context/cart_context";
import CartAmountToggle from "./CartAmountToggle";
import FormatPrice from "../Helpers/FormatPrice";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const setIncrease = () => {
    toggleAmount(id, "inc");
  };

  const setDecrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <div className="grid grid-five-column">
      <div className="cart-image--name ">
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <p>{name}</p>

          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{
                backgroundColor: color,
                color: color,
              }}></div>
          </div>
        </div>
      </div>
      {/* // price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      {/* //Quantity */}
      <div>
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
