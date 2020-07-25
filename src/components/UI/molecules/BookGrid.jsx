/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GridDetail from '<molecules>/GridDetail';
import BookPhoto from '<molecules>/BookPhoto';

const BookGrid = ({ title, books }) => {
  return (
    <BookGrid.Container>
      <h4 className="header">{title}</h4>
      <BookGrid.Grid>{renderBooks(books)}</BookGrid.Grid>
    </BookGrid.Container>
  );

  function renderBooks(items) {
    return items.map((item, index) => (
      <BookPhoto className="book_grid" key={index} book={item}>
        <GridDetail
          available={item.available}
          title={item.title}
          author={item.author}
          year={item.year}
          genre={item.genre}
          labels={item.labels}
        />
      </BookPhoto>
    ));
  }
};

BookGrid.Container = styled.section`
  margin-top: 5rem;
`;

BookGrid.Grid = styled.div`
  display: grid;
  margin: 1.65rem 2.75rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.25rem;

  justify-content: unset;

  img {
    width: 6.5rem;
    height: 10rem;
  }

  .book_grid {
    display: flex;

    :hover {
      -webkit-box-shadow: 0px -3px 71px -17px rgba(209, 209, 209, 1);
      -moz-box-shadow: 0px -3px 71px -17px rgba(209, 209, 209, 1);
      box-shadow: 0px -3px 71px -17px rgba(209, 209, 209, 1);
      cursor: pointer;
    }
  }

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 895px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 1.65rem 2.25rem;
  }

  @media (max-width: 375px) {
    margin: 1.65rem 1.85rem;
  }

  @media (max-width: 320px) {
    margin: 1.65rem 1.35rem;
  }
`;

BookGrid.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

export default BookGrid;
