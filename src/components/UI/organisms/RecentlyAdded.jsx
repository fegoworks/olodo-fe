/** @format */

import React from 'react';
import styled from 'styled-components';
import GridDetail from '<molecules>/GridDetail';
import BookPhoto from '<molecules>/BookPhoto';
import { recent } from 'services/data';

const renderBooks = (items) => {
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
};

const RecentlyAdded = () => (
  <RecentlyAdded.Container>
    <h4 className="header">RECENTLY ADDED</h4>
    <RecentlyAdded.Grid>{renderBooks(recent)}</RecentlyAdded.Grid>
  </RecentlyAdded.Container>
);

RecentlyAdded.Container = styled.section`
  margin-top: 5rem;
`;

RecentlyAdded.Grid = styled.div`
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
`;

export default RecentlyAdded;
