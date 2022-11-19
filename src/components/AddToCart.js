import React, { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ product }) => {
  // console.log(products);

  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;

  // we add colors[0] to make sure at least first one is by default selected
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, id) => {
            return (
              <button
                key={id}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => {
                  setColor(curColor);
                }}>
                {/* to show the tick mark on the active color code  */}
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart button  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink
        to="/cart"
        // NOTE: the Products in arg. is the one who is having all tht single product data of an individual. we call singleProduct api and the data we get stored in it. So it is coming from the singleProduct page
        onClick={() => {
          addToCart(id, color, amount, product);
        }}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
