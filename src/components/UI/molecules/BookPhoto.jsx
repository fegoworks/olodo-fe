/** @format */

import React, { Fragment } from 'react';
import Image from '@/components/UI/atoms/Image';
import BookDetail from '<molecules>/BookDetail';
import styled from 'styled-components';

const BookPhoto = ({ book }) => (
  <Fragment>
    <Image imageUrl={book.imageUrl} altTitle={book.title} width="5rem" />
    <BookDetail
      available={book.available}
      title={book.title}
      author={book.author}
      year={book.year}
      genre={book.genre}
      labels={book.labels}
    />
  </Fragment>
);

export default BookPhoto;
