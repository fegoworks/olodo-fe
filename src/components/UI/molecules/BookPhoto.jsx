/** @format */

import React, { Fragment } from 'react';
import Image from '<atoms>/Image';
import styled from 'styled-components';

const BookPhoto = ({ book, className, children }) => (
  <BookPhoto.Container className={className}>
    <Image imageUrl={book.imageUrl} altTitle={book.title} />
    {children}
  </BookPhoto.Container>
);

BookPhoto.Container = styled.div`
  width: 22%;
  height: 21rem;
  border-radius: 5px;
  margin-right: 1.35rem;

  img {
    width: 100%;
    height: 21rem;
    -webkit-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
    -moz-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
    box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
  }
`;

export default BookPhoto;
