/** @format */
import React from 'react';
import styled from 'styled-components';
import PageTemplate from '<templates>/PageTemplate';
import CartItems from '<organisms>/CartItems';
import Checkout from '<molecules>/Checkout';

const CartPage = () => {
  return (
    <PageTemplate>
      <CartPage.Container>
        <CartItems />
        <Checkout />
      </CartPage.Container>
    </PageTemplate>
  );
};

CartPage.Container = styled.section`
  margin: 1.65rem 2.75rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default CartPage;
