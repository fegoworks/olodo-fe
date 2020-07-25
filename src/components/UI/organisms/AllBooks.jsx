/** @format */

import React from 'react';
import BookGrid from '<molecules>/BookGrid';
import { books } from 'services/data';

const AllBooks = () => <BookGrid title="All BOOKS" books={books} />;

export default AllBooks;
