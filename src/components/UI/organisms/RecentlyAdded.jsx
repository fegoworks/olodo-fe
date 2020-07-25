/** @format */

import React from 'react';
import BookGrid from '<molecules>/BookGrid';
import { recent } from 'services/data';

const RecentlyAdded = () => <BookGrid title="RECENTLY ADDED" books={recent} />;

export default RecentlyAdded;
