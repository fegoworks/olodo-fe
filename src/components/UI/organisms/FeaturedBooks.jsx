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

const FeaturedBooks = () => {
  return (
    <FeaturedBooks.Container>
      <h4 className="header">FEATURED BOOKS</h4>
      <Carousel options={flickityOptions} static={true}>
        {renderBooks(recent)}
      </Carousel>
    </FeaturedBooks.Container>
  );

  function renderBooks(items) {
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
        <BookDetail book={item} />
      </BookPhoto>
    ));
  }
};

FeaturedBooks.Container = styled.section`
  margin-top: 1.5rem;

  @media (max-width: 1024px) {
    .carousel-cell {
      width: 20%;
      margin-right: 1rem;
    }
  }

  @media (max-width: 768px) {
    .carousel-cell {
      width: 30%;
    }
  }

  @media (max-width: 576px) {
    .carousel-cell {
      width: 45%;
    }
  }

  @media (max-width: 375px) {
    .carousel-cell {
      width: 62%;
    }
  }

  @media (max-width: 320px) {
    .carousel-cell {
      width: 70%;
    }
  }
`;

export default FeaturedBooks;
