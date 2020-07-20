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
      padding="0.25rem 0.55rem"
      background="limegreen"
      fontSize="xxxs"
    >
      + Add to cart
    </Button>
  );
};

const GridDetail = ({ available, title, author, year, genre, labels }) => (
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
      <p className="grid-item">Labels: {labels}</p>
    </div>
    {button(available)}
  </GridDetail.Container>
);

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
