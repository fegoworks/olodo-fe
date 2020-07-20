/** @format */

import React from 'react';
import styled from 'styled-components';
import BookDetail from '<molecules>/BookDetail';
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

const renderBooks = (items) => {
  return items.map((item, index) => (
    <BookPhoto
      width="22%"
      borderRadius="5px"
      marginRight="1.35rem"
      height="21rem"
      className="carousel-cell"
      key={index}
      book={item}
    >
      <BookDetail
        available={item.available}
        title={item.title}
        author={item.author}
        year={item.year}
        genre={item.genre}
        labels={item.labels}
      />
    </BookPhoto>
  ));
};

const FeaturedBooks = () => (
  <FeaturedBooks.Container>
    <h4 className="header">FEATURED BOOKS</h4>
    <Carousel options={flickityOptions} static={true}>
      {renderBooks(recent)}
    </Carousel>
  </FeaturedBooks.Container>
);

FeaturedBooks.Container = styled.section`
  margin-top: 1.5rem;
`;

export default FeaturedBooks;
