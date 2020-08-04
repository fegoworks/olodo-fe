/** @format */
import React, { useContext } from 'react';
import styled from 'styled-components';

const Search = () => (
  <Search.Container>
    <input
      type="search"
      id="search"
      placeholder="Search books, genres, authors, etc."
    />
  </Search.Container>
);

Search.Container = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 2.75rem;

  input[type='search'] {
    width: 30rem;
    padding: 0.65rem;
    border: solid rgb(231, 226, 226) 1px;
  }

  input[type='search']:focus {
    outline: none;
  }

  @media (max-width: 576px) {
    margin: 1rem 2.25rem;
  }

  @media (max-width: 375px) {
    margin: 1rem 1.85rem;
  }

  @media (max-width: 320px) {
    margin: 1rem 1.35rem;
  }
`;

export default Search;
