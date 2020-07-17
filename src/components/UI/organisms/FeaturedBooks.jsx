/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '<atoms>/Title';
import BookPhoto from '<molecules>/BookPhoto';
import Slider from 'react-awesome-slider';
import { recent } from 'services/data';

const FeaturedBooks = () => (
  <FeaturedBooks.Container>
    <Title fontSize="sm">FEATURED BOOKS</Title>
    <Slider>
      {recent.map((book, index) => (
        <BookPhoto key={index} book={book} />
      ))}
    </Slider>
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

  .carousel-cell {
    width: 22%;
    height: 21rem;
    border-radius: 5px;
    counter-increment: carousel-cell;
    margin-right: 1.35rem;
  }

  .carousel-cell > img {
    width: 100%;
    height: 21rem;
    -webkit-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
    -moz-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
    box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
  }

  /* Carousel image on hover */
  .carousel-cell > .book_details {
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
  }

  .carousel-cell > .book_details:hover {
    opacity: 1;
  }
`;

export default FeaturedBooks;
