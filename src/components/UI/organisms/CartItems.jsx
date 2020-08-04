/** @format */

import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartItem from '<molecules>/CartItem';
import { CartContext } from '<state>/CartContext';

const CartItems = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <CartItems.Container>
      {cartItems.length === 0 ? (
        <div className="cart_empty">Cart is empty</div>
      ) : (
        renderItems(cartItems)
      )}
      <CartItems.Footer>
        <Link className="back_btn" to="/">
          ← Continue Shopping
        </Link>
        <div>
          Total: <span className="total">${total}</span>
        </div>
      </CartItems.Footer>
    </CartItems.Container>
  );

  function renderItems(items) {
    return items.map((item, index) => <CartItem key={index} book={item} />);
  }
};

CartItems.Container = styled.section`
  flex-basis: 60%;
  margin-bottom: 3rem;

  .cart_empty {
    font-size: 2rem;
    margin: 1.5rem 0;
    text-transform: uppercase;
  }
`;

CartItems.Footer = styled.footer`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .back_btn {
    text-decoration: none;
    font-size: 1.15rem;
    font-weight: 700;
  }

  .total {
    font-size: 1.45rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    .back_btn {
      margin-top: 1rem;
      align-self: flex-start;
      font-size: 0.85rem;
    }

    .total {
      font-size: 1rem;
    }

    div {
      align-self: flex-end;
    }
  }
`;

export default CartItems;
