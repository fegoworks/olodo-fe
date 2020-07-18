/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '<atoms>/Title';
import BookPhoto from '<molecules>/BookPhoto';
import { recent } from 'services/data';

import Carousel from 'react-flickity-component';

const flickityOptions = {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  freeScroll: true,
  arrowShape: {
    x0: 30,
    x1: 50,
    y1: 15,
    x2: 50,
    y2: 15,
    x3: 50,
  },
};

const FeaturedBooks = () => (
  <FeaturedBooks.Container>
    <Title fontSize="sm">FEATURED BOOKS</Title>
    <Carousel options={flickityOptions} static={true}>
      {recent.map((book, index) => (
        <BookPhoto className="carousel-cell" key={index} book={book} />
      ))}
    </Carousel>
  </FeaturedBooks.Container>
);

FeaturedBooks.Container = styled.section`
  margin-top: 1.5rem;

  .carousel_container > h4,
  .recently_added > h4,
  .all_books > h4 {
    margin: 1rem 2.75rem;
    padding-bottom: 1rem;
    font-weight: 400;
    letter-spacing: 3px;
    border-bottom: solid rgb(231, 226, 226) 1px;
  }
`;

export default FeaturedBooks;
