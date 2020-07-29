/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CartItem from '<molecules>/CartItem';
import { recent } from 'services/data';

const CartItems = () => {
  return (
    <CartItems.Container>
      {renderItems(recent)}
      <CartItems.Footer>
        <a href="">← Continue Shopping</a>
        <div>
          Total: <span className="total">$4000.00</span>
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
`;

CartItems.Footer = styled.footer`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
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

    a {
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
