/** @format */

import React, { createContext, useState } from 'react';
import { books } from 'services/data';

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [items] = useState(books);

  return (
    <BooksContext.Provider value={{ items }}>{children}</BooksContext.Provider>
  );
};
