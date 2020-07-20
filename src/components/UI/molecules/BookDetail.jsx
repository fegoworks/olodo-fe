/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import Text from '<atoms>/Text';
import Button from '<atoms>/Button';
import styled from 'styled-components';

const button = (available) => {
  if (available === 'Sold Out') {
    return null;
  }
  return (
    <Button
      color="whiteSmoke"
      borderRadius="0.35rem"
      padding="0.45rem 0.75rem"
      background="limegreen"
      fontSize="xxxs"
    >
      + Add to cart
    </Button>
  );
};

const BookDetail = ({ available, title, author, year, genre, labels }) => (
  <BookDetail.Container>
    <Button className="close_btn">X</Button>
    <h5 className={available === 'Available' ? 'available' : 'borrowed'}>
      {available}
    </h5>
    <Text fontSize="sm" color="white" fontWeight="bold">
      {title}
    </Text>
    <div>
      <p className="book-item">{author}</p>
      <p className="book-item">{year}</p>
    </div>
    <div>
      <p className="book-item">Genre: {genre}</p>
      <p className="book-item">Labels: {labels}</p>
    </div>
    {button(available)}
  </BookDetail.Container>
);

BookDetail.Container = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 21rem;
  padding: 1.75rem;
  padding-top: 7rem;
  background: rgb(83, 78, 78);
  background: linear-gradient(
    180deg,
    rgba(83, 78, 78, 0.6) 21%,
    rgba(0, 0, 0, 0.95) 62%
  );
  z-index: 1;
  transition: 0.5s ease;
  -webkit-transition: 0.5s ease;

  :hover {
    opacity: 1;
  }

  .book-item {
    color: whitesmoke;
    font-size: 0.7rem;
    margin: 0;
  }

  div {
    margin-bottom: 0.5rem;
  }

  .close_btn.close_btn {
    display: none;
  }
`;

BookDetail.defaultProps = {
  available: 'Available',
  title: 'Book One',
  author: 'Author One',
  year: '1917',
  genre: 'Novella',
  labels: 'Crime',
};

BookDetail.propTypes = {
  available: PropTypes.oneOf(['Available', 'Sold Out']),
  title: PropTypes.oneOfType([PropTypes.string]).isRequired,
  author: PropTypes.oneOfType([PropTypes.string]).isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  genre: PropTypes.oneOfType([PropTypes.string]).isRequired,
  labels: PropTypes.oneOfType([PropTypes.string]).isRequired,
};

export default BookDetail;
