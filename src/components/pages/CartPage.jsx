/** @format */
import React from 'react';
import styled from 'styled-components';
import PageTemplate from '<templates>/PageTemplate';
import Button from '<atoms>/Button';
import Text from '<atoms>/Text';
import Title from '<atoms>/Title';

const CartPage = () => {
  return (
    <PageTemplate>
      <CartPage.Container>
        <CartPage.Items>
          <div className="item">
            <div className="d_flex">
              <img
                src="https://static.zlibcdn.com/covers/books/d2/81/4a/d2814a7fc86c846a847e081d65237e47.jpg"
                alt="item"
              />
              <div className="detail">
                <Text fontSize="sm" fontWeight="bold" margin="0">
                  Learning NumPy
                </Text>
                <Text fontSize="xs" margin="0">
                  $4000.00
                </Text>
              </div>
            </div>
            <div className="d_flex">
              <Button color="grey" fontSize="base">
                -
              </Button>
              <span className="quantity">3</span>
              <Button color="grey" fontSize="base">
                +
              </Button>
            </div>
            <Text fontSize="xs" fontWeight="bold" margin="0">
              $4000.00
            </Text>
            <Button color="grey" fontSize="base">
              x
            </Button>
          </div>
          <CartPage.Footer>
            <a href="">Continue Shopping</a>
            <div>
              Total: <span className="total">$4000.00</span>
            </div>
          </CartPage.Footer>
        </CartPage.Items>
        <CartPage.Checkout>
          <Title fontSize="base">Payment Info.</Title>
          <Text display="block" fontSize="xxxs" color="grey">
            Payment Method:
          </Text>
          <div className="radio">
            <input type="radio" name="checkout" id="debit" checked />
            <label for="debit">Debit Card</label>
          </div>
          <div className="radio">
            <input type="radio" name="checkout" id="paystack" />
            <label for="paystack">Flutterwave</label>
          </div>
          <div className="formText">
            <label htmlFor="">Customer Name: </label>
            <input type="text" />
          </div>
          <div className="formText">
            <label htmlFor="">Card Number: </label>
            <input type="text" placeholder="**** **** **** ****" />
          </div>
          <div className="expiry">
            <div>
              <label htmlFor="">Expiry Date</label>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">CVV</label>
              <input type="text" />
            </div>
          </div>
          <Button
            display="block"
            textAlign="center"
            width="100%"
            color="white"
            width="100%"
            background="blue"
            padding="0.75rem"
          >
            Checkout
          </Button>
        </CartPage.Checkout>
      </CartPage.Container>
    </PageTemplate>
  );
};

CartPage.Container = styled.section`
  margin: 1.65rem 2.75rem;
  display: flex;
  justify-content: space-between;
`;

CartPage.Items = styled.section`
  flex-basis: 60%;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 4rem;
      height: 6rem;
    }

    .detail {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
    }
  }
  .quantity {
    border: 0.01rem grey solid;
    padding: 0.2rem 0.85rem;
    margin: 0 0.75rem;
    font-size: 0.75rem;
  }
`;

CartPage.Footer = styled.footer`
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
`;

CartPage.Checkout = styled.form`
  background: whitesmoke;
  padding: 1.5rem;
  border-radius: 0.5rem;

  .radio {
    label {
      font-size: 0.85rem;
      cursor: pointer;
      margin-left: 0.2rem;
      padding: 3rem 0;
    }
    margin: 1.5rem 0;
  }

  .formText {
    label {
      display: block;
      font-size: 0.75rem;
      color: grey;
      margin-bottom: 0.5rem;
    }

    input {
      background: none;
      width: 100%;
      border: none;
      padding: 0.2rem 0;
      border-bottom: solid grey 1px;
      outline: none;
    }
    margin: 1.5rem 0;
  }

  .expiry {
    display: flex;
    margin-bottom: 3rem;

    input {
      width: 3rem;
      margin-right: 1rem;
      background: none;
      border: none;
      padding: 0.2rem 0;
      border-bottom: solid grey 1px;
      outline: none;
    }
    label {
      display: block;
      font-size: 0.75rem;
      color: grey;
      margin-bottom: 0.5rem;
    }
  }
`;

export default CartPage;
