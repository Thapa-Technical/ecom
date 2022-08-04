import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import FormatPrice from "./Helpers/FormatPrice";
import { Button } from "./styles/Button";
import CartItem from "./components/CartItem";

const Cart = () => {
  const { cart, shipping_fee, total_amount, totalAmount, clearCart } =
    useCartContext();

  if (cart.length == 0) {
    return (
      <Wrapper>
        <h2>No Cart in Item</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="cart-heading grid grid-four-column">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <Button> continue shopping </Button>
          <Button className="btn-clear" onClick={clearCart}>
            Clear shopping Cart
          </Button>
        </div>

        {/* order total_amount */}
        <div className="order-total--amount">
          <div>
            <p>subtotal</p>
            <p>{FormatPrice(total_amount)}</p>
          </div>
          <div>
            <p>Shipping fee:</p>
            <p>{FormatPrice(shipping_fee)}</p>
          </div>
          <hr />
          <div>
            <p>order total:</p>
            <p>{total_amount + shipping_fee}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
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

export default Cart;
