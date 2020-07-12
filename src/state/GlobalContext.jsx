/** @format */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import api from '<api>/api';

export const BooksContext = React.createContext();
const GlobalContext = (props) => {
  const [books, getBooks] = useState([]);

  useEffect(() => {
    api
      .get('/books')
      .then((response) => getBooks(response.data))
      .catch((err) => console.log(err));
  }, [books.length]);

  return (
    <BooksContext.Provider value={books}>
      {props.children}
    </BooksContext.Provider>
  );
};

GlobalContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContext;
