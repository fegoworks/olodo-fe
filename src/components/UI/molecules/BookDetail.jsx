/** @format */

import React from 'react';
import Text from '<atoms>/Text';
import Button from '<atoms>/Button';
import styled from 'styled-components';

const BookDetail = ({ available, title, author, year, genre, labels }) => (
  <BookDetail.Container>
    <Button className="close_book">X</Button>
    <Text className="available" fontSize="xs" color={available}>
      {available}
    </Text>
    <Text fontSize="sm" color="white" fontWeight="bold">
      {title}
    </Text>
    <div>
      <Text fontSize="sm" color="white" fontWeight="bold">
        {author}
      </Text>
      <Text fontSize="sm" color="white" fontWeight="bold">
        {year}
      </Text>
    </div>
    <div>
      <Text fontSize="sm" color="white" fontWeight="bold">
        Genre: {genre}
      </Text>
      <Text fontSize="sm" color="white" fontWeight="bold">
        Labels: {labels}
      </Text>
    </div>
    <Button
      color="white"
      border="limegreen 2px solid"
      padding="2rem"
      background="whiteSmoke"
    >
      Add to Wallet
    </Button>
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
`;

export default BookDetail;
