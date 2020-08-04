/** @format */
import React, { useContext } from 'react';
import styled from 'styled-components';
import Text from '<atoms>/Text';
import Button from '<atoms>/Button';
import { CartContext } from '<state>/CartContext';

const CartItem = ({ book }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);
  return (
    <CartItem.Container>
      <div className="d_flex book_detail">
        <img src={book.imageUrl} alt={book.title} />
        <div className="detail">
          <Text fontSize="sm" fontWeight="bold" margin="0">
            {book.title}
          </Text>
          <Text fontSize="xs" margin="0">
            ${book.price}.00
          </Text>
        </div>
      </div>
      <div className="d_flex book_features">
        <div className="d_flex">
          <Button
            handleClick={() => decrease(book)}
            color="grey"
            fontSize="base"
          >
            -
          </Button>
          <span className="quantity">{book.quantity}</span>
          <Button
            handleClick={() => increase(book)}
            color="grey"
            fontSize="base"
          >
            +
          </Button>
        </div>
        <Text fontSize="xs" fontWeight="bold" margin="0">
          ${book.price * book.quantity}.00
        </Text>
        <Button
          handleClick={() => removeProduct(book)}
          color="grey"
          fontSize="base"
        >
          x
        </Button>
      </div>
    </CartItem.Container>
  );
};

CartItem.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 1rem;
  -webkit-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
  -moz-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
  box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
  margin: 1.5rem 0;

  img {
    width: 4rem;
    height: 6rem;
  }

  .detail {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  .book_detail {
    flex-basis: 30%;
    margin-right: 4rem;
  }

  .book_features {
    flex-basis: 70%;
    justify-content: space-between;
  }

  .quantity {
    border: 0.01rem grey solid;
    padding: 0.2rem 0.85rem;
    margin: 0 0.75rem;
    font-size: 0.75rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;

    .book_detail {
      margin-bottom: 1rem;
    }

    .book_features {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export default CartItem;
