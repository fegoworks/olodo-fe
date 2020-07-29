/** @format */
import React from 'react';
import styled from 'styled-components';
import Text from '<atoms>/Text';
import Title from '<atoms>/Title';
import Button from '<atoms>/Button';

const Checkout = () => {
  return (
    <Checkout.Container>
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
          <input type="text" name="month" placeholder="mm" />
          <input type="text" name="year" placeholder="yyyy" />
        </div>
        <div>
          <label htmlFor="">CVV</label>
          <input type="text" name="cvv" placeholder="xxx" />
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
    </Checkout.Container>
  );
};

Checkout.Container = styled.form`
  background: whitesmoke;
  padding: 1.5rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
  -moz-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
  box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
  height: 100%;

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
export default Checkout;
