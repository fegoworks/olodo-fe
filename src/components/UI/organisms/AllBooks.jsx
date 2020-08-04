/** @format */

import React, { useContext } from 'react';
import BookGrid from '<molecules>/BookGrid';
import { BooksContext } from '<state>/BooksContext';

const AllBooks = () => {
  const { items: books } = useContext(BooksContext);
  return <BookGrid title="All BOOKS" books={books} />;
};

export default AllBooks;
