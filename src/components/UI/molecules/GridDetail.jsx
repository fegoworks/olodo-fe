/** @format */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Text from '<atoms>/Text';
import Button from '<atoms>/Button';
import styled from 'styled-components';
import { CartContext } from '<state>/CartContext';

const GridDetail = ({ book }) => {
  const myBook = book;
  const { available, title, author, year, genre, price } = book;
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <GridDetail.Container>
      <h5 className={available === 'Available' ? 'available' : 'borrowed'}>
        {available}
      </h5>
      <Text fontSize="xs" color="black" fontWeight="bold">
        {title}
      </Text>
      <div>
        <p className="grid-item">{author}</p>
        <p className="grid-item">{year}</p>
      </div>
      <div>
        <p className="grid-item">Genre: {genre}</p>
        <p className="grid-item">Price: ${price}.00</p>
      </div>
      {button(available, myBook)}
    </GridDetail.Container>
  );

  function button(available, book) {
    if (available === 'Sold Out') {
      return null;
    }

    return isInCart(book) ? (
      <Button
        className="btn_more"
        color="whiteSmoke"
        borderRadius="0.35rem"
        padding="0.25rem 0.55rem"
        background="purple"
        fontSize="xxxs"
        handleClick={() => increase(book)}
      >
        Add more
      </Button>
    ) : (
      <Button
        className="btn_add"
        color="whiteSmoke"
        borderRadius="0.35rem"
        padding="0.25rem 0.55rem"
        background="limegreen"
        fontSize="xxxs"
        handleClick={() => addProduct(book)}
      >
        + Add to cart
      </Button>
    );
  }
};

GridDetail.Container = styled.div`
  padding: 0.75rem;

  h5 {
    margin: 0;
    margin-bottom: 0.2rem;
  }
  .grid-item {
    margin: 0;
    margin-bottom: 0.2rem;
    font-size: 0.7rem;
  }

  div {
    margin: 0.5rem 0;
  }

  .btn_more:hover {
    background: none;
    border: 1px solid purple;
    color: purple;
  }

  .btn_more:active {
    border: 2px solid purple;
  }

  .btn_add:hover {
    background: none;
    border: 1px solid limegreen;
    color: lime;
  }

  .btn_add:active {
    border: 2px solid lime;
  }
`;

GridDetail.defaultProps = {
  available: 'Available',
  title: 'Book One',
  author: 'Author One',
  year: '1917',
  genre: 'Novella',
  labels: 'Crime',
};

GridDetail.propTypes = {
  available: PropTypes.oneOf(['Available', 'Sold Out']),
  title: PropTypes.oneOfType([PropTypes.string]).isRequired,
  author: PropTypes.oneOfType([PropTypes.string]).isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  genre: PropTypes.oneOfType([PropTypes.string]).isRequired,
  labels: PropTypes.oneOfType([PropTypes.string]).isRequired,
};

export default GridDetail;
